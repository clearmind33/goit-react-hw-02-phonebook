import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onChangeFilter }) => {
  const handleChange = ({ target }) => {
    const { value } = target;
    onChangeFilter(value);
  };
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      placeholder="Find contacts by name..."
      onChange={handleChange}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};
