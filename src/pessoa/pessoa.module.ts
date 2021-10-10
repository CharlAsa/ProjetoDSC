import { Module } from '@nestjs/common';
import { PessoaController } from './pessoa.controller';
import { PessoaService } from './pessoa.service';
import { PessoaRepository } from './pessoa.repository';
import { TypeOrmModule } from'@nestjs/typeorm';

@Module({
  imports: [
	TypeOrmModule.forFeature([PessoaRepository])
  ],
  controllers: [PessoaController],
  providers: [PessoaService]
})
export class PessoaModule {}
