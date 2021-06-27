import { SearchBarPlaceHolderText, SearchBarText, DisplayDropdown } from './types';


export const searchBarTextAction = (searchText) => {
    console.log(searchText)
    return ({
        type: SearchBarText,
        payload: searchText
    })
}

export const searchBarPlaceHolderAction = (placeholderText) => {
    return ({
        type: SearchBarPlaceHolderText,
        payload: placeholderText
    })
}

export const displayDropdownAction = (displayDropdown) => {
    return ({
        type: DisplayDropdown,
        payload: displayDropdown
    })
}