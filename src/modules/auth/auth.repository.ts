import { TABLES } from 'common/constants/tables.enum';
import { UserDto } from './auth.dto';
import { Repository } from 'typeorm';
import { Users } from './auth.entity';
import { ConflictException, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';



@Injectable()
export class AuthRepository {
  constructor(
    @InjectRepository(Users)
    private readonly authRepository: Repository<Users>
  ) {}

  async createUser(payload:UserDto): Promise <Users>{
    console.log(payload)
    const existingUser = await this.authRepository.findOne({where : {email:payload.email}})
    if (existingUser){
      throw new ConflictException('Username already exists')
    }
    const newUser = this.authRepository.create(payload);
    return this.authRepository.save(newUser);
  }

  async findByEmail(email:string): Promise<Users| undefined>{
      return this.authRepository.findOne({where:{email}});
  }


}