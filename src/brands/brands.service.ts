import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import {v4 as uuid} from 'uuid'
import { Brand } from "./entities/brand.entity";

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    { id: uuid(), name: 'Toyota', createdAt: Date.now() }
  ];
  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      name: createBrandDto.name.toLowerCase(),
      id: uuid(),
      createdAt: Date.now(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(b => b.id === id);
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brand = this.findOne(id);
    brand = {
      ...brand,
      ...updateBrandDto,
      id,
      updatedAt: Date.now(),
    };
    this.brands = this.brands.map((b) => {
      if (b.id === id) {
        return brand;
      }
      return b;
    });
    return brand;
  }

  remove(id: string) {
    const brand = this.findOne(id);
    this.brands = this.brands.filter((b) => b.id !== id);
    return { message: 'deleted' };
  }
}
