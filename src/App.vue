<template>
  <Navbar />
  <Hero class="bg-white dark:bg-gray-900" />
  <About class="bg-white dark:bg-gray-900" />
  <Skills class="bg-slate-50 dark:bg-gray-950" />
  <Projects class="bg-white dark:bg-gray-900" />
  <Contact class="bg-slate-50 dark:bg-gray-950" />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import  Skills from './components/Skills.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>

<style scoped></style>

