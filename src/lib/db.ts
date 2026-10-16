import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// The client can fail to initialize when the runtime has no DATABASE_URL
// (for example a fresh Vercel deployment before env vars are set).
// Returning null keeps the app renderable; API routes fall back to logging.
function createClient(): PrismaClient | null {
  try {
    return new PrismaClient({
      log: ['query'],
    })
  } catch {
    return null
  }
}

export const db = globalForPrisma.prisma ?? createClient()

if (process.env.NODE_ENV !== 'production' && db) globalForPrisma.prisma = db
