import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('prime/:number')
  checkPrime(@Param('number', ParseIntPipe) number: number): { isPrime: boolean } {
    if (number <= 1) return { isPrime: false };
    if (number <= 3) return { isPrime: true };
    
    if (number % 2 === 0 || number % 3 === 0) return { isPrime: false };
    
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return { isPrime: false };
      }
    }
    
    return { isPrime: true };
  }
} 