import dotenv from 'dotenv'
import { createRequire } from 'module'

dotenv.config()

const require = createRequire(import.meta.url)
const pg = require('pg')

async function run() {
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
  try {
    const before = await pool.query(
      `SELECT id, name, batch FROM payload_migrations WHERE batch = -1`,
    )
    console.log(`Found ${before.rows.length} dev-push marker row(s):`)
    before.rows.forEach((r: any) => console.log('  -', r))

    if (before.rows.length === 0) {
      console.log('Nothing to clean up.')
      return
    }

    const result = await pool.query(`DELETE FROM payload_migrations WHERE batch = -1`)
    console.log(`Deleted ${result.rowCount} row(s).`)
  } finally {
    await pool.end()
  }
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
