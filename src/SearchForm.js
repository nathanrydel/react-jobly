import React from 'react';
import { useState } from 'react';

/**
 * A text input search field with submit button
 *
 * Props:
 * - searchFn: function to call in parent
 * - msg: placeholder for search form
 *
 * State:
 * - formData
 *
 * { CompanyList, JobList } -> SearchForm
 */

function SearchForm({ searchFn, msg }) {
  const [formData, setFormData] = useState('');
  console.log('SearchForm renders', formData)

  // TODO: Short docstrings please
  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  // TODO: Short docstrings please
  function handleSubmit(evt) {
    evt.preventDefault()
    searchFn(formData.trim());
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text'
        name='searchInput'
        onChange={handleChange}
        value={formData}
        placeholder={msg} />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default SearchForm;