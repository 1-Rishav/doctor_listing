import React from 'react';

const SortBy = ({ onSort }) => {
  return (
    <div className="p-4 border rounded bg-white shadow-sm mb-4">
      <h2 className="font-semibold mb-2">Sort by</h2>
      <div className="space-y-2">
        <label className="block">
          <input type="radio" name="sort" onChange={() => onSort('fees')} className="mr-2" />
          Fees: Low–High
        </label>
        <label className="block">
          <input type="radio" name="sort" onChange={() => onSort('experience')} className="mr-2" />
          Experience: High–Low
        </label>
      </div>
    </div>
  );
};

export default SortBy;
