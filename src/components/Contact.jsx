import React, { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser"; // Import EmailJS

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [message, setMessage] = useState(null); // Display success/error message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Send email using EmailJS
      emailjs
        .sendForm(
          "service_ap63gn4", // Replace with your EmailJS Service ID
          "template_44p8swm", // Replace with your EmailJS Template ID
          e.target,
          "VL1d2-EekjU-Ci4uW" // Replace with your EmailJS Public Key
        )
        .then(
          (result) => {
            setMessage("Message sent successfully!");
            setIsSubmitting(false);
            setFormData({ name: "", email: "", message: "" }); // Clear form
            setTimeout(() => setMessage(null), 5000); // Hide message after 5 seconds
          },
          (error) => {
            setMessage("Failed to send message. Please try again.");
            setIsSubmitting(false);
            setTimeout(() => setMessage(null), 5000);
          }
        );
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="text-center" id="Contact">
      <h2 className="text-green-400 text-2xl">What's next!</h2>
      <h3 className="text-gray-200 mt-5 mb-3 text-4xl font-bold">
        Get In Touch
      </h3>
      <p className="text-gray-400">
        Let’s Chat! Whether you have a question, a project idea, or just want to{" "}
        <br />
        connect, I’m always happy to hear from you. Drop me a message, and I’ll{" "}
        <br />
        be in touch soon!
      </p>
      <div className="flex justify-center px-4 mb-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl flex flex-col items-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="my-4 bg-white h-12 w-full px-4 rounded shadow"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="my-4 bg-white h-12 w-full px-4 rounded shadow"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}

          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="my-4 bg-white w-full px-4 py-2 rounded shadow"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className={`mt-4 bg-black border-2 border-green-400 text-green-400 px-6 py-4 rounded hover:bg-green-900 transition ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Say Hello"}
          </motion.button>

          {message && (
            <span
              className={`mt-4 text-sm ${
                message.includes("success")
                  ? "text-green-400"
                  : "text-red-500"
              }`}
            >
              {message}
            </span>
          )}
        </form>
      </div>
      <div>
        <span className="text-cyan-300">
          Made with <span className="text-red-500">❤</span> by Naman Shah
        </span>
      </div>
    </div>
  );
}

export default Contact;