<template>
  <section id="projects" class="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
    <!-- Subtle animated background blobs -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-3xl animate-pulse" style="animation-duration: 8s;"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-100/30 to-transparent rounded-full blur-3xl animate-pulse" style="animation-duration: 10s; animation-delay: 2s;"></div>
    </div>

    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div v-reveal class="text-center mb-12">
        <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 border border-emerald-200 dark:border-emerald-800 rounded-full">Featured Work</span>
        <h2 class="text-4xl sm:text-5xl font-bold mt-4 mb-4 text-gray-900 dark:text-white">Projects & Experiments</h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">A collection of web applications built with modern technologies</p>
        <p class="sm:hidden mt-3 text-xs text-gray-400 dark:text-gray-500">Swipe to see more →</p>
      </div>

      <!-- Projects: horizontal swipe on mobile, grid from sm up -->
      <div class="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 sm:pb-0 [scrollbar-width:none]">
        <article
          v-for="(project, i) in projects"
          :key="project.title"
          v-reveal="i * 120"
          class="group relative h-full shrink-0 w-[85%] sm:w-auto snap-center"
          :class="i === projects.length - 1 && projects.length % 2 === 1 ? 'sm:col-span-2 lg:col-span-1' : ''"
        >
          <!-- Glow on hover -->
          <div class="absolute -inset-0.5 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur -z-10" :class="project.glow"></div>

          <div class="h-full bg-slate-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 group-hover:border-slate-600 transition-all duration-500 hover:shadow-2xl flex flex-col">
            <!-- Screenshot -->
            <a :href="project.demo" target="_blank" rel="noopener" class="block relative aspect-[16/10] overflow-hidden bg-slate-800" :aria-label="`Open ${project.title} live demo`">
              <img
                :src="project.image"
                :alt="`Screenshot of ${project.title}`"
                loading="lazy"
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            </a>

            <div class="p-7 pt-5 flex flex-col flex-grow">
              <h3 class="font-bold text-xl text-white mb-3">{{ project.title }}</h3>
              <p class="text-sm text-gray-400 mb-6 leading-relaxed flex-grow">{{ project.description }}</p>

              <div class="flex gap-2 flex-wrap mb-6">
                <span v-for="tag in project.tags" :key="tag" class="text-xs font-semibold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">
                  {{ tag }}
                </span>
              </div>

              <div class="flex items-center gap-5">
                <a :href="project.demo" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group/link transition-colors">
                  Live Demo
                  <svg class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <a v-if="project.repo" :href="project.repo" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-white transition-colors">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>
                  Code
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
// Add a new project by adding one object here.
// Screenshots live in public/projects/. Fill in `repo` with the GitHub URL to show a "Code" link.
const projects = [
  {
    title: 'Quote Generator',
    description: 'A quote generator with category filters, favorites, and quote submission.',
    image: '/projects/quote-generator.jpg',
    demo: 'https://quote-generator-rouge-xi.vercel.app',
    repo: '',
    tags: ['Vue.js', 'Tailwind'],
    glow: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Music Player Interface',
    description: 'A responsive music player interface with category filters, liked songs, and mobile-first design.',
    image: '/projects/music-player.jpg',
    demo: 'https://music-player-sable-nine.vercel.app/',
    repo: '',
    tags: ['Vue.js', 'Tailwind'],
    glow: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Analytics Dashboard',
    description: 'A responsive analytics dashboard built to visualize key business metrics with interactive charts.',
    image: '/projects/analytics-dashboard.jpg',
    demo: 'https://analytics-dashboard-delta-ebon.vercel.app/',
    repo: '',
    tags: ['Vue.js', 'Tailwind'],
    glow: 'from-orange-600 to-amber-600',
  },
]
</script>
