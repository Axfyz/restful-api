import { Injectable } from '@nestjs/common';
import { PrismaService } from '../src/common/prisma.service';
import * as bcrypt from 'bcrypt';
import { Address, Contact, User } from '@prisma/client';

@Injectable()
export class TestService {
  constructor(private prismaService: PrismaService) {}

  async deleteAll() {
    await this.deleteAddress();
    await this.deleteContact();
    await this.deleteUser();
  }

  async deleteUser() {
    await this.prismaService.user.deleteMany({
      where: {
        username: 'test',
      },
    });
  }

  async createUser() {
    await this.prismaService.user.create({
      data: {
        username: 'test',
        password: await bcrypt.hash('test', 10),
        name: 'test',
        token: 'test',
      },
    });
  }

  async getUser(): Promise<User> {
    return this.prismaService.user.findUniqueOrThrow({
      where: {
        username: 'test',
      },
    });
  }

  async deleteContact() {
    await this.prismaService.contact.deleteMany({
      where: {
        username: 'test',
      },
    });
  }

  async createContact() {
    await this.prismaService.contact.create({
      data: {
        firstname: 'test',
        lastname: 'test',
        email: 'test@example.com',
        phone: '08123',
        username: 'test',
      },
    });
  }

  async getContact(): Promise<Contact> {
    return this.prismaService.contact.findFirstOrThrow({
      where: {
        username: 'test',
      },
    });
  }

  async deleteAddress() {
    await this.prismaService.address.deleteMany({
      where: {
        contact: {
          username: 'test',
        },
      },
    });
  }

  async createAddress() {
    const contact = await this.getContact();
    await this.prismaService.address.create({
      data: {
        contact_id: contact.id,
        street: 'street test',
        city: 'city test',
        province: 'province test',
        country: 'country test',
        postal_code: '1111',
      },
    });
  }

  async getAddress(): Promise<Address> {
    return this.prismaService.address.findFirstOrThrow({
      where: {
        contact: {
          username: 'test',
        },
      },
    });
  }
}
