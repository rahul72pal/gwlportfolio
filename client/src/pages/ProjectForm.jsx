import React, { useState } from 'react';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    demo: '',
    source: '',
    imageSrc: '',
    secretKey: '', // Added secretKey
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://gwlportfolio.onrender.com/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        alert('Project added successfully!');
        // Reset form
        setFormData({
          title: '',
          description: '',
          demo: '',
          source: '',
          imageSrc: '',
          secretKey: '', // Reset secretKey
        });
      } else {
        alert('Error: ' + result.error);
      }
    } catch (error) {
      console.error('Failed to submit project:', error);
      alert('Failed to submit project');
    }
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px',
      color: '#343a40',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      border: '1px solid #ced4da',
      borderRadius: '4px',
      fontSize: '16px',
    },
    inputFocus: {
      borderColor: '#007bff',
      outline: 'none',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#007bff',
      color: 'white',
      fontSize: '16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
  };

  return (
    <div className="container my-5" style={styles.container}>
      <h2 style={styles.header}>Add Project</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="demo"
          placeholder="Demo URL"
          value={formData.demo}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="source"
          placeholder="Source Code URL"
          value={formData.source}
          onChange={handleChange}
          required
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
        <button type="submit" style={styles.button}>
          Add Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
