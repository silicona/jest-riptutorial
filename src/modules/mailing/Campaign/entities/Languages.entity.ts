import { IsInt, IsString } from "class-validator";
import { Column, Entity } from "typeorm";

@Entity("idiomas")
export class LanguagesEntity {
  @Column("int", { primary: true, name: "idHotel" })
  @IsInt()
  hotelId: number;

  @Column("varchar", { name: "1", nullable: true, length: 2 })
  @IsString()
  1: string | null;

  @Column("varchar", { name: "2", nullable: true, length: 2 })
  @IsString()
  2: string | null;

  @Column("varchar", { name: "3", nullable: true, length: 2 })
  @IsString()
  3: string | null;

  @Column("varchar", { name: "4", nullable: true, length: 2 })
  @IsString()
  4: string | null;

  @Column("varchar", { name: "5", nullable: true, length: 2 })
  @IsString()
  5: string | null;

  @Column("varchar", { name: "6", nullable: true, length: 2 })
  @IsString()
  6: string | null;

  @Column("varchar", { name: "7", nullable: true, length: 2 })
  @IsString()
  7: string | null;

  @Column("varchar", { name: "8", nullable: true, length: 2 })
  @IsString()
  8: string | null;
}
