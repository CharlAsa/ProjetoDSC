import { Module } from '@nestjs/common';
import { TelefoneController } from './telefone.controller';
import { TelefoneService } from './telefone.service';
import { TelefoneRepository } from './telefone.repository';
import { TypeOrmModule } from'@nestjs/typeorm';

@Module({
  imports: [
	TypeOrmModule.forFeature([TelefoneRepository])
  ],
  controllers: [TelefoneController],
  providers: [TelefoneService]
})
export class TelefoneModule {}
