<template>
    <nav class="navbar">
      <h1 class="logo">Nur Huda</h1>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: #1a1a1a;
    color: white;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    gap: 30px;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
  
  .nav-links a:hover {
    color: #4ade80;
  }
  </style>