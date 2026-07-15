<template>
    <section id="skills" class="py-28 px-6 bg-gray-50">
      <div class="max-w-4xl mx-auto text-center">
        <span class="text-sm font-medium text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full">
          What I work with
        </span>
        <h2 class="text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-4">Skills & Tools</h2>
        <p class="text-gray-500 mb-16 dark:text-gray-400">
          Technologies and tools I use to design, build, and ship things.
        </p>
  
        <div class="grid sm:grid-cols-3 gap-8 text-left">
          <div v-for="group in skillGroups" :key="group.category">
            <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-gray-900 dark:bg-white dark:text-gray-900 text-white flex items-center justify-center text-xs">
                {{ group.icon }}
              </span>
              {{ group.category }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in group.items" :key="skill"
                    class="px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-700 dark:hover:text-emerald-400 transition-all">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Tukar list ni ikut skill sebenar kau
  const skillGroups = [
    {
      category: 'Frontend',
      icon: '🎨',
      items: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    },
    {
      category: 'Backend',
      icon: '⚙️',
      items: ['Node.js', 'PHP', 'MySQL', 'REST API'],
    },
    {
      category: 'Tools',
      icon: '🛠️',
      items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vite'],
    },
  ]
  </script>