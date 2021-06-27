import React, { useState, useRef } from 'react';
import '../CSS/SearchBar.css';
import Dropdown from './Dropdown';
import { connect } from 'react-redux';
import { displayDropdownReducer, placeholderTextReducer, searchTextReducer } from '../../reducers/SearchBarReducer';
import { searchBarTextAction, searchBarPlaceHolderAction, displayDropdownAction } from '../../actions/SearchBarActions';
//import { InputGroup, FormControl, Button } from 'react-bootstrap';


const SearchBar = (props) => {
    const ref = useRef();
    // const [ searchText, setSearchText ] = useState('');
    // const [ placeholderText, setPlaceholderText ] = useState('Search');
    // const [ displayDropdown, setDisplayDropdown ] = useState(false);
    const handleDropdown = (e) => {
        e.preventDefault();
        if(ref.current.contains(e.target)) {
            console.log('SearchBar')
            props.displayDropdownAction(!props.displayDropdown);
        }
        
    }

    // const setDisplayDropdownVal = (value) => {
    //     setDisplayDropdown(value);
    // }

    const setSearchText = (e) => {
        //console.log(e)
        props.searchBarTextAction(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        props.searchBarTextAction(e.target.value);
    }
    return (
        <form>
            <div className="SearchBar">
                <input
                    type="text" 
                    placeholder={props.placeholderText}
                    value={props.searchText}
                    onFocus={()=>props.searchBarPlaceHolderAction('Start Typing...')}
                    onBlur={()=>props.searchBarPlaceHolderAction('Search')}
                    onChange={(e) => setSearchText(e)}
                />
                <button onClick={(e)=>handleSearch(e)}>
                    <i className="bi bi-search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    </i>
                </button>
                <button ref={ref} onClick={(e)=>handleDropdown(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
                { props.displayDropdown && <Dropdown />}
                
            </div>
            {/* <div className="inner-addon left-addon">
                <i className="glyphicon glyphicon-user"></i>
                <input type="text" className="form-control" />
            </div> */}

            {/* <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <Button variant="outline-secondary">Button</Button>
                </InputGroup.Prepend>
                <FormControl aria-describedby="basic-addon1" />
            </InputGroup> */}

            

        </form>
    )
}

const mapStateToProps = (state) => {
    return ({
        searchText: state.searchText.searchText,
        placeholderText: state.placeholderText.placeholderText,
        displayDropdown: state.displayDropdown.displayDropdown
    })
}


export default connect(mapStateToProps, {
    searchBarTextAction,
    searchBarPlaceHolderAction,
    displayDropdownAction
})(SearchBar);