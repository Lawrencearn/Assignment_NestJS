import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('factorial/:number')
  calculateFactorial(@Param('number', ParseIntPipe) number: number) {
    if (number < 0) {
      throw new Error('Factorial cannot be calculated for negative numbers');
    }
    
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    
    return {
      number: number,
      factorial: factorial
    };
  }
} 