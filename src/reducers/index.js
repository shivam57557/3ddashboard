import { combineReducers } from 'redux'
import { notificationReducer } from './NotificationReducer';
import { searchTextReducer, placeholderTextReducer, displayDropdownReducer } from './SearchBarReducer';

export default combineReducers({
    searchText: searchTextReducer,
    placeholderText: placeholderTextReducer,
    displayDropdown: displayDropdownReducer,
    notificationCount: notificationReducer

})


//export default reducers;

