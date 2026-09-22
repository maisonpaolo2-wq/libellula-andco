import sharp from 'sharp'
import { join } from 'path'

const PHOTOS_DIR = join(process.cwd(), 'public', 'photos')

const photos = [
  { name: 'hero-a.jpg', w: 900, h: 1200, color: '#4A8FA8' },
  { name: 'hero-b.jpg', w: 700, h: 1000, color: '#2B5F7E' },
  { name: 'portfolio-1.jpg', w: 800, h: 1100, color: '#5A9FB8' },
  { name: 'portfolio-2.jpg', w: 800, h: 600, color: '#3A7F98' },
  { name: 'portfolio-3.jpg', w: 800, h: 650, color: '#6AAFB8' },
  { name: 'portfolio-4.jpg', w: 800, h: 1050, color: '#2B6F8E' },
  { name: 'portfolio-5.jpg', w: 800, h: 550, color: '#4A9FA8' },
  { name: 'portfolio-6.jpg', w: 800, h: 700, color: '#3A8FA0' },
  { name: 'portfolio-7.jpg', w: 800, h: 1000, color: '#5A8F98' },
  { name: 'portfolio-8.jpg', w: 800, h: 580, color: '#2B8F9E' },
  { name: 'about.jpg', w: 800, h: 1100, color: '#C4964E' },
  { name: 'hero.jpg', w: 1600, h: 900, color: '#1A2B35' },
]

for (const p of photos) {
  const svg = `<svg width="${p.w}" height="${p.h}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${p.color}"/>
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,255,255,0.3)" font-family="sans-serif" font-size="24">${p.name}</text>
  </svg>`
  await sharp(Buffer.from(svg)).jpeg({ quality: 80 }).toFile(join(PHOTOS_DIR, p.name))
  console.log(`Created ${p.name}`)
}

// OG image
const ogSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#1A2B35"/>
  <text x="600" y="280" text-anchor="middle" fill="white" font-family="Georgia,serif" font-size="64" font-style="italic">Libellula and Co</text>
  <text x="600" y="360" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-family="sans-serif" font-size="22">Alquiler, decoración y wedding styling · Tenerife</text>
</svg>`
await sharp(Buffer.from(ogSvg)).jpeg({ quality: 85 }).toFile(join(process.cwd(), 'public', 'og-image.jpg'))
console.log('Created og-image.jpg')
console.log('Done.')
