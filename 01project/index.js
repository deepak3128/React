document.addEventListener('DOMContentLoaded', () => {
    const doctors = [
        {
            id: 1,
            name: "Dr. John Doe",
            specialty: "Cardiology",
            location: "Main Campus",
            email: "johndoe@example.com",
            phone: "(123) 456-7890",
            experience: "15 years"
        },
        {
            id: 2,
            name: "Dr. Jane Smith",
            specialty: "Pediatrics",
            location: "Satellite Clinic",
            email: "janesmith@example.com",
            phone: "(123) 456-7891",
            experience: "10 years"
        },
    ];

    function viewProfile(doctorId) {
        const doctor = doctors.find(doc => doc.id === doctorId);
        if (doctor) {
            const profileContent = `
                <div class="container mx-auto p-4">
                    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 class="text-xl font-bold mb-4">Doctor Profile</h2>
                        <div class="bg-gray-100 p-4 rounded-lg">
                            <h3 class="font-bold">${doctor.name}</h3>
                            <p>Specialty: ${doctor.specialty}</p>
                            <p>Location: ${doctor.location}</p>
                            <p>Email: ${doctor.email}</p>
                            <p>Phone: ${doctor.phone}</p>
                            <p>Experience: ${doctor.experience}</p>
                        </div>
                    </div>
                    <button class="bg-black text-white px-4 py-2 rounded" onclick="goBack()">Back to Home</button>
                </div>
            `;
            document.body.innerHTML = profileContent;
        } else {
            alert('Doctor not found');
        }
    }

    function goBack() {
        window.location.href = 'index6.html';
    }

    document.querySelectorAll('.view-profile-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const doctorId = parseInt(event.target.dataset.doctorId);
            viewProfile(doctorId);
        });
    });
});


