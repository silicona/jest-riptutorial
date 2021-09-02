import { IsInt, IsString } from "class-validator";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("texto", ["textId", "langId"], {})
@Entity("idiomasTextos")
export class LanguageTextEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  @IsInt()
  id: number;

  @Column("int", { primary: true, name: "idTexto" })
  @IsInt()
  textId: number;

  @Column("int", { name: "idIdioma" })
  @IsInt()
  langId: number;

  @Column("mediumtext", { name: "texto" })
  @IsString()
  text: string;
}
