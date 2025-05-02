import React, { useState } from 'react';

const ExperienceForm = () => {
    const [formData, setFormData] = useState({
      role: '',
      organisation: '',
      startDate: '',
      endDate: '',
      location: '',
      experiences: ['', ''],
      imageSrc: '',
      secretKey: '', // Added secretKey
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name.startsWith("experience")) {
        const index = parseInt(name.split("-")[1]);
        const updatedExperiences = [...formData.experiences];
        updatedExperiences[index] = value;
        setFormData({ ...formData, experiences: updatedExperiences });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch('http://localhost:5000/api/experiences', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const result = await res.json();
        if (res.ok) {
          alert("Experience added successfully!");
          // Reset form
          setFormData({
            role: '',
            organisation: '',
            startDate: '',
            endDate: '',
            location: '',
            experiences: ['', ''],
            imageSrc: '',
            secretKey: '', // Reset secretKey
          });
        } else {
          alert("Error: " + result.error);
        }
      } catch (error) {
        console.error('Failed to submit experience:', error);
        alert("Failed to submit experience");
      }
    };
  
    return (
      <div className="container my-5" style={styles.container}>
        <h2 style={styles.header}>Add Experience</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="organisation"
            placeholder="Organisation"
            value={formData.organisation}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="startDate"
            placeholder="Start Date"
            value={formData.startDate}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="endDate"
            placeholder="End Date"
            value={formData.endDate}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="experience-0"
            placeholder="Experience 1"
            value={formData.experiences[0]}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="experience-1"
            placeholder="Experience 2"
            value={formData.experiences[1]}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="imageSrc"
            placeholder="Image URL"
            value={formData.imageSrc}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="secretKey"
            placeholder="Secret Key"
            value={formData.secretKey}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Add Experience</button>
        </form>
      </div>
    );
  };

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    transition: 'border-color 0.3s ease',
  },
  inputFocus: {
    outline: 'none',
    borderColor: '#4caf50',
  },
  button: {
    padding: '12px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
};

export default ExperienceForm;
