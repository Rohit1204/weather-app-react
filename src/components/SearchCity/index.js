import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import {SearchInput,SearchIcon} from './Search.style';
import device from '../../responsive';

const SearchBar = styled.form`
  top: ${({ showResult }) => (showResult ? '0%' : '30%')};
  position: relative;
  margin: 0 auto;
  max-width: 500px;
  transition: 0.8s 0.5s;
  @media ${device.laptopL} {
    max-width: 600px;
  }
  @media ${device.desktop} {
    max-width: 700px;
  }
`;


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