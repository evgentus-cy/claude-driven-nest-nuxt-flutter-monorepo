import { execFile } from 'node:child_process';
import path from 'node:path';
import { promisify } from 'node:util';

import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';

import { AppConfig } from '../config/app-config';

const execFileAsync = promisify(execFile);

/**
 * Runs `prisma migrate deploy` once at boot in non-test environments.
 * Errors are swallowed with a warning so the app can still start when the
 * database is offline — the health check will report db=down in that case.
 */
@Injectable()
export class PrismaMigrator implements OnApplicationBootstrap {
  private readonly logger = new Logger(PrismaMigrator.name);

  constructor(private readonly config: AppConfig) {}

  async onApplicationBootstrap(): Promise<void> {
    if (this.config.runtime.nodeEnv === 'test') return;

    try {
      const schemaPath = path.resolve(process.cwd(), 'prisma', 'schema.prisma');
      await execFileAsync('npx', ['prisma', 'migrate', 'deploy', '--schema', schemaPath], {
        env: { ...process.env },
        timeout: 60_000,
      });
      this.logger.log('Prisma migrations applied successfully');
    } catch (error) {
      this.logger.warn(`Prisma migrate deploy failed (DB may be offline): ${String(error)}`);
    }
  }
}
