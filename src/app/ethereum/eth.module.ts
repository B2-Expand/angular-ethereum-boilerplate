import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from './../../environments/environment';

// Web3
import { WEB3 } from './tokens';
const Web3 = require('web3');

// Services
import { AccountsService } from './eth.services';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, ethReducer } from './eth.reducers';
import { EthEffects } from './eth.effects';

// MODULE FACTORY
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(ethReducer),
    EffectsModule.forRoot([EthEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  providers: [AccountsService, {
    provide: WEB3,
    useFactory: () => new Web3(Web3.givenProvider || "ws://localhost:8546"),
  }]
})
export class EthereumModule {}
