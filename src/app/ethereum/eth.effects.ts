import { Injectable } from '@angular/core';
import { AccountsService } from './eth.services';

// NGRX
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { GET_ACCOUNTS, GetAccountsSuccess, SELECT_ACCOUNT, SelectAccount, EthError } from './eth.actions';

// RXJS
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class EthEffects {

    constructor(private actions$: Actions, private accounts: AccountsService) {}

    @Effect()
    GetAccounts$: Observable<Action> = this.actions$
        .ofType(GET_ACCOUNTS)
        .pipe(
            switchMap(() => this.accounts.getAccounts()),
            map((accounts: string[]) => new GetAccountsSuccess(accounts)),
            catchError((err: any) => of(new EthError(err)))
        );
    
    @Effect({dispatch: false})
    SelectAccount$ = this.actions$
        .ofType(SELECT_ACCOUNT)
        .pipe(
            map((action: SelectAccount) => this.accounts.defaultAccount = action.payload)
        );
}
