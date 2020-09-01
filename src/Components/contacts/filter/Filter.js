import React from 'react';
import {connect} from 'react-redux'
import { getFilterValue } from '../../../redux/contactsSlice/contactsSlice';

const Filter = ({ filter, getFilterValue }) => {
    return (
        <label>Filter:
            <input type="text" value={filter} onChange={(e)=>getFilterValue(e.target.value)} />
        </label>

    );
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = {
    getFilterValue: getFilterValue,
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter);