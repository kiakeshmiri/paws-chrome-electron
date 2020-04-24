import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

declare const window: any;

@Injectable({
  providedIn: 'root'
})
export class NetworkstatusService {
  private internalConnectionChanged = new Subject<boolean>();

  get connectionChanged() {
    return this.internalConnectionChanged.asObservable();
  }

  get isOnline() {
    //return !!window.navigator.onLine;
    return false;
  }

  constructor() {
    // window.addEventListener('online', () => this.updateOnlineStatus());
    // window.addEventListener('offline', () => this.updateOnlineStatus());
    this.updateOnlineStatus('offline');
  }

  private updateOnlineStatus(mode) {
    this.internalConnectionChanged.next(mode);
  }
}
