<template>
  <section id="home" class="relative overflow-hidden px-6 pt-28 pb-16 lg:min-h-[92vh] flex items-center bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">

    <!-- Soft background glow + dotted grid -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute -top-24 right-[-10%] w-[32rem] h-[32rem] rounded-full bg-emerald-200/40 dark:bg-emerald-500/10 blur-3xl"></div>
      <div class="absolute bottom-[-20%] left-[-10%] w-[28rem] h-[28rem] rounded-full bg-cyan-100/50 dark:bg-cyan-500/5 blur-3xl"></div>
      <div class="absolute inset-0 opacity-[0.35] dark:opacity-[0.15] [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"></div>
    </div>

    <div class="relative z-10 max-w-6xl w-full mx-auto grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-14 items-center">
      <!-- Left: intro + about -->
      <div class="animate-fade-in text-center lg:text-left">
        <span class="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-4 py-1.5 rounded-full mb-6 border border-emerald-100 dark:border-emerald-900">
          <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          Available for opportunities
        </span>

        <h1 class="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-5 leading-[1.1]">
          Hi, I'm <br />
          <span class="relative inline-block">
            Nurhudazubir
            <svg class="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0,5 Q50,0 100,5 T200,5" stroke="#34d399" stroke-width="4" fill="none" stroke-linecap="round"/>
            </svg>
          </span>
        </h1>

        <p class="text-2xl sm:text-3xl font-semibold mb-5 h-10" aria-live="polite">
          <span class="text-emerald-500">{{ typed }}</span><span class="typing-cursor text-emerald-500 font-light" aria-hidden="true">|</span>
        </p>

        <!-- About -->
        <p class="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
          I'm a software developer who's chosen to focus on front-end — building clean,
          responsive interfaces that actually feel good to use. Right now I'm diving deeper
          into the front-end world, especially exploring how AI can make the development
          process faster and smarter.
        </p>

        <!-- Skills as chips (mobile/tablet; desktop shows them in the code card) -->
        <div class="lg:hidden flex flex-wrap justify-center gap-2 mb-8 max-w-md mx-auto">
          <span v-for="skill in allSkills" :key="skill"
                class="px-3 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            {{ skill }}
          </span>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center lg:mt-2">
          <a href="#projects" class="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-white transition-all hover:scale-105 shadow-lg shadow-gray-900/10 dark:shadow-black/30">
            View My Work
          </a>
          <a href="#contact" class="text-gray-700 dark:text-gray-300 px-8 py-3.5 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
            Get In Touch →
          </a>
        </div>
      </div>

      <!-- Right: code card with skills (desktop only) -->
      <div class="hidden lg:block relative animate-fade-in" style="animation-delay: 0.2s; animation-fill-mode: both;">
        <div class="absolute -inset-4 bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20 rounded-3xl blur-2xl" aria-hidden="true"></div>
        <div class="relative rounded-2xl bg-slate-900 border border-slate-700/60 shadow-2xl shadow-gray-900/20 overflow-hidden rotate-1 hover:rotate-0 transition-transform duration-500">
          <div class="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/60">
            <span class="w-3 h-3 rounded-full bg-red-400/80"></span>
            <span class="w-3 h-3 rounded-full bg-amber-400/80"></span>
            <span class="w-3 h-3 rounded-full bg-emerald-400/80"></span>
            <span class="ml-3 text-xs text-slate-400 font-mono">about-me.js</span>
          </div>

          <div class="p-6 text-[13px] leading-7 font-mono text-slate-300">
            <div><span class="text-purple-400">const</span> <span class="text-sky-300">developer</span> = {</div>
            <div class="pl-4">
              <div><span class="text-slate-400">name</span>: <span class="text-emerald-300">'Nurhuda Zubir'</span>,</div>
              <div><span class="text-slate-400">role</span>: <span class="text-emerald-300">'Front-end Developer'</span>,</div>
              <div><span class="text-slate-400">skills</span>: {</div>
              <div class="pl-4">
                <div v-for="group in skillGroups" :key="group.key" class="pl-4 -indent-4">
                  <span class="text-slate-400">{{ group.key }}</span>: [<template v-for="(skill, i) in group.items" :key="skill"><span class="whitespace-nowrap"><span class="text-emerald-300">'{{ skill }}'</span>{{ i < group.items.length - 1 ? ',' : '' }}</span>{{ i < group.items.length - 1 ? ' ' : '' }}</template>],
                </div>
              </div>
              <div>},</div>
              <div><span class="text-slate-400">exploring</span>: <span class="text-emerald-300">'AI-assisted development'</span>,</div>
              <div><span class="text-slate-400">openToWork</span>: <span class="text-amber-300">true</span>,</div>
            </div>
            <div>}</div>
          </div>
        </div>

        <!-- Floating badge -->
        <div class="absolute -top-8 -right-4 flex items-center gap-3 bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-xl border border-gray-100 dark:border-gray-700">
          <span class="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-lg">⚡</span>
          <div class="text-left">
            <p class="text-sm font-semibold text-gray-900 dark:text-white leading-tight">Building with Vue 3</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">one component at a time</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Your skills: shown in the code card (desktop) and as chips (mobile). Edit here only.
const skillGroups = [
  { key: 'frontend', items: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { key: 'backend', items: ['Node.js', 'PHP', 'MySQL', 'REST API'] },
  { key: 'tools', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vite'] },
]
const allSkills = skillGroups.flatMap((g) => g.items)

// Roles shown in the typing line. Edit freely.
const roles = ['Front-end Developer', 'Vue.js Developer', 'UI Enthusiast', 'Lifelong Learner']

const typed = ref(roles[0])
let timer
let roleIndex = 0
let charIndex = roles[0].length
let deleting = true

function tick() {
  const current = roles[roleIndex]

  if (deleting) {
    charIndex--
    typed.value = current.slice(0, charIndex)
    if (charIndex === 0) {
      deleting = false
      roleIndex = (roleIndex + 1) % roles.length
      timer = setTimeout(tick, 400)
      return
    }
    timer = setTimeout(tick, 40)
  } else {
    const next = roles[roleIndex]
    charIndex++
    typed.value = next.slice(0, charIndex)
    if (charIndex === next.length) {
      deleting = true
      timer = setTimeout(tick, 2000) // pause on the full word
      return
    }
    timer = setTimeout(tick, 80)
  }
}

onMounted(() => {
  // Respect users who prefer less motion: keep the first role static
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setTimeout(tick, 2000)
})

onUnmounted(() => clearTimeout(timer))
</script>
