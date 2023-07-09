import { Injectable, NotFoundException } from "@nestjs/common";
import { v4 as uuid } from 'uuid';
import { Car } from "./interfaces/car.interface";

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];
  findAll() {
    return this.cars;
  }
  finOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not exist`);
    return car;
  }
}
