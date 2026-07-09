<template>
    <section class="about" id="about">
      <h2 class="section-title">About Me</h2>
      <p class="about-text">
        Hi! I'm a front-end developer in progress, learning to build 
        clean and functional websites using Vue.js. I enjoy turning 
        ideas into interactive user interfaces.
      </p>
  
      <div class="skills">
        <span class="skill-badge">HTML</span>
        <span class="skill-badge">CSS</span>
        <span class="skill-badge">JavaScript</span>
        <span class="skill-badge">Vue.js</span>
        <span class="skill-badge">Git</span>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .about {
    padding: 80px 40px;
    text-align: center;
    background-color: #f9f9f9;
  }
  
  .section-title {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  .about-text {
    max-width: 600px;
    margin: 0 auto 30px auto;
    font-size: 16px;
    color: #555;
    line-height: 1.6;
  }
  
  .skills {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  
  .skill-badge {
    background-color: #1a1a1a;
    color: white;
    padding: 8px 18px;
    border-radius: 20px;
    font-size: 14px;
  }
  </style>