<template>
  <section id="home" class="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
    
    <!-- Decorative floating shapes (background) -->
    <div class="absolute top-24 left-[10%] w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 rounded-2xl rotate-12 opacity-60 hidden md:block"></div>
    <div class="absolute bottom-32 right-[12%] w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full opacity-60 hidden md:block"></div>
    <div class="absolute top-40 right-[18%] w-10 h-10 bg-emerald-200 dark:bg-emerald-800/50 rounded-lg -rotate-12 opacity-50 hidden md:block"></div>

    <!-- Content -->
    <div class="relative z-10 animate-fade-in">
      <span class="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-4 py-1.5 rounded-full mb-8 border border-emerald-100 dark:border-emerald-900">
        <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
        Available for opportunities
      </span>

      <h1 class="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white tracking-tight mb-6 leading-[1.1]">
        Hi, I'm <br class="sm:hidden" />
        <span class="relative">
          Nurhudazubir
          <svg class="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
            <path d="M0,5 Q50,0 100,5 T200,5" stroke="#34d399" stroke-width="4" fill="none" stroke-linecap="round"/>
          </svg>
        </span>
      </h1>

      <p class="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
        Front-end developer in progress, learning to build clean and 
        functional web experiences — one component at a time.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="#projects" class="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-white transition-all hover:scale-105 shadow-lg shadow-gray-900/10 dark:shadow-black/30">
          View My Work
        </a>
        <a href="#contact" class="text-gray-700 dark:text-gray-300 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
          Get In Touch →
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <a href="#about" class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
      <svg class="w-5 h-5 text-gray-400 dark:text-gray-600 hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </a>
  </section>
</template>

<script setup>
</script>