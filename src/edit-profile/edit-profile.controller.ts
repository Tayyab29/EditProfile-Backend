import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EditProfileService } from './edit-profile.service';
import { CreateEditProfileDto } from './dto/create-edit-profile.dto';
import { UpdateEditProfileDto } from './dto/update-edit-profile.dto';

@Controller('edit-profile')
export class EditProfileController {
  constructor(private readonly editProfileService: EditProfileService) {}

  @Post()
  create(@Body() createEditProfileDto: CreateEditProfileDto) {
    return this.editProfileService.create(createEditProfileDto);
  }

  @Get()
  findAll() {
    return this.editProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.editProfileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEditProfileDto: UpdateEditProfileDto) {
    return this.editProfileService.update(+id, updateEditProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.editProfileService.remove(+id);
  }
}
