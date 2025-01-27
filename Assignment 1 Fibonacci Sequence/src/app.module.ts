import { Module } from '@nestjs/common';
import { AssignmentsModule } from './assignments/assignments.module';

@Module({
  imports: [AssignmentsModule],
})
export class AppModule {} 