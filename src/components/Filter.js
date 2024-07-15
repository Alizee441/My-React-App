// src/components/Filter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setFilter } from '../redux/moviesSlice';

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  font-family: 'Comfortaa', cursive;
`;

const FilterOption = styled.label`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 8px;
  transform: scale(1.5); /* increase size of the checkbox */
`;

const FilterTitle = styled.h3`
  font-family: 'Comfortaa', cursive;
`;

const Filter = () => {
  const dispatch = useDispatch();
  const { categories, filters } = useSelector(state => state.movies);

  const handleFilterChange = (category) => {
    const newFilters = filters.includes(category)
      ? filters.filter(filter => filter !== category)
      : [...filters, category];
    dispatch(setFilter(newFilters));
  };

  // Filter out "Another Checkbox" category
  const filteredCategories = categories.filter(category => category !== 'Another Checkbox');

  return (
    <FilterContainer>
      <FilterTitle>Filter by Category</FilterTitle>
      {filteredCategories.map((category) => (
        <FilterOption key={category}>
          <Checkbox
            type="checkbox"
            checked={filters.includes(category)}
            onChange={() => handleFilterChange(category)}
          />
          {category}
        </FilterOption>
      ))}
    </FilterContainer>
  );
};

export default Filter;
