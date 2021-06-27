import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { displayDropdownAction } from '../../actions/SearchBarActions';
import '../CSS/Dropdown.css';




const Dropdown = (props) => {
    const ref = useRef()
    const onBodyClick = (e) => {
        console.log('Hi')
        //if(!ref.current.contains(e.target)){
            props.displayDropdownAction(false);
            e.stopPropagation();
        //}
        //else {
        //    props.displayDropdownAction(true)
        //}
        
    }
    useEffect(()=>{
        document.addEventListener('click', onBodyClick, { capture: true })

        return ( ()=> {
            document.removeEventListener('click', onBodyClick, { capture: true })
        })
    })
    return (
        <div ref={ref} className="dropdown--list">
            <ul>
                <li>Search</li>
                <li>Search Advanced</li>
                <li>Search Current Page</li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        displayDropdown: state.displayDropdown.displayDropdown
    })
}

export default connect(mapStateToProps, {
    displayDropdownAction
})(Dropdown);

