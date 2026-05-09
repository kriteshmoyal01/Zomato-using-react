import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📩 Contact Us</h1>
      <p style={styles.subHeading}>
        We’d love to hear from you. Fill out the form below and we’ll get back
        to you soon.
      </p>

      <div style={styles.infoBox}>
        <p>📍 Location: India</p>
        <p>📞 Phone: +91 98765 43210</p>
        <p>📧 Email: support@zomato-clone.com</p>
      </div>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />

        <textarea
          name="message"
          placeholder="Your Message..."
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Send Message 🚀
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  subHeading: {
    color: "#555",
    marginBottom: "20px",
  },
  infoBox: {
    backgroundColor: "#f5f5f5",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
    textAlign: "left",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    minHeight: "100px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#ff4d2d",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Contact;