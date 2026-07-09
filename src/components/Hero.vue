<template>
    <section class="hero" id="home">
      <h1 class="hero-title">Hi, I'm Nur Huda</h1>
      <p class="hero-subtitle">Front-end Developer in progress 🚀</p>
      <a href="#projects" class="hero-btn">View My Work</a>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    text-align: center;
    padding: 20px;
  }
  
  .hero-title {
    font-size: 48px;
    margin-bottom: 10px;
  }
  
  .hero-subtitle {
    font-size: 20px;
    color: #666;
    margin-bottom: 30px;
  }
  
  .hero-btn {
    background-color: #1a1a1a;
    color: white;
    padding: 12px 28px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 16px;
  }
  
  .hero-btn:hover {
    background-color: #4ade80;
    color: #1a1a1a;
  }
  </style>