import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EditProfileService } from './edit-profile.service';
import { CreateEditProfileDto } from './dto/create-edit-profile.dto';
import { UpdateEditProfileDto } from './dto/update-edit-profile.dto';
import { DateSearchQuery } from './dto/date-search-query.dto';

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

  @Get('count')
  findDataLenghth() {
    return this.editProfileService.findDataLenghth();
  }

  @Post('/filter')
  findAllData(@Body() Date: DateSearchQuery) {
    return this.editProfileService.findAllData(Date);
  }

  // @Get('/count')
  // filterDate(@Query() filterdto: DateSearchQuery) {
  //   console.log(filterdto);
  //   if (Object.keys(filterdto).length) {
  //     return this.editProfileService.filterDate(filterdto);
  //   } else {
  //     return 'Nothing to show';
  //   }
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.editProfileService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEditProfileDto: UpdateEditProfileDto,
  ) {
    return this.editProfileService.update(+id, updateEditProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.editProfileService.remove(+id);
  }
}
