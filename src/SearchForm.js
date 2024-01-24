import React from 'react';
import { useState } from 'react';

/**
 * A text input search field with submit button
 *
 * TODO: Needs implementation after stub review in CR1
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

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    setFormData(evt.target.value);
    searchFn(formData);
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