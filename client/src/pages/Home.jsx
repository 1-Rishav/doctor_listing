// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import FilterPanel from "../components/FilterPannel/FilterPannel";
import DoctorCard from "../components/DoctorCard";
import { useSearchParams } from "react-router-dom";


const Home = () => {
    const [allDoctors, setAllDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [searchTerm, setSearchTerm] =  useState(searchParams.get("q") || "");
    const [selectedMode, setSelectedMode] = useState(searchParams.get("mode") || ""); // should be empty string, not null
    const [selectedSpecialties, setSelectedSpecialties] =useState(
        searchParams.get("specialties")?.split(",") || []
      );
    const [sortOption, setSortOption] = useState(searchParams.get("sort") || "");



  useEffect(() => {
    axios.get("https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json")
      .then((res) => {
        //console.log("Fetched doctors:", res.data); // Add this
        setAllDoctors(res.data || []);
        setFilteredDoctors(res.data || []);
      });
  }, []);

  useEffect(() => {
    let filtered = [...allDoctors];
  
    // Search
    if (searchTerm.trim()) {
      filtered = filtered.filter((doc) =>
        doc?.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    // Mode
    if (selectedMode === "video consult") {
      filtered = filtered.filter((doc) => doc.video_consult === true);
    } else if (selectedMode === "in clinic") {
      filtered = filtered.filter((doc) => doc.in_clinic === true);
    }
  
    // Specialties
    if (selectedSpecialties.length > 0) {
      filtered = filtered.filter((doc) =>
        selectedSpecialties.some((spec) =>
          doc?.specialities?.some?.((s) =>
            s.name?.toLowerCase() === spec.toLowerCase()
          )
        )
      );
    }
  
    // Sort
    if (sortOption === "fees") {
      filtered.sort((a, b) =>
        (parseInt(a?.fees?.replace(/[^\d]/g, ""), 10) || 0) -
        (parseInt(b?.fees?.replace(/[^\d]/g, ""), 10) || 0)
      );
    } else if (sortOption === "experience") {
      filtered.sort((a, b) =>
        (parseInt(b?.experience?.match(/\d+/)?.[0]) || 0) -
        (parseInt(a?.experience?.match(/\d+/)?.[0]) || 0)
      );
    }
    setFilteredDoctors(filtered);
  }, [searchTerm, selectedMode, selectedSpecialties, sortOption, allDoctors]);
  

  useEffect(() => {
    const params = {};
  
    if (searchTerm) params.q = searchTerm;
    if (selectedMode) params.mode = selectedMode;
    if (selectedSpecialties.length) params.specialties = selectedSpecialties.join(",");
    if (sortOption) params.sort = sortOption;
  
    setSearchParams(params);
  }, [searchTerm, selectedMode, selectedSpecialties, sortOption]);
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header allDoctors={allDoctors} onSearch={setSearchTerm} />
      <div className="flex p-4 gap-6">
      <FilterPanel
  selectedMode={selectedMode}
  selectedSpecialties={selectedSpecialties}
  sortOption={sortOption}
  onModeChange={(mode) => {
    setSelectedMode(mode);
  }}
  onSpecialtyChange={(spec) => {
    setSelectedSpecialties((prev) =>
      prev.includes(spec)
        ? prev.filter((s) => s !== spec)
        : [...prev, spec]
    );
  }}
  onSortChange={(sortVal) => {
    setSortOption(sortVal);
  }}
/>
        <div className="flex-1">
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
