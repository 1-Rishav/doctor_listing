import React, { useState } from 'react';
import FilterPanel from '../components/FilterPannel/FilterPannel';
import DoctorList from '../components/DoctorList';
import SearchBar from '../components/SearchBar';

const DoctorsPage = () => {
  const [query, setQuery] = useState('');
  const [specialties, setSpecialties] = useState([]);
  const [consultation, setConsultation] = useState('All');
  const [sortBy, setSortBy] = useState('');

  const allDoctors = [ /* same sampleDoctors list */ ];

  const doctorNames = allDoctors.map(doc => doc.name);

  const filteredDoctors = allDoctors
    .filter(doc => doc.name.toLowerCase().includes(query.toLowerCase()))
    .filter(doc =>
      specialties.length ? specialties.some(spec => doc.specialization.includes(spec)) : true
    )
    .filter(doc =>
      consultation === 'All'
        ? true
        : doc.consultationMode === consultation
    )
    .sort((a, b) => {
      if (sortBy === 'fees') return a.fee - b.fee;
      if (sortBy === 'experience') return b.experience - a.experience;
      return 0;
    });

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <SearchBar suggestions={doctorNames} onSearch={setQuery} />
      <div className="flex flex-col md:flex-row">
        <FilterPanel
          selectedSpecialties={specialties}
          onToggleSpecialty={(spec) =>
            setSpecialties((prev) =>
              prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec]
            )
          }
          consultationType={consultation}
          onConsultationChange={setConsultation}
          onSortChange={setSortBy}
        />
        <div className="w-full md:w-3/4 p-4">
          <DoctorList doctors={filteredDoctors} />
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
