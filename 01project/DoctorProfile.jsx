// DoctorProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';

const DoctorProfile = () => {
  const { doctorId } = useParams(); // Extract doctorId from URL parameters

  const doctors = [
    {
      id: 1,
      name: 'Dr. John Doe',
      specialty: 'Cardiology',
      location: 'Main Campus',
      bio: 'Dr. John Doe is a cardiologist with over 10 years of experience.',
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialty: 'Pediatrics',
      location: 'Satellite Clinic',
      bio: 'Dr. Jane Smith is a pediatrician with over 5 years of experience.',
    },
    {
      id: 3,
      name: 'Dr. Michael Johnson',
      specialty: 'Orthopedics',
      location: 'Main Campus',
      bio: 'Dr. Michael Johnson is an orthopedic surgeon with over 10 years of experience.',
    },
    {
      id: 4,
      name: 'Dr. Sarah Lee',
      specialty: 'Emergency',
      location: 'Main Campus',
      bio: 'Dr. Sarah Lee is an emergency medicine specialist with over 5 years of experience.',
    },
  ];

  const doctor = doctors.find((doctor) => doctor.id === parseInt(doctorId));

  if (!doctor) {
    return <div>Doctor Not Found</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-8">
      <h2 className="text-xl font-bold mb-4">{doctor.name}</h2>
      <p>Specialty: {doctor.specialty}</p>
      <p>Location: {doctor.location}</p>
      <p>Bio: {doctor.bio}</p>
    </div>
  );
};

export default DoctorProfile;
