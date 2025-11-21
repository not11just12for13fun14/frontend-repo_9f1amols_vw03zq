import React from 'react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-white to-white" />
      <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-emerald-100 blur-3xl opacity-50" />
      <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-lime-100 blur-3xl opacity-50" />

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 text-center">
        <p className="inline-block rounded-full border border-emerald-200 bg-white/70 px-4 py-1 text-xs font-medium text-emerald-700 backdrop-blur">
          Family-run • Rural retreat • Farm fresh
        </p>
        <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-emerald-900">
          A quiet agro stay surrounded by fields and sunshine
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-emerald-800/70">
          Slow mornings, starry nights, and simple comforts. Welcome to our family house on the farm — a minimal escape to nature.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#gallery" className="rounded-full bg-emerald-600 px-5 py-2.5 text-white shadow-sm transition hover:bg-emerald-700">
            View photos
          </a>
          <a href="#contact" className="rounded-full px-5 py-2.5 text-emerald-800 hover:text-emerald-900">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
