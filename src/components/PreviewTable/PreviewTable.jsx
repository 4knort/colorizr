import React from 'react';

import './preview-table.scss';

const PreviewTable = () => {
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
        <tr>
          <td style={{ backgroundColor: '#00004C' }} />
          <td>#00004C</td>
          <td>rgb(0, 0, 76) </td>
          <td><input type="text" value="color-0sdf" /></td>
        </tr>
      </tbody>
    </table>
  );
};

export default PreviewTable;
