import React from 'react'

const Details = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-10 sm:grid-cols-3 text-stone-900">
        <div>
          <h3 className="text-lg font-semibold">Comfort</h3>
          <p className="mt-2 text-stone-700/80">Two cozy rooms, fresh linens, and a simple country kitchen.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Nature</h3>
          <p className="mt-2 text-stone-700/80">Walk the fields, watch the sunset, and listen to the quiet.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Local</h3>
          <p className="mt-2 text-stone-700/80">Seasonal produce, homemade jams, and warm hospitality.</p>
        </div>
      </div>
    </section>
  )
}

export default Details
