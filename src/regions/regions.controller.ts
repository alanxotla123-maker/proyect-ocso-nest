import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ROLES } from '../auth/constants/roles.constants';
import { Auth } from '../auth/decorators/auth.decorator';
import { ApiAuth } from '../auth/decorators/api.decorator';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Region } from './entities/region.entity';
@ApiAuth()
@ApiTags('Regions')
@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) { }
  @Auth()
  @ApiResponse({
    status: 201,
    example: {
      regionId: 1,
      regionName: "Bajio",
      regionStates: ["Querétaro", "Guanajuato"]
    } as Region
  })
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionsService.create(createRegionDto);
  }
  @Auth(ROLES.ADMIN, ROLES.MANAGER)
  @Get()
  findAll() {
    return this.regionsService.findAll();
  }
  @Auth(ROLES.ADMIN, ROLES.MANAGER)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionsService.findOne(+id);
  }
  @Auth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionsService.update(+id, updateRegionDto);
  }
  @Auth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionsService.remove(+id);
  }
}
