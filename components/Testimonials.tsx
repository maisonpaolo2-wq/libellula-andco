'use client'
import { useState } from 'react'
import { testimonials } from '@/content/data'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <div className="testimonials-carousel">
      <blockquote className="testimonial-quote">
        {t.quote}
      </blockquote>
      <p className="testimonial-author">{t.author}</p>
      <p className="testimonial-event">{t.event}</p>
      <div className="testimonials-dots" role="tablist" aria-label="Testimonios">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={active === i ? 'active' : ''}
            onClick={() => setActive(i)}
            role="tab"
            aria-selected={active === i}
            aria-label={`Testimonio ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
