import { IsArray, IsOptional, IsString, Min, MinLength } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

export class JournalDto {
  @IsString()
  @ApiModelProperty({ example: 'Day one' })
  title: string;

  @IsString()
  @ApiModelProperty({ example: 'Description of my day one' })
  description: string;
}
