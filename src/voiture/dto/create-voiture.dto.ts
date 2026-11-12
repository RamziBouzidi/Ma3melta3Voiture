import { ApiProperty } from "@nestjs/swagger";

export class CreateVoitureDto {
    @ApiProperty()
    nom: String;
    @ApiProperty()
    couleur: String;
    @ApiProperty()
    nombreChevaux: String;
}
