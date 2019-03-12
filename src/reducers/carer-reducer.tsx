import { Reducer } from 'redux';
import { IAppState } from '../constants/app-state';
import { actionsTypes } from '../constants/actions-type';
import { CarerAction, CarerListAction } from '../actions/carer-actions';
import dataCarerListFromFile from '../data/carer-list.json';

export const carerReducer: Reducer<IAppState, CarerAction> = 
    (state: IAppState = {carers: dataCarerListFromFile}, action: CarerAction): any  => {
        
        switch (action.type) {
            case actionsTypes.ADD_NEW_CARER:
                return {
                    ...state,
                    carers: state.carers.concat(action.carer)
                }

            default:
                return state;
        }
    };

/* 
export const carerListReducer: Reducer<IAppState, CarerListAction> = 
    (state: IAppState = {carers: []}, action: CarerListAction): any  => {
       
        return {
            carers: action.carers
        }
    }; */