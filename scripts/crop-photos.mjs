import sharp from 'sharp'
import { readdir, rename } from 'fs/promises'
import { join, extname, basename } from 'path'
import { tmpdir } from 'os'

const PHOTOS_DIR = join(process.cwd(), 'public', 'photos')
const CROP_TOP = 0.13
const CROP_BOTTOM = 0.11

async function crop(filePath) {
  const ext = extname(filePath).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return

  const img = sharp(filePath)
  const meta = await img.metadata()
  const { width, height } = meta

  const top = Math.round(height * CROP_TOP)
  const trimBottom = Math.round(height * CROP_BOTTOM)
  const newHeight = height - top - trimBottom

  const tmpPath = join(tmpdir(), basename(filePath))
  await sharp(filePath)
    .extract({ left: 0, top, width, height: newHeight })
    .toFile(tmpPath)

  await rename(tmpPath, filePath)
  console.log(`Cropped: ${basename(filePath)} → ${width}x${newHeight}`)
}

const files = await readdir(PHOTOS_DIR)
for (const file of files) {
  await crop(join(PHOTOS_DIR, file))
}
console.log('Done.')
