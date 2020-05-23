import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import {SearchBar,SearchInput,SearchIcon} from './Search.style';

export const SearchCity = ({ submit, value, change, showResult }) => {
  return (
    <>
      <SearchBar showResult={showResult} onSubmit={submit}>
        <SearchInput type="text" value={value} placeholder="Enter city" onChange={change} />
        <SearchIcon>
         <Icon.Search/>
        </SearchIcon>
      </SearchBar>
    </>
  );
};

SearchCity.propTypes = {
  submit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  showResult: PropTypes.bool.isRequired,
};

export default SearchCity;