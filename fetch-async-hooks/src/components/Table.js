import React from 'react';
import '../styles/table.css';

const Table = (props) => {
  const { dataArr } = props;

  const tableRow = dataArr.map((row) => (
    <tr>
      <th scope="row">
        <a href={row.git_url}>{row.name}</a>
      </th>
      <td>
        {row.description === null
          ? 'No description provided :('
          : row.description}
      </td>
      <td className="table-row--centered">{row.watchers}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Repo name</th>
          <th scope="col">Description</th>
          <th scope="col" className="table-row--centered">
            Watchers
          </th>
        </tr>
      </thead>
      <tbody>{tableRow}</tbody>
    </table>
  );
};

export default Table;
