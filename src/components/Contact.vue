<template>
    <section class="contact" id="contact">
      <h2 class="section-title">Get In Touch</h2>
      <p class="contact-text">
        I'm currently open to opportunities and would love to connect. 
        Feel free to reach out!
      </p>
  
      <div class="contact-links">
        <a href="mailto:youremail@example.com" class="contact-btn">Email Me</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" class="contact-btn outline">LinkedIn</a>
        <a href="https://github.com/hudazubir" target="_blank" class="contact-btn outline">GitHub</a>
      </div>
  
      <footer class="footer-text">
        © 2026 Nur Huda. Built with Vue.js.
      </footer>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .contact {
    padding: 80px 40px;
    text-align: center;
    background-color: #f9f9f9;
  }
  
  .contact-text {
    max-width: 500px;
    margin: 0 auto 30px auto;
    color: #555;
    line-height: 1.6;
  }
  
  .contact-links {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
  
  .contact-btn {
    background-color: #1a1a1a;
    color: white;
    padding: 12px 28px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 15px;
  }
  
  .contact-btn.outline {
    background-color: transparent;
    color: #1a1a1a;
    border: 1px solid #1a1a1a;
  }
  
  .contact-btn:hover {
    background-color: #4ade80;
    color: #1a1a1a;
    border-color: #4ade80;
  }
  
  .footer-text {
    font-size: 13px;
    color: #999;
  }
  </style>