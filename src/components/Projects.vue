<template>
  <section id="projects" class="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
    <!-- Animated background gradient - subtle je -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-3xl animate-pulse" style="animation-duration: 8s;"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-100/30 to-transparent rounded-full blur-3xl animate-pulse" style="animation-duration: 10s; animation-delay: 2s;"></div>
    </div>

    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-20">
        <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 border border-emerald-200 dark:border-emerald-800 rounded-full">Featured Work</span>
        <h2 class="text-5xl md:text-6xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">Projects & Experiments</h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">A collection of web applications built with modern technologies</p>
      </div>

      <!-- Projects Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project 1: Quote Generator -->
        <div class="group relative h-full" style="animation: slideUp 0.8s ease-out forwards;">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" style="z-index: -1;"></div>
          <div class="h-full bg-slate-900/90 backdrop-blur-xl rounded-2xl p-7 border border-slate-700/50 group-hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col">
            <div class="flex items-start justify-between mb-6">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 shadow-lg">💬</div>
              <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              </div>
            </div>
            <h3 class="font-bold text-xl text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">Quote Generator</h3>
            <p class="text-sm text-gray-400 mb-6 leading-relaxed flex-grow">A quote generator with category filters, favorites, and quote submission.</p>
            <div class="flex gap-2 flex-wrap mb-6">
              <span class="text-xs font-semibold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">Vue.js</span>
              <span class="text-xs font-semibold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-lg border border-purple-500/20">Tailwind</span>
            </div>
            <a href="https://quote-generator-rouge-xi.vercel.app" target="_blank" class="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group/link transition-colors">
              Explore Project
              <svg class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>

        <!-- Project 2: Music Player -->
        <div class="group relative h-full" style="animation: slideUp 0.8s ease-out forwards; animation-delay: 0.15s;">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" style="z-index: -1;"></div>
          <div class="h-full bg-slate-900/90 backdrop-blur-xl rounded-2xl p-7 border border-slate-700/50 group-hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col">
            <div class="flex items-start justify-between mb-6">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 shadow-lg">🎵</div>
              <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              </div>
            </div>
            <h3 class="font-bold text-xl text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">Music Player Interface</h3>
            <p class="text-sm text-gray-400 mb-6 leading-relaxed flex-grow">A responsive music player interface with category filters, liked songs, and mobile-first design.</p>
            <div class="flex gap-2 flex-wrap mb-6">
              <span class="text-xs font-semibold text-blue-300 bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/20">Vue.js</span>
              <span class="text-xs font-semibold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">Tailwind</span>
            </div>
            <a href="https://music-player-sable-nine.vercel.app/" target="_blank" class="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group/link transition-colors">
              Explore Project
              <svg class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>

        <!-- Project 3: Analytics Dashboard -->
        <div class="group relative h-full sm:col-span-2 lg:col-span-1" style="animation: slideUp 0.8s ease-out forwards; animation-delay: 0.3s;">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" style="z-index: -1;"></div>
          <div class="h-full bg-slate-900/90 backdrop-blur-xl rounded-2xl p-7 border border-slate-700/50 group-hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 flex flex-col">
            <div class="flex items-start justify-between mb-6">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 shadow-lg">🎨</div>
              <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              </div>
            </div>
            <h3 class="font-bold text-xl text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-500">Analytics Dashboard</h3>
            <p class="text-sm text-gray-400 mb-6 leading-relaxed flex-grow">A responsive analytics dashboard built to visualize key business metrics with interactive charts</p>
            <div class="flex gap-2 flex-wrap mb-6">
              <span class="text-xs font-semibold text-amber-300 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">Vue.js</span>
              <span class="text-xs font-semibold text-orange-300 bg-orange-500/10 px-3 py-1 rounded-lg border border-orange-500/20">Tailwind</span>
            </div>
            <a href="https://analytics-dashboard-delta-ebon.vercel.app/" target="_blank" class="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group/link transition-colors">
              Explore Project
              <svg class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
</style>