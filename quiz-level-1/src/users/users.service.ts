import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IResponse } from 'src/interfaces/response.interface';
import { IUser } from 'src/interfaces/users.interface';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { getRandomInt } from 'src/utilities/date.utility';

@Injectable()
export class UsersService {
  private users: IUser[] = [];

  list(): IResponse {
    const response: IResponse = {
      statusCode: 200,
      message: ['daftar semua user'],
      data: this.users,
    };

    return response;
  }

  create(createUserDto: CreateUserDto): IResponse {
    const data: CreateUserDto[] = [createUserDto];

    const newCreatedUser: IUser[] = this.insert(this.users, data);

    const response: IResponse = {
      statusCode: 201,
      message: ['sukses menambahkan user'],
      data: newCreatedUser,
    };

    return response;
  }

  update(id: number, updateUserDto: UpdateUserDto): IResponse {
    const index: number = this.getIndex(id);
    const user: IUser = this.users[index];

    const { nama, email, umur, tanggal_lahir, role } = updateUserDto;

    this.validateEmail(this.users, email, id);

    user.nama = nama;
    user.email = email;
    user.umur = umur;
    user.tanggal_lahir = tanggal_lahir;
    user.role = role;

    const response: IResponse = {
      statusCode: 200,
      message: ['sukses mengupdate user'],
      data: [user],
    };

    return response;
  }

  delete(id: number): IResponse {
    const index: number = this.getIndex(id);
    const user: IUser = this.users[index];
    this.users.splice(index, 1);

    const response: IResponse = {
      statusCode: 200,
      message: ['sukses menghapus user'],
      data: [user],
    };

    return response;
  }

  createBulk(createUserDto: CreateUserDto[]): IResponse {
    // untuk proses validasi email, diperlukan semua data yang sebelumnya sudah ada di this.user
    // menggunakan shallow copy untuk menduplikat this.users ke newUsers
    // ! cara ini tidak efektif jika data yang ada sudah sangat banyak
    let newUsers: IUser[] = Array.from(this.users);

    this.insert(newUsers, createUserDto);

    // jika semua data (email) valid, replace semua element this.users
    this.users = newUsers;

    // https://stackoverflow.com/a/31005753
    // karena emailnya unique,
    // jadi bisa digunakan untuk memfilter antara data yang lama dan data yang baru masuk
    const newCreatedUser: IUser[] = newUsers.filter((nUser) => {
      return createUserDto.some((userDto) => {
        return userDto.email === nUser.email;
      });
    });

    const response: IResponse = {
      statusCode: 200,
      message: ['sukses menambahkan bulk user'],
      data: newCreatedUser,
    };

    return response;
  }

  private insert(newUsers: IUser[], createUserDto: CreateUserDto[]): IUser[] {
    for (let userDto of createUserDto) {
      const { nama, email, umur, tanggal_lahir, role } = userDto;

      this.validateEmail(newUsers, email);

      // tambah bilangan random untuk memastikan semua id-nya berbeda
      const random: number = getRandomInt(1000000, 9999999);
      const id: number = new Date().getTime() + random;

      const user: IUser = {
        id: id,
        nama: nama,
        email: email,
        umur: umur,
        tanggal_lahir: tanggal_lahir,
        role: role,
      };

      newUsers.push(user);
    }

    return newUsers;
  }

  detail(id: number): IResponse {
    const index: number = this.getIndex(id);
    const user: IUser = this.users[index];

    const response: IResponse = {
      statusCode: 200,
      message: ['detail user'],
      data: [user],
    };

    return response;
  }

  private validateEmail(data: IUser[], email: string, id?: number): void {
    // filter, untuk exclude data user yang didefinisikan di id.
    // misalnya jika akan mengupdate data user,
    // data email yang akan diupdate tidak boleh digunakan oleh "user lain"
    const isNotUnique = data
      .filter((el) => el.id !== id)
      .some((el) => el.email === email);

    if (isNotUnique) {
      const response: IResponse = {
        statusCode: 400,
        message: ['email harus unique', `sudah ada email ${email} di data`],
        error: 'Bad request',
      };

      throw new BadRequestException(response);
    }
  }

  private getIndex(id: number): number {
    const index: number = this.users.findIndex((user) => user.id === id);

    if (index == -1) {
      throw new NotFoundException([`User dengan id ${id} tidak ditemukan`]);
    }

    return index;
  }
}
