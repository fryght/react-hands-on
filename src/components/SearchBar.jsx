import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

export default SearchBar;