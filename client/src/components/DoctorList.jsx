import React from 'react';
import DoctorCard from './DoctorCard';

const DoctorList = ({ doctors }) => {
  return (
    <div>
      {doctors.length ? doctors.map((doc, i) => (
        <DoctorCard key={i} doctor={doc} />
      )) : <p className="text-gray-500">No doctors found.</p>}
    </div>
  );
};

export default DoctorList;
