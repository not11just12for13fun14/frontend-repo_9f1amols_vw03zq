import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-50 via-white to-white" />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-stone-200 bg-white/70 p-8 backdrop-blur">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-stone-900">Come say hello</h3>
              <p className="mt-3 text-stone-700/80">
                We’re a small family home on a working farm. Send us a message to check dates or ask anything.
              </p>
              <ul className="mt-6 space-y-2 text-stone-800">
                <li><strong>Phone:</strong> +00 123 456 789</li>
                <li><strong>Email:</strong> stay@gruntth.example</li>
                <li><strong>Location:</strong> Near the fields, under a big sky</li>
              </ul>
            </div>

            <form className="grid gap-4">
              <input type="text" placeholder="Your name" className="rounded-lg border border-stone-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              <input type="email" placeholder="Email" className="rounded-lg border border-stone-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              <textarea rows="4" placeholder="Message" className="rounded-lg border border-stone-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              <button type="button" className="rounded-lg bg-amber-700 px-6 py-3 text-white transition hover:bg-amber-800">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
