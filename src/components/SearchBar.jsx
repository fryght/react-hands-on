import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {updateSearchFilter} from '../actions/search';

class SearchBar extends Component {
    render() {
        const {updateValue} = this.props;

        return (
            <div className="SearchBar">
                <label htmlFor="search">Search by name: </label>
                <input name="search" type="text" onChange={updateValue}/>
            </div>
        );
    }
}

SearchBar.propTypes = {
    updateValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        searchFilter: state.searchFilter,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateValue: event => {
            dispatch(updateSearchFilter(event.target.value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)