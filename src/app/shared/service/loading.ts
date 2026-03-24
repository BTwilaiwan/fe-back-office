import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})

export class LoadingService {

  private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
 
  isLoading$ = this._isLoading$.asObservable();
 
  start(): void {
    this._isLoading$.next(true);
  }
 
  stop(): void {
    this._isLoading$.next(false);
  }

}