import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  info(message: string) {
    console.info(message);
  }
  warning(warning: string) {
    console.warn(warning);
  }
  error(error: string) {
    console.error(error);
  }
}
