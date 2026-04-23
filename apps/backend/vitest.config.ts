import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths({ ignoreConfigErrors: true })],
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.spec.ts', 'test/**/*.spec.ts'],
    exclude: ['**/*.e2e-spec.ts', 'node_modules', 'dist'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: [
        'src/modules/*/application/**/*.ts',
        'src/modules/*/domain/**/*.ts',
        'src/common/**/*.ts',
      ],
      exclude: [
        'src/main.ts',
        'src/**/*.module.ts',
        'src/**/*.dto.ts',
        'src/**/*.command.ts',
        'src/**/*.query.ts',
        'src/**/*.event.ts',
        'src/**/*.errors.ts',
        'src/**/*.ports.ts',
        'src/**/*.types.ts',
        'src/common/dataloader/dataloader.types.ts',
        'src/common/config/**',
        'src/common/openapi/**',
      ],
      thresholds: {
        lines: 59,
        functions: 65,
        statements: 61,
        branches: 53,
      },
    },
  },
});
