import { Subject, takeUntil } from 'rxjs';
import { StoreService } from '@App/store/store.service';
import { Component } from '@angular/core';

@Component({
  template: '',
})
export class CategoriesMixin {
  items: Array<any> = [];

  notifySubject: Subject<boolean> = new Subject<boolean>();

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.store.home.categoriesEvent
      .pipe(takeUntil(this.notifySubject))
      .subscribe((data: Array<any>) => {
        this.items = data;
      });
  }

  ngOnDestroy(): void {
    this.notifySubject.next(true);
    this.notifySubject.complete();
  }
}
