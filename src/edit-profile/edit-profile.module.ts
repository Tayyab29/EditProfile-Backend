import { Module } from '@nestjs/common';
import { EditProfileService } from './edit-profile.service';
import { EditProfileController } from './edit-profile.controller';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [EditProfileController],
  providers: [EditProfileService, PrismaService],
})
export class EditProfileModule {}
