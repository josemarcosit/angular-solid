import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  info(message: string): void {
    console.info(message);
  }
  warning(warning: string): void {
    console.warn(warning);
  }
  error(error: string): void {
    console.error(error);
  }
}
