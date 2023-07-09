import { Injectable, NotFoundException } from "@nestjs/common";
import { v4 as uuid } from 'uuid';
import { Car } from "./interfaces/car.interface";
import { CreateCarDto } from "./dto/create-car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";

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
  create(payload: CreateCarDto) {
    const newCar: Car = {
      ...payload,
      id: uuid(),
    };
    this.cars.push(newCar);
    return newCar;
  }
  update(id: string, payload: UpdateCarDto) {
    let car = this.finOneById(id);
    car = {
      ...car,
      ...payload,
      id,
    };
    this.cars = this.cars.map((c) => {
      if (c.id === id) {
        return car;
      }
      return c;
    });
    return car;
  }
  delete(id: string) {
    const car = this.finOneById(id);
    this.cars = this.cars.filter((c) => c.id !== id);
    return { message: 'deleted' };
  }
}
