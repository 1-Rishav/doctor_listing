import React from 'react';

const ConsultationFilter = ({ selected, onChange }) => {
  const modes = ['Video Consultation', 'In-clinic Consultation', 'All'];

  return (
    <div className="mt-4">
      <h2 className="font-semibold mb-2">Consultation Type</h2>
      {modes.map((mode, i) => (
        <label key={i} className="block">
          <input
            type="radio"
            name="consultation"
            className="mr-2"
            checked={selected === mode}
            onChange={() => onChange(mode)}
          />
          {mode}
        </label>
      ))}
    </div>
  );
};

export default ConsultationFilter;
