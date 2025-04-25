import React from "react";
import { MapPin, Building2 } from "lucide-react"; // for location & clinic icons

const DoctorCard = ({ doctor }) => {
  const specialities = doctor.specialities?.map((s) => s.name).join(", ") || "N/A";
  const experience = doctor.experience || "N/A";
  const fee = doctor.fees || "₹ N/A";
  const clinicName = doctor.clinic?.name || "Clinic Name";
  const clinicAddress = doctor.clinic?.address?.locality || "Location";
  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center"
      data-testid="doctor-card"
    >
      {/* Left: Photo and Details */}
      <div className="flex items-start gap-4">
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h2
            className="text-lg font-semibold"
            data-testid="doctor-name"
          >
            {doctor.name}
          </h2>
          <p className="text-sm text-gray-700">
            {specialities}
          </p>
          <p className="text-sm text-gray-600">{experience}</p>

          <div className="mt-2 text-sm text-gray-600 space-y-1">
            <div className="flex items-center gap-1">
              <Building2 className="w-4 h-4" />
              <span className="truncate">{clinicName}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span className="truncate">{clinicAddress}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Fee and Button */}
      <div className="text-right">
        <p className="text-lg font-medium text-gray-800">{fee}</p>
        <button
          className="mt-2 px-4 py-1 border border-blue-500 text-blue-600 rounded hover:bg-blue-50"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
