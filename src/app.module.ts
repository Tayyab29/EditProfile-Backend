import { Module } from '@nestjs/common';
import { EditProfileModule } from './edit-profile/edit-profile.module';

@Module({
  imports: [EditProfileModule],
})
export class AppModule {}
