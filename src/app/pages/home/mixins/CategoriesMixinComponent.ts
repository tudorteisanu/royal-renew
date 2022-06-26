import { Subject, takeUntil } from 'rxjs';
import { StoreService } from 'src/app/store/store.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  template: '',
})
export class CategoriesMixinComponent implements OnInit, OnDestroy {
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
