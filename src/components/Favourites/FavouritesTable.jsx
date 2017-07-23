import React, { PropTypes } from 'react';

// import './preview-table.scss';

const FavouritesTable = ({ colors, changeVarName }) => {
  const tableItems = colors.map((item, index) => {
    return (
      <tr key={`tableItem-${index}`}>
        <td style={{ backgroundColor: item }} />
        <td>{item}</td>
      </tr>
    );
  });

  return (
    <table className="preview-table">
      <thead>
        <tr>
          <th>Color</th>
          <th>Hex value</th>
        </tr>
      </thead>
      <tbody>
        {!colors.length && <tr><td colSpan="4">Select Colors first</td></tr>}
        {tableItems}
      </tbody>
    </table>
  );
};

export default FavouritesTable;
