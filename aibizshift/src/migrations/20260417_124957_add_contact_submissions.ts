import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "contact_submissions" (
      "id" serial PRIMARY KEY NOT NULL,
      "name" varchar NOT NULL,
      "email" varchar NOT NULL,
      "phone" varchar,
      "company" varchar,
      "subject" varchar NOT NULL,
      "message" varchar NOT NULL,
      "consent_given" boolean DEFAULT false NOT NULL,
      "consent_given_at" timestamp(3) with time zone NOT NULL,
      "consent_ip_hash" varchar,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE INDEX IF NOT EXISTS "contact_submissions_email_idx"
      ON "contact_submissions" USING btree ("email");
    CREATE INDEX IF NOT EXISTS "contact_submissions_updated_at_idx"
      ON "contact_submissions" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "contact_submissions_created_at_idx"
      ON "contact_submissions" USING btree ("created_at");

    ALTER TABLE "payload_locked_documents_rels"
      ADD COLUMN IF NOT EXISTS "contact_submissions_id" integer;

    CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_contact_submissions_id_idx"
      ON "payload_locked_documents_rels" USING btree ("contact_submissions_id");
  `)

  await db.execute(sql`
    DO $$ BEGIN
      ALTER TABLE "payload_locked_documents_rels"
        ADD CONSTRAINT "payload_locked_documents_rels_contact_submissions_fk"
        FOREIGN KEY ("contact_submissions_id")
        REFERENCES "public"."contact_submissions"("id")
        ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN NULL;
    END $$;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels"
      DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_contact_submissions_fk";
    DROP INDEX IF EXISTS "payload_locked_documents_rels_contact_submissions_id_idx";
    ALTER TABLE "payload_locked_documents_rels"
      DROP COLUMN IF EXISTS "contact_submissions_id";
    DROP TABLE IF EXISTS "contact_submissions" CASCADE;
  `)
}
