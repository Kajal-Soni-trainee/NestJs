import { Controller, Get } from '@nestjs/common';
import { CatService } from './cats.service';

import { Cat } from './interfaces/cats.interface';
@Controller('cats')
export class CatController {
  constructor(private catService: CatService) {}
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }
}
