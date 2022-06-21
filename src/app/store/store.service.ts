import { Injectable } from '@angular/core';
import { AuthStoreService } from '@App/store/modules/auth-store.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(public auth: AuthStoreService) {}
}
