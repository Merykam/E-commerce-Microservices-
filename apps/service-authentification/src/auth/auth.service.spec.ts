// import { Test, TestingModule } from '@nestjs/testing';
// import { AuthService } from './auth.service';

// describe('AuthService', () => {
//   let service: AuthService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [AuthService],
//     }).compile();

//     service = module.get<AuthService>(AuthService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
// });
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthRepository } from './auth.repository';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../helpers/mail/mail.service';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;
  let Emailservice: EmailService;
  let Authrepository:AuthRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, JwtService, EmailService,AuthRepository],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
    Emailservice = module.get<EmailService>(EmailService);
    Authrepository = module.get<AuthRepository>(AuthRepository);
  });

  it('should create a new auth', async () => {
    const createAuthDto: CreateAuthDto = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'testpassword',
    };

    const salt = 'testsalt';
    const hash = 'testhash';
    const token = 'testtoken';

    jest.spyOn(bcrypt, 'genSalt').mockResolvedValue(salt as never);
    jest.spyOn(bcrypt, 'hash').mockResolvedValue(hash as never);
    jest.spyOn(jwtService, 'sign').mockResolvedValue(token as never);
    jest.spyOn(Emailservice, 'sendEmail').mockResolvedValue();

    const result = await service.create(createAuthDto);

    expect(bcrypt.genSalt).toHaveBeenCalled();
    expect(bcrypt.hash).toHaveBeenCalledWith(createAuthDto.password, salt);
    expect(jwtService.sign).toHaveBeenCalledWith({
      username: createAuthDto.username,
      email: createAuthDto.email,
    });
    expect(Emailservice.sendEmail).toHaveBeenCalledWith(token, createAuthDto.email);
    expect(result).toEqual(createAuthDto);
  });
});