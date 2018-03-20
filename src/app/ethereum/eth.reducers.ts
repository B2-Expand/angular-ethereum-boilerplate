import { GET_ACCOUNTS_SUCCESS, SELECT_ACCOUNT, AccountsActions, ETH_ERROR } from './eth.actions';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
    selected: string,
    accounts: string[]
}

const initialState: State = {
    selected: null,
    accounts: []
}

export const reducers = (state = initialState, action: AccountsActions): State => {
    switch (action.type) {
        case (GET_ACCOUNTS_SUCCESS): {
            return {...state, accounts: action.payload };
        };
        case (SELECT_ACCOUNT): {
            return {...state, selected: action.payload };
        };
        case (ETH_ERROR): {
            console.error(action.payload);
            return state;
        };
        default: {
            return state;
        }
    }
}

/**
 * Ethereum Global State
 */
export interface EthState {
    eth: State
}

export const ethReducer: ActionReducerMap<EthState> = {
    eth: reducers
};
