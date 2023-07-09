import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { CarsService } from "./cars.service";

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }
  @Get(':carId')
  getOneCar(@Param('carId', ParseIntPipe) carId: number) {
    return this.carsService.finOneById(carId);
  }
}
