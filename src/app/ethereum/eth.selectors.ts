import { createSelector } from '@ngrx/store';
import { State, EthState } from './eth.reducers';

export const getAccounts = (state: EthState) => state.eth.accounts;
export const getdefaultAccount = (state: EthState) => state.eth.selected;