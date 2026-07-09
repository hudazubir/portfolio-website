<template>
  <nav class="fixed top-0 w-full bg-white/70 backdrop-blur-lg border-b border-gray-100 z-50 transition-all">
    <div class="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
      
      <a href="#home" class="flex items-center gap-2 group">
        <span class="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-sm font-bold group-hover:bg-emerald-500 transition-colors">
          NH
        </span>
        <h1 class="text-base font-semibold text-gray-900 tracking-tight">
          Nur Huda
        </h1>
      </a>

      <!-- Menu desktop -->
      <ul class="hidden md:flex gap-1 text-sm font-medium text-gray-600">
        <li v-for="link in links" :key="link.id">
          <a :href="`#${link.id}`" 
             :class="activeSection === link.id 
               ? 'bg-gray-900 text-white' 
               : 'hover:bg-gray-100 hover:text-gray-900'"
             class="px-4 py-2 rounded-full transition-all">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Hamburger mobile -->
      <button @click="isOpen = !isOpen" class="md:hidden relative w-8 h-8 flex items-center justify-center">
        <span class="absolute w-5 h-0.5 bg-gray-900 rounded-full transition-all duration-300"
              :class="isOpen ? 'rotate-45' : '-translate-y-1.5'"></span>
        <span class="absolute w-5 h-0.5 bg-gray-900 rounded-full transition-all duration-300"
              :class="isOpen ? 'opacity-0' : 'opacity-100'"></span>
        <span class="absolute w-5 h-0.5 bg-gray-900 rounded-full transition-all duration-300"
              :class="isOpen ? '-rotate-45' : 'translate-y-1.5'"></span>
      </button>
    </div>

    <!-- Dropdown mobile -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <ul v-if="isOpen" class="md:hidden flex flex-col gap-1 px-6 pb-6 text-sm font-medium text-gray-600 bg-white/95 backdrop-blur-lg">
        <li v-for="link in links" :key="link.id">
          <a :href="`#${link.id}`" 
             @click="isOpen = false"
             :class="activeSection === link.id ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'"
             class="block px-4 py-3 rounded-xl transition-all">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const activeSection = ref('home')

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

let observer

onMounted(() => {
  const sections = links.map(link => document.getElementById(link.id))

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { rootMargin: '-40% 0px -40% 0px' }
  )

  sections.forEach((section) => {
    if (section) observer.observe(section)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>