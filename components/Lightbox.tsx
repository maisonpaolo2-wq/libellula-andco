'use client'
import { useEffect } from 'react'
import Image from 'next/image'

interface Props {
  images: { src: string; alt: string }[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="lightbox-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label="Imagen ampliada"
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Cerrar">&#x2715;</button>
      <button className="lightbox-prev" onClick={onPrev} aria-label="Anterior">&#x2190;</button>
      <Image
        src={images[index].src}
        alt={images[index].alt}
        width={1200}
        height={900}
        className="lightbox-img"
        style={{ objectFit: 'contain' }}
      />
      <button className="lightbox-next" onClick={onNext} aria-label="Siguiente">&#x2192;</button>
      <span className="lightbox-counter">{index + 1} / {images.length}</span>
    </div>
  )
}
