import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put } from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";

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
    return this.carsService.create(payload);
  }
  @Patch(':carId')
  update(
    @Param('carId', ParseUUIDPipe) carId: string,
    @Body() payload: UpdateCarDto,
  ) {
    return this.carsService.update(carId, payload);
  }
  @Delete(':carId')
  delete(@Param('carId', ParseUUIDPipe) carId: string) {
    return this.carsService.delete(carId);
  }
}
