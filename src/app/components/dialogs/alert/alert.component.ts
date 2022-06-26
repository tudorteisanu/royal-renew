import { Component, OnDestroy } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { AlertInterface } from 'src/app/interfaces/alert';
import { Observable, Subject, takeUntil, timer } from 'rxjs';
import { alertAnimation } from 'src/app/components/dialogs/alert/animations';
import { ANIMATION_DELAY } from 'src/app/components/dialogs/alert/consts';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [alertAnimation],
})
export class AlertComponent implements OnDestroy {
  public items: Array<AlertInterface> = [];

  private destroy$: Subject<boolean> = new Subject<boolean>();

  private alertInterval: Observable<number> = timer(ANIMATION_DELAY);

  constructor(private alertService: AlertService) {
    alertService.alertEvent.pipe(takeUntil(this.destroy$)).subscribe((alert: AlertInterface) => {
      this.items.push({ ...alert, index: this.items.length });
      if (!alert.withoutClosing) {
        this.alertInterval.subscribe(() => {
          this.hide(alert.index!);
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private hide(index: number): void {
    this.items.splice(index, 1);
  }
}
