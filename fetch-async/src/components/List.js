import React from 'react';
import uniqueId from '../helpers/uniqueId';

const List = (props) => {
  const { companies } = props;

  if (!companies || companies.length === 0) {
    return (
      <div>
        <h2 id="companies-heading">Search results</h2>
        <p>No companies loaded yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 id="companies-heading">Search results</h2>
      <ul aria-labelledby="companies-heading">
        {companies.map((company) => {
          return (
            <li key={uniqueId('companies_')}>
              <p>{company.name}</p>
              <span>{company.addresses[0].street}</span>
              <span>{company.addresses[0].city}</span>
              <span>{company.addresses[0].zipcode}</span>
              <span>{company.addresses[0].country}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
