<script setup></script>
<!-- 
<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template> -->
<template>
  <Navbar />
  <!-- <Hero />
  <About />
  <Projects />
  <Contact /> -->
  <!-- Hero - Putih -->
<Hero class="bg-white" />

<!-- About - Slight blue tint -->
<About class="bg-white" />

<!-- Projects - Slight purple tint -->
<Projects class="bg-purple-50" />

<!-- Contact - Slight gray -->
<Contact class="bg-slate-50" />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>

<style scoped></style>
