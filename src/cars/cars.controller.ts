import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put } from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-car.dto";

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }
  @Get(':carId')
  getOneCar(@Param('carId', ParseUUIDPipe) carId: string) {
    return this.carsService.finOneById(carId);
  }
  @Post()
  create(@Body() payload: CreateCarDto) {
    return {
      body: payload,
    };
  }
  @Patch(':carId')
  update(
    @Param('carId') carId: number,
    @Body() payload: any
  ) {
    return {
      body: payload,
    };
  }
  @Delete(':carId')
  delete(@Param('carId') carId: number) {
    return {
      id: carId
    }
  }
}
