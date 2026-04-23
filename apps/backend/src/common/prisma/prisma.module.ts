import { Global, Module } from '@nestjs/common';

import { PrismaMigrator } from './prisma-migrator';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService, PrismaMigrator],
  exports: [PrismaService],
})
export class PrismaModule {}
