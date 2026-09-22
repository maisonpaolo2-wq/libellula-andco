'use client'
import { useState } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'

interface GalleryImage {
  src: string
  alt: string
  tall?: boolean
}

interface Props {
  images: GalleryImage[]
}

export default function Gallery({ images }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const close = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex(i => (i !== null ? (i - 1 + images.length) % images.length : 0))
  const next = () => setLightboxIndex(i => (i !== null ? (i + 1) % images.length : 0))

  return (
    <>
      <div className="portfolio-masonry">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="portfolio-item"
            onClick={() => setLightboxIndex(i)}
            role="button"
            tabIndex={0}
            aria-label={`Abrir imagen: ${img.alt}`}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setLightboxIndex(i) }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={img.tall ? 800 : 500}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="portfolio-item-overlay" aria-hidden="true" />
          </div>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}
