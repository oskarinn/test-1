import { Action }  from 'redux';
import { actionsTypes } from '../constants/actions-type';
import { Carer } from '../models/Carer';

declare var fetch;

export interface CarerAction extends Action {
    carer: Carer;
}

export const addNewCarerAction: (carer: Carer) => CarerAction = 
    (carer: Carer) => ({
        type: actionsTypes.ADD_NEW_CARER,
        carer
    });

export const AddCarerToList = (carer: Carer) => {
    return (dispatch: any, getState: any) => {
        dispatch(addNewCarerAction(carer));
    }
}

// -----------------------------------------------------------------------

export interface CarerListAction extends Action {
    carers: any[]
}

const clearCarerRequest: () => CarerListAction = 
    () => ({
        type: actionsTypes.GET_CARER_LIST,
        carers: []
    });

const setNewCarerListAction: (carers: any[]) => CarerListAction = 
    (carers) => ({
        type: actionsTypes.GET_CARER_LIST,
        carers
    });

export const refreshCarers = () => {
    (dispatch: any, getState: any) => {
        dispatch(clearCarerRequest());

        fetch('http://localhost:3010/carers')
            .then(res => res.json())
            .then(carers => {
                const careList = carers.map(item => {
                    const newCarer = new Carer();
                    newCarer.id = "";
                    newCarer.name = item.name;
                    newCarer.phone = item.phone;
                    newCarer.email = item.email;
                    newCarer.country = item.country;
                    
                    return newCarer;
                });

                dispatch(setNewCarerListAction(careList));
            })
            .catxh(error => {
                console.log("API REST Error: ", error);
            });
    }
    
   
}