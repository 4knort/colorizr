import React, { PropTypes } from 'react';

import './preview-table.scss';

const PreviewTable = ({ exportGroup, changeVarName }) => {
  const tableItems = exportGroup.map((item, index) => {
    return (
      <tr key={`tableItem-${index}`}>
        <td style={{ backgroundColor: item.color }} />
        <td>item.color</td>
        <td>rgb({item.rgb.red}, {item.rgb.green}, {item.rgb.blue})</td>
        <td><input type="text" onChange={(e) => { changeVarName(e.target.value, item.id); }} value={item.variable} /></td>
      </tr>
    );
  });

  return (
    <table className="preview-table">
      <thead>
        <tr>
          <th>Color</th>
          <th>Hex value</th>
          <th>RGB value</th>
          <th>Variable name</th>
        </tr>
      </thead>
      <tbody>
        {!exportGroup.length && <tr><td colSpan="4">Select Colors for export first</td></tr>}
        {tableItems}
      </tbody>
    </table>
  );
};

PreviewTable.propTypes = {
  exportGroup: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeVarName: PropTypes.func.isRequired,
};

export default PreviewTable;
