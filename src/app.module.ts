import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employees/entities/employee.entity';
import { Product } from './products/entities/product.entity';
import { ProvidersModule } from './providers/providers.module';
import { Provider } from './providers/entities/provider.entity';
import { ManagersModule } from './managers/managers.module';
import { LocationsModule } from './locations/locations.module';
import { RegionsModule } from './regions/regions.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({  
      type: 'postgres',
      host: 'localhost',  
      port: 5432,
      username: 'postgres',     
      password: 'Salinas978',
      database: 'postgres',
      entities: [Employee,Product,Provider], 
      synchronize: true,
    })
  ,EmployeesModule, ProductsModule, ProvidersModule, ManagersModule, LocationsModule, RegionsModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
