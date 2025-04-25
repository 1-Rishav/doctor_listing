import React from 'react';

const SpecialityFilter = ({ selected, onToggle }) => {
  const specialties = ['Neurologist', 'Oncologist', 'Ayurveda', 'Homeopath'];

  return (
    <div>
      <h2 className="font-semibold mb-2">Specialties</h2>
      {specialties.map((spec, i) => (
        <label key={i} className="block">
          <input
            type="checkbox"
            className="mr-2"
            checked={selected.includes(spec)}
            onChange={() => onToggle(spec)}
          />
          {spec}
        </label>
      ))}
    </div>
  );
};

export default SpecialityFilter;
