import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";

@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Honda', 'Jeep'];
  @Get()
  getAllCars() {
    return this.cars;
  }
  @Get(':carId')
  getOneCar(@Param('carId', ParseIntPipe) carId: number) {
    return this.cars[carId];
  }
}
