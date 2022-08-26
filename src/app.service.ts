import { Injectable } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Injectable()
@ApiResponse({ description: 'Initial Welcome Route' })
export class AppService {
  getHello(): string {
    return 'Hello, welcome to Movies Catalog API';
  }
}
