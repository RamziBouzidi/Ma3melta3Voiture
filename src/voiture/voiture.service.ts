import { Injectable } from '@nestjs/common';
import { CreateVoitureDto } from './dto/create-voiture.dto.js';
import { Voiture } from './entities/voiture.entity.js';

@Injectable()
export class VoitureService {
  private voitureTable:Voiture[] = []
  private idcounter = 0;
  
  create(createVoitureDto: CreateVoitureDto) {
    const newVoiture:Voiture = {
      id: this.idcounter++,
      ...createVoitureDto

    };
    this.voitureTable.push(newVoiture);
    return newVoiture;
    
  }
  findAll() {
    return this.voitureTable;
  }

  findOne(id: number) {
    for (let i = 0;i < this.voitureTable.length;i++){
      if (this.voitureTable[i].id == id){
        return this.voitureTable[i]
      

      }
    }
    return "voiture with thi id not found in our ma3mel"
  }
}
