import { Controller, Get, Param, ParseIntPipe, BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
@Controller('assignments')
export class AssignmentsController {
  @Get('fibonacci/:n')
  getFibonacciSequence(@Param('n', ParseIntPipe) n: number): number[] {
    if (n < 0) {
      throw new BadRequestException('Number must be non-negative');
    }

    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
  }
} 