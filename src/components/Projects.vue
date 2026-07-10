<template>
  <section id="projects" class="py-24 px-6 bg-gray-50">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-3">My Projects</h2>
      <p class="text-gray-500 mb-14">A few things I've been working on</p>



      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="group bg-white rounded-2xl p-6 text-left border border-gray-100 shadow-md hover:border-gray-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl mb-5 group-hover:scale-105 transition-transform">
            💬
          </div>
          <h3 class="font-semibold text-gray-900 mb-2 text-lg">Quote Generator</h3>
          <p class="text-sm text-gray-500 mb-4 leading-relaxed">A quote generator with category filters, favorites, and quote submission.</p>
          <div class="flex gap-2 flex-wrap mb-5">
            <span class="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">Vue.js</span>
            <span class="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">Tailwind</span>
          </div>
          <a href="https://quote-generator-rouge-xi.vercel.app" target="_blank" class="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-emerald-600 transition-colors">
            View Project
            <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>

        <div class="group bg-white rounded-2xl p-6 text-left border border-gray-100 shadow-md hover:border-gray-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-2xl mb-5 group-hover:scale-105 transition-transform">
            🎵
          </div>
          <h3 class="font-semibold text-gray-900 mb-2 text-lg">Music Player UI</h3>
          <p class="text-sm text-gray-500 mb-4 leading-relaxed">A responsive music player interface with category filters, liked songs, and mobile-first design.</p>
          <div class="flex gap-2 flex-wrap mb-5">
            <span class="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">Vue.js</span>
            <span class="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">Tailwind</span>
          </div>
          <a href="https://music-player-sable-nine.vercel.app/" target="_blank" class="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-emerald-600 transition-colors">
            View Project
            <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>

        <div class="group bg-white rounded-2xl p-6 text-left border border-gray-100 shadow-md hover:border-gray-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl mb-5 group-hover:scale-105 transition-transform">
            🎨
          </div>
          <h3 class="font-semibold text-gray-900 mb-2 text-lg">Project Three</h3>
          <p class="text-sm text-gray-500 mb-4 leading-relaxed">Short description about this project goes here.</p>
          <div class="flex gap-2 flex-wrap mb-5">
            <span class="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">Vue.js</span>
            <span class="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">Tailwind</span>
          </div>
          <a href="#" class="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-emerald-600 transition-colors">
            View Project
            <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
      </div>





      <!-- <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-2xl p-6 text-left border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
          <div class="text-3xl mb-4">💬</div>
          <h3 class="font-semibold text-gray-900 mb-2">Quote Generator</h3>
          <p class="text-sm text-gray-500 mb-4">A quote generator with category filters, favorites, and quote submission — built with Vue.js and Tailwind CSS.</p>
          <a href="https://quote-generator-rouge-xi.vercel.app" target="_blank" class="text-sm font-medium text-gray-900 hover:text-emerald-600">View Project →</a>
        </div>

        <div class="bg-white rounded-2xl p-6 text-left border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
          <div class="text-3xl mb-4">🎵</div>
          <h3 class="font-semibold text-gray-900 mb-2">Music Player UI</h3>
          <p class="text-sm text-gray-500 mb-4">A responsive music player interface with category filters, liked songs, and mobile-first design — built with Vue.js and Tailwind CSS.</p>
          <a href="https://music-player-sable-nine.vercel.app/" target="_blank" class="text-sm font-medium text-gray-900 hover:text-emerald-600">View Project →</a>
        </div>

        <div class="bg-white rounded-2xl p-6 text-left border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
          <div class="text-3xl mb-4">🎨</div>
          <h3 class="font-semibold text-gray-900 mb-2">Project Three</h3>
          <p class="text-sm text-gray-500 mb-4">Short description about this project goes here.</p>
          <a href="#" class="text-sm font-medium text-gray-900 hover:text-emerald-600">View Project →</a>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
</script>