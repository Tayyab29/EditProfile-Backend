import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { EditProfileModule } from './edit-profile/edit-profile.module';

@Module({
  imports: [EditProfileModule],
})
export class AppModule {}
