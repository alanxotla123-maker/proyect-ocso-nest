import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employees/entities/employee.entity';
import { Product } from './products/entities/product.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',  
      port: 5432,
      username: 'postgres',
      password: 'Salinas978',
      database: 'postgres',
      entities: [Employee,Product], 
      synchronize: true,
    })
  ,EmployeesModule, ProductsModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
