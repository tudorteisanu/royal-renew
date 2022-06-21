import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  progressBarEvent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  timeout = timer(300);

  show(): void {
    this.progressBarEvent.next(true);
  }

  hide(): void {
    this.timeout.subscribe(() => {
      this.progressBarEvent.next(false);
    });
  }
}
