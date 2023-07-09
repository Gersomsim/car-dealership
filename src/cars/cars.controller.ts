import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { CarsService } from "./cars.service";

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.cars;
  }
  @Get(':carId')
  getOneCar(@Param('carId', ParseIntPipe) carId: number) {
    return this.cars[carId];
  }
}
