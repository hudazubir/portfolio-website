<template>
  <nav class="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 z-50 transition-all">
    <div class="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
      
      <a href="#home" class="flex items-center gap-2 group">
        <span class="w-8 h-8 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900 text-sm font-bold group-hover:bg-emerald-500 dark:group-hover:bg-emerald-500 dark:group-hover:text-white transition-colors">
          NH
        </span>
        <h1 class="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
          wiuzzmie
        </h1>
      </a>

      <!-- Menu desktop -->
      <div class="hidden md:flex items-center gap-3">
        <ul class="flex gap-1 text-sm font-medium text-gray-600 dark:text-gray-300">
          <li v-for="link in links" :key="link.id">
            <a :href="`#${link.id}`" 
               :class="activeSection === link.id 
                 ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' 
                 : 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'"
               class="px-4 py-2 rounded-full transition-all">
              {{ link.label }}
            </a>
          </li>
        </ul>

        <!-- Dark mode toggle -->
        <button @click="toggleDark"
                aria-label="Toggle dark mode"
                class="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>
          </svg>
        </button>

        <!-- Resume download -->
        <a href="/resume.pdf" 
           download
           class="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Resume
        </a>
      </div>

      <!-- Mobile controls -->
      <div class="md:hidden flex items-center gap-1">
        <button @click="toggleDark"
                aria-label="Toggle dark mode"
                class="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300">
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>
          </svg>
        </button>

        <!-- Hamburger mobile -->
        <button @click="isOpen = !isOpen" class="relative w-8 h-8 flex items-center justify-center">
          <span class="absolute w-5 h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300"
                :class="isOpen ? 'rotate-45' : '-translate-y-1.5'"></span>
          <span class="absolute w-5 h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300"
                :class="isOpen ? 'opacity-0' : 'opacity-100'"></span>
          <span class="absolute w-5 h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300"
                :class="isOpen ? '-rotate-45' : 'translate-y-1.5'"></span>
        </button>
      </div>
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
      <ul v-if="isOpen" class="md:hidden flex flex-col gap-1 px-6 pb-6 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg">
        <li v-for="link in links" :key="link.id">
          <a :href="`#${link.id}`" 
             @click="isOpen = false"
             :class="activeSection === link.id ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
             class="block px-4 py-3 rounded-xl transition-all">
            {{ link.label }}
          </a>
        </li>
        <li class="pt-1">
          <a href="/resume.pdf" 
             download
             @click="isOpen = false"
             class="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-medium bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
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
const isDark = ref(false)

function applyTheme(dark) {
  document.documentElement.classList.toggle('dark', dark)
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

function toggleDark() {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
}

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

let observer

onMounted(() => {
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = saved ? saved === 'dark' : prefersDark
  applyTheme(isDark.value)

  const sections = links.map(link => document.getElementById(link.id))

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { 
      rootMargin: '-50% 0px -50% 0px'  // Changed from -40% to -50%
      // OR try this kalau still tak jalan:
      // rootMargin: '0px'
    }
  )

  sections.forEach((section) => {
    if (section) observer.observe(section)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>