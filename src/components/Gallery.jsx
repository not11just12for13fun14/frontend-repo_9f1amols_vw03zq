import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472145246862-b24cf25c8b58?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529528744093-6f8abeee5118?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1489641024260-20e5cb3ee4aa?q=80&w=1600&auto=format&fit=crop',
]

const Gallery = () => {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-900">A glimpse of the farm</h2>
        <p className="mt-2 text-emerald-800/70">Warm textures, open skies, and the little details we love.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-emerald-100">
            <img
              src={src}
              alt="Farm scene"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
