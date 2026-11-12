import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateVoitureDto } from './dto/create-voiture.dto.js';
import { VoitureService } from './voiture.service.js';

@Controller('voiture')
export class VoitureController {
  constructor(private readonly voitureService: VoitureService) {}

  @Post()
  create(@Body() createVoitureDto: CreateVoitureDto) {
    return this.voitureService.create(createVoitureDto);
  }

  @Get()
  findAll() {
    return this.voitureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Number) {
    return this.voitureService.findOne(+id);
  }

}
