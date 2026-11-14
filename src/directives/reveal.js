// v-reveal: fade/slide an element in the first time it scrolls into view.
// Usage: <div v-reveal> or <div v-reveal="150"> (delay in ms, handy for staggering)

let observer

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  )
  return observer
}

export default {
  mounted(el, binding) {
    if (!('IntersectionObserver' in window)) return
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    getObserver().observe(el)
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  },
}
