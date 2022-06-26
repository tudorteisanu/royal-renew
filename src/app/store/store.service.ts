import { Injectable } from '@angular/core';
import { AuthStoreService } from 'src/app/store/modules/auth-store.service';
import { HomeStoreService } from 'src/app/store/modules/home-store.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(public auth: AuthStoreService, public readonly home: HomeStoreService) {}
}
