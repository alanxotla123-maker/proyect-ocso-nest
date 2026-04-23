import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseGuards, UnauthorizedException } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { NotFoundError } from 'rxjs';
import { AuthGuard } from '../auth/guards/auth.guard';
import { UserData } from '../auth/decorators/user.decorator';
import { User } from '../auth/entities/user.entity';
import { Roles } from '../auth/decorators/roles.decoratror';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Auth } from '../auth/decorators/auth.decorator';
@UseGuards(AuthGuard)
@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) { }

  @Post()
  create(@Body() createProviderDto: CreateProviderDto) {
    return this.providersService.create(createProviderDto);
  }
  @Auth("Admin")
  @Get()
  findAll(@UserData() user: User) {
    console.log(user.userRoles)
    if (user.userRoles.includes("Employee")) {
      throw new UnauthorizedException("no estas autorizado solo admin y manager");
    }
    return this.providersService.findAll();
  }
  @Get('/name/:name')
  findByName(@Param('name') name: string) {
    return this.providersService.findOneByName(name);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    const provaider = this.providersService.findOne(id)
    if (!provaider) throw new NotFoundException;
    return provaider
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProviderDto: UpdateProviderDto) {
    return this.providersService.update(id, updateProviderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.providersService.remove(id);
  }
}
