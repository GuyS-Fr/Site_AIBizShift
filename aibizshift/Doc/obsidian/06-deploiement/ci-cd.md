---
title: "CI/CD"
tags: [ci-cd, deploiement]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# CI/CD

## GitHub Actions

Un seul workflow actif : `.github/workflows/security-audit.yml`.

### Déclencheurs

| Événement | Détail |
|-----------|--------|
| `pull_request` | Si `aibizshift/package.json`, `aibizshift/pnpm-lock.yaml` ou le workflow lui-même change |
| `push` sur `main` | Si les mêmes fichiers changent |
| `schedule` | Cron `0 8 * * 1` — lundi 08:00 UTC, couvre les CVE publiées le week-end |
| `workflow_dispatch` | Déclenchement manuel |

### Job

```yaml
jobs:
  audit:
    name: pnpm audit (high + critical)
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: aibizshift
    steps:
      - actions/checkout@v4
      - pnpm/action-setup@v4 (version 10)
      - actions/setup-node@v4 (node 22, cache pnpm, aibizshift/pnpm-lock.yaml)
      - pnpm install --frozen-lockfile
      - pnpm audit --audit-level high
```

`pnpm audit` retourne code `0` si aucune vulnérabilité high/critical, `1` sinon → la CI échoue.

### Secrets

Aucun secret requis pour ce workflow. Pas de déploiement automatisé (à date : TODO connecter un webhook Coolify sur push `main`).

## Déploiement

- **Plateforme** : Coolify. Voir [[hebergement]].
- **Déclencheur actuel** : push manuel (rebuild Docker dans l'UI Coolify).
- **TODO** : webhook GitHub → Coolify pour déploiement automatique sur push `main`.

## Tests

Pas encore lancés en CI. Localement :

```bash
pnpm test          # int + e2e
pnpm test:int      # Vitest
pnpm test:e2e      # Playwright
```

`playwright.config.ts` active les retries uniquement sur CI (`process.env.CI`).

## Liens connexes

- [[build]]
- [[hebergement]]
- [[variables-environnement]]
