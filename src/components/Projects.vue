<template>
    <section class="projects" id="projects">
      <h2 class="section-title">My Projects</h2>
  
      <div class="project-grid">
        <div class="project-card">
          <div class="project-image">🖥️</div>
          <h3>Project One</h3>
          <p>Short description about this project goes here.</p>
          <a href="#" class="project-link">View Project →</a>
        </div>
  
        <div class="project-card">
          <div class="project-image">📱</div>
          <h3>Project Two</h3>
          <p>Short description about this project goes here.</p>
          <a href="#" class="project-link">View Project →</a>
        </div>
  
        <div class="project-card">
          <div class="project-image">🎨</div>
          <h3>Project Three</h3>
          <p>Short description about this project goes here.</p>
          <a href="#" class="project-link">View Project →</a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .projects {
    padding: 80px 40px;
    text-align: center;
  }
  
  .project-grid {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-top: 40px;
  }
  
  .project-card {
    background-color: white;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    padding: 30px;
    width: 280px;
    text-align: left;
    transition: transform 0.2s ease;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
  
  .project-image {
    font-size: 48px;
    margin-bottom: 15px;
  }
  
  .project-card h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .project-card p {
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
  }
  
  .project-link {
    color: #1a1a1a;
    font-weight: 600;
    text-decoration: none;
    font-size: 14px;
  }
  
  .project-link:hover {
    color: #4ade80;
  }
  </style>