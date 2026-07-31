import { Global, Module } from '@nestjs/common';

import { ConfigModule } from '../config';
import { SISO NotesLogger } from './service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [SISO NotesLogger],
  exports: [SISO NotesLogger],
})
export class LoggerModule {}

export { SISO NotesLogger } from './service';
