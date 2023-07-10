import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { BrandsModule } from "../brands/brands.module";
import { CarsModule } from "../cars/cars.module";

@Module({
  imports: [BrandsModule, CarsModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
