import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
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
  @Post()
  create(@Body() payload: any) {
    return {
      body: payload,
    };
  }
  @Patch(':carId')
  update(
    @Param('carId', ParseIntPipe) carId: number,
    @Body() payload: any
  ) {
    return {
      body: payload,
    };
  }
  @Delete(':carId')
  delete(@Param('carId', ParseIntPipe) carId: number) {
    return {
      id: carId
    }
  }
}
