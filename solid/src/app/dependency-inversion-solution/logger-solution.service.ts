import { Injectable } from '@angular/core';
import { Logger } from './interfaces/logger';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerSolutionService implements Logger {

  constructor(private logger: NGXLogger) { }

  info(message: string): void {
    this.logger.info(message);
  }
  warning(warning: string): void {
    this.logger.warn(warning);
  }
  error(error: string): void {
    this.logger.error(error);
  }
}
