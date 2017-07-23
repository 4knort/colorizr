import React, { PropTypes } from 'react';
import warna from 'warna';

const FavouritesTable = ({ colors, changeVarName }) => {
  const colorsArr = [];

  const createTable = (array) => {
    array.map((item, index) => {
      const color = warna.parse(item);
      const obj = {
        color: color.hex,
        rgb: color.rgb,
        variable: `color-${index}`,
        id: index,
      };

      colorsArr.push(obj);
    });
  };

  createTable(colors);

  const tableItems = colorsArr.map((item, index) => {
    return (
      <tr key={`tableItem-${index}`}>
        <td style={{ backgroundColor: item.color }} />
        <td>{item.color}</td>
        <td>rgb({item.rgb.red}, {item.rgb.green}, {item.rgb.blue})</td>
      </tr>
    );
  });

  return (
    <table className="preview-table">
      <thead>
        <tr>
          <th>Color</th>
          <th>Hex value</th>
          <th>RGB Value</th>
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
