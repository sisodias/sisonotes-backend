import { WinstonLogger } from 'nest-winston';

import { SISO NotesLogger as RawSISO NotesLogger } from '../../../base/logger';

export class SISO NotesLogger extends WinstonLogger {
  override error(
    message: any,
    stackOrError?: Error | string | unknown,
    context?: string
  ) {
    super.error(
      message,
      RawSISO NotesLogger.formatStack(stackOrError) as string,
      context
    );
  }
}
