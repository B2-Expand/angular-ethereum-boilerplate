import { Component, OnInit, NgZone } from '@angular/core';

// NGRX
import { Store, select } from '@ngrx/store';
import { EthState, GetAccounts, getAccounts } from './ethereum';

// RXJS
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let address of addresses$ | async"> {{address}} </li>
    </ul>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  public addresses$: Observable<string[]>;
  public addresses: string[];

  constructor(private store: Store<EthState>, private zone: NgZone) {}

  ngOnInit() {
    this.store.dispatch( new GetAccounts() );
    this.addresses$ = this.store.pipe(select(((getAccounts))));
  }
}
