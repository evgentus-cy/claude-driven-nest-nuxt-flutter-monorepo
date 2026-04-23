# {{APP_NAME}} — Spec-first Monorepo Boilerplate

NestJS 11 + Nuxt 4 SPA + Flutter 3.41 + design-token pipeline + full CI.

## Quick start

```sh
git clone <this-repo> my-project && cd my-project
bash scripts/setup.sh        # enter your project name
pnpm install
# Add your design files → extract tokens → build UI kit:
# See specs/design/README.md for the Claude design workflow
pnpm design:build
docker compose -f docker/compose.yml up -d
curl localhost:3000/api/v1/health  # → {"status":"ok"}
```

## Architecture

| Layer | Stack |
|-------|-------|
| API | NestJS 11, CQRS, Better Auth, Prisma 7, Centrifugo |
| Web | Nuxt 4 (SPA), Nuxt UI v4, Tailwind 4, @app/ui |
| Mobile | Flutter 3.41, flutter_bloc, get_it, Dio |
| Design | W3C Design Tokens → CSS custom props + TS + Dart |
| Contracts | OpenAPI 3.1 + AsyncAPI 3.0 — single source of truth |
| CI | GitHub Actions: lint, typecheck, test, audit, codegen-drift |

## Design workflow

See [specs/design/README.md](specs/design/README.md).

## Adding a new feature

See [.claude/docs/migration.md](.claude/docs/migration.md).

## Development rules

See [.claude/CLAUDE.md](.claude/CLAUDE.md) — loaded automatically in Claude Code sessions.
