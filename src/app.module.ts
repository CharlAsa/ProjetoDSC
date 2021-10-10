import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaModule } from './pessoa/pessoa.module';
import { TelefoneModule } from './telefone/telefone.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PessoaModule, TelefoneModule, TypeOrmModule.forRoot({
		type: 'mssql',
       		host: 'localhost',
		port: 1433,
		username: 'dsc',
		password: '123456',
		database: 'Agenda',
		autoLoadEntities: true,
		synchronize: true,
		options: {
        		cryptoCredentialsDetails: {
            		minVersion: 'TLSv1'
        	}
    		},
		extra: {
        		validateConnection: false,
        		trustServerCertificate: true,
      		},
	})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
