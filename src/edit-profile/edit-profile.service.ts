import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Res, HttpStatus } from '@nestjs/common';
// import { CreateEditProfileDto } from './dto/create-edit-profile.dto';
// import { UpdateEditProfileDto } from './dto/update-edit-profile.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class EditProfileService {
  constructor(private prisma: PrismaService) {}
  create(createEditProfileDto: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: createEditProfileDto,
    });
  }

  async findAll() {
    const user = await this.prisma.user.findMany({
      where: {
        isDeleted: false,
      },
    });

    return user;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  update(id: number, updateEditProfileDto: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateEditProfileDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        isDeleted: true,
      },
    });
  }
}
