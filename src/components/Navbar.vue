<!-- <template>
    <nav class="navbar">
    <h1 class="logo text-2xl font-bold text-white">Nurhudazubir</h1>
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
  </style> -->


  <template>
    <nav class="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div class="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 class="text-lg font-semibold text-gray-900 tracking-tight">
         nurhudazubir
        </h1>
        <ul class="flex gap-8 text-sm font-medium text-gray-600">
          <li><a href="#home" class="hover:text-gray-900 transition-colors">Home</a></li>
          <li><a href="#about" class="hover:text-gray-900 transition-colors">About</a></li>
          <li><a href="#projects" class="hover:text-gray-900 transition-colors">Projects</a></li>
          <li><a href="#contact" class="hover:text-gray-900 transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup>
  </script>