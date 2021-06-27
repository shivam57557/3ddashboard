import { FETCH_NOTIFICATION_COUNT } from '../actions/types';

let notificationCount = 12;
const INITIAL_STATE = {
    notificationCount: notificationCount
}

export const notificationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATION_COUNT:
            notificationCount++;
            return {...state, notificationCount: notificationCount};
        default: 
            return state;
    }
}