import { SearchBarText, SearchBarPlaceHolderText, DisplayDropdown } from '../actions/types';

// const [ searchText, setSearchText ] = useState('');
// const [ placeholderText, setPlaceholderText ] = useState('Search');
// const [ displayDropdown, setDisplayDropdown ] = useState(false);

const INITIAL_STATE = {
    searchText: '',
    placeholderText: 'Search',
    displayDropdown: false
}


export const searchTextReducer = (state = INITIAL_STATE, action) => {
    //console.log(action,state)
    switch (action.type) {
        case SearchBarText :
            return { ...state, searchText: action.payload}
        default:
            return state;
    }
}

export const placeholderTextReducer = (state = INITIAL_STATE, action) => {
    //console.log(action,state)
    switch (action.type) {
        case SearchBarPlaceHolderText :
            return { ...state, placeholderText: action.payload}
        default:
            return state;
    }
}

export const displayDropdownReducer = (state = INITIAL_STATE, action) => {
    //console.log(action,state)
    switch (action.type) {
        case DisplayDropdown :
            return { ...state, displayDropdown: action.payload}
        default:
            return state;
    }
}