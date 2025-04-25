import React from "react";

const FilterPanel = ({
  selectedMode,
  selectedSpecialties,
  sortOption,
  onModeChange,
  onSpecialtyChange,
  onSortChange,
}) => {
  const modes = [
    { label: "Video Consult", value: "video consult", testId: "filter-video-consult" },
    { label: "In Clinic", value: "in clinic", testId: "filter-in-clinic" },
  ];

  const specialties = [
    "General Physician", "Dentist", "Dermatologist", "Paediatrician", "Gynaecologist", "ENT",
    "Diabetologist", "Cardiologist", "Physiotherapist", "Endocrinologist", "Orthopaedic",
    "Ophthalmologist", "Gastroenterologist", "Pulmonologist", "Psychiatrist", "Urologist",
    "Dietitian/Nutritionist", "Psychologist", "Sexologist", "Nephrologist", "Neurologist",
    "Oncologist", "Ayurveda", "Homeopath",
  ];

  return (
    

    <div className="w-full md:w-1/3 p-4">
      

      {/* Mode */}
      <h2 data-testid="filter-header-moc" className="font-bold text-lg mb-2">Consultation Mode</h2>
      <div className="mb-4 space-y-2">
        {modes.map(({ label, value, testId }) => (
          <label key={value} className="flex items-center space-x-2">
            <input
              type="radio"
              value={value}
              checked={selectedMode === value}
              onChange={(e) => onModeChange(e.target.value)}
              data-testid={testId}
            />
            <span>{label}</span>
          </label>
        ))}
      </div>

      {/* Specialty */}
      <h2 data-testid="filter-header-speciality" className="font-bold text-lg mb-2">Speciality</h2>
      <div className="mb-4 space-y-1 max-h-[300px] overflow-y-auto">
        {specialties.map((spec) => (
          <label key={spec} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={spec}
              checked={selectedSpecialties.includes(spec)}
              onChange={(e) => onSpecialtyChange(e.target.value)}
              data-testid={`filter-specialty-${spec.replace(/[/ ]/g, "-")}`}
            />
            <span>{spec}</span>
          </label>
        ))}
      </div>

      {/* Sort */}
      <h2 data-testid="filter-header-sort" className="font-bold text-lg mb-2">Sort</h2>
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="sort"
            value="fees"
            checked={sortOption === "fees"}
            onChange={(e) => onSortChange(e.target.value)}
            data-testid="sort-fees"
          />
          <span>Fees (Low to High)</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="sort"
            value="experience"
            checked={sortOption === "experience"}
            onChange={(e) => onSortChange(e.target.value)}
            data-testid="sort-experience"
          />
          <span>Experience (High to Low)</span>
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;
