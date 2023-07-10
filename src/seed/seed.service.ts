import { Injectable } from '@nestjs/common';
import { BrandsService } from '../brands/brands.service';
import { CarsService } from '../cars/cars.service';
import { CARS_SEED } from './seed/cars.seed';
import { BRANDS_SEED } from './seed/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly branService: BrandsService,
    private readonly carsService: CarsService,
  ) {}

  populateDB() {
    this.branService.fillCars(BRANDS_SEED);
    this.carsService.fillCars(CARS_SEED);
    return `Seeded`;
  }
}
