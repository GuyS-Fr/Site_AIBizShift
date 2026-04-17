/*
 * ⚠️  SCRIPT ONE-SHOT — À EXÉCUTER UNE SEULE FOIS PAR BASE DE DONNÉES ⚠️
 *
 * Supprime la ligne `batch = -1` dans `payload_migrations` (marqueur ajouté
 * par Payload quand la DB a été alimentée en push mode avant l'adoption
 * des migrations). Sans ce nettoyage, chaque appel à `db.migrate()` prompte
 * une confirmation interactive et bloque l'auto-migrate au démarrage du
 * conteneur en production.
 *
 * Quand l'exécuter :
 *   - UNE fois, après le tout premier `pnpm payload migrate` sur une DB
 *     qui avait été utilisée en push mode auparavant.
 *
 * Quand NE PAS l'exécuter :
 *   - En production, jamais en routine.
 *   - Sur une DB qui n'a jamais connu le push mode (aucun effet, mais
 *     inutile).
 *   - En CI/CD : ce fichier n'est volontairement PAS référencé dans
 *     `package.json` pour éviter toute exécution automatique.
 *
 * Exécution manuelle :
 *   pnpm tsx scripts/clear-dev-migration-marker.ts
 */

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
