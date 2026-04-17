import type { TaskConfig } from 'payload'

const RETENTION_MONTHS = 24

export const purgeOldSubmissions: TaskConfig<'purgeOldSubmissions'> = {
  slug: 'purgeOldSubmissions',
  retries: 2,
  handler: async ({ req }) => {
    const cutoff = new Date()
    cutoff.setMonth(cutoff.getMonth() - RETENTION_MONTHS)

    const { docs } = await req.payload.find({
      collection: 'contact-submissions',
      where: { createdAt: { less_than: cutoff.toISOString() } },
      limit: 1000,
      pagination: false,
      req,
    })

    let deleted = 0
    for (const doc of docs) {
      await req.payload.delete({
        collection: 'contact-submissions',
        id: doc.id,
        req,
      })
      deleted += 1
    }

    return {
      output: {
        deleted,
        cutoff: cutoff.toISOString(),
      },
    }
  },
}
