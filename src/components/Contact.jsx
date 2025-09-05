import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_vj2z32r", // ✅ Your Service ID
        "template_xm9prot", // ✅ Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "5od2BrdmHfU2Hoij4" // ✅ Your Public Key
      )
      .then(() => {
        setSuccessMessage(` Thanks ${formData.name}, I'll get back to you soon!`);

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      })
      .catch((error) => {
        alert(" Failed to send the message. Try again later.");
        console.error(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <h1 style={{
        textAlign: "left",
        fontSize: "36px",
        fontWeight: "bold",
        color: "white",
        textTransform: "uppercase",
        letterSpacing: "2px",
        marginBottom: "25px"
      }}>
         Contact Me
      </h1>

      <div style={styles.container}>
        <h2 style={styles.title}> Contact Me</h2>

        {successMessage && (
          <div style={styles.successMessage}>
            🎉 {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              style={styles.textarea}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              ...styles.button,
              backgroundColor: isSubmitting ? "#ccc" : "#4CAF50",
              cursor: isSubmitting ? "not-allowed" : "pointer"
            }}
          >
            {isSubmitting ? "⏳ Sending..." : " Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "20px",
    color: "#333",
  },
  successMessage: {
    backgroundColor: "#e8f5e9",
    color: "#2e7d32",
    padding: "15px",
    borderRadius: "5px",
    marginBottom: "15px",
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    border: "none",
    borderRadius: "5px",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default ContactForm;
