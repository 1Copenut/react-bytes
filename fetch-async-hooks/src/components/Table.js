import React from 'react';

const Table = (props) => {
  const { dataArr } = props;

  const tableRow = dataArr.map((row) => (
    <tr>
      <th scope="row">{row.name}</th>
      <td>
        {row.description === null
          ? 'No description provided :('
          : row.description}
      </td>
      <td>
        <a href={row.git_url}>View repository</a>
      </td>
      <td>{row.watchers}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Repo name</th>
          <th scope="col">Description</th>
          <th scope="col">Direct link</th>
          <th scope="col">Watchers</th>
        </tr>
      </thead>
      <tbody>{tableRow}</tbody>
    </table>
  );
};

export default Table;
