// Team member objects with department information
const teamMembers = [
    {
        name: "Aditya Patharwat",
        position: "President",
        department: "Management Role",
        imgUrl: "",
        yearOfStudy: "Diploma TY"
    },
    {
        name: "Rohit Iyer",
        position: "Associate President",
        department: "Management Role",
        imgUrl: "",
        yearOfStudy: "B.Tech FY"
    },
    {
        name: "Jay Pol",
        position: "Vice President",
        department: "Management Role",
        imgUrl: "",
        yearOfStudy: "Diploma SY"
    },
    {
        name: "Neha Patil",
        position: "Secretary",
        department: "Management Role",
        imgUrl: "",
        yearOfStudy: "Diploma SY"
    },
    {
        name: "Mihir Ghanvatkar",
        position: "Treasurer",
        department: "Management Role",
        imgUrl: "",
        yearOfStudy: "Diploma SY"
    },
    {
        name: "Kunal Khude",
        position: "Event Coordinator (Boys)",
        department: "Management Role",
        imgUrl: "",
        yearOfStudy: "Diploma SY"
    },
    {
        name: "Manasi Gavali",
        position: "Event Coordinator (Girls)",
        department: "Management Role",
        imgUrl: "",
        yearOfStudy: "Diploma SY"
    },
    {
        name: "Atharav Tambekar",
        position: "Technical Lead",
        department: "Technical Team",
        imgUrl: "",
        yearOfStudy: "Diploma TY"
    },
    {
        name: "Rushikesh Potdar",
        position: "Associate Technical Lead",
        department: "Technical Team",
        imgUrl: "",
        yearOfStudy: "Diploma SY"
    },
    {
        name: "Nikita Patil",
        position: "Assistant Technical Lead",
        department: "Technical Team",
        imgUrl: "",
        yearOfStudy: "Diploma SY"
    },
    {
        name: "Radhika Pacherwal",
        position: "Public Relations (PR) Officer",
        department: "Public Relation(PR)",
        imgUrl: "",
        yearOfStudy: "Diploma SY"
    },
    {
        name: "Arjun Rajput",
        position: "Public Relations (PR) Officer",
        department: "Public Relation(PR)",
        imgUrl: "",
        yearOfStudy: "Diploma TY"
    },
    {
        name: "Manali Patil",
        position: "Membership Coordinator",
        department: "Management Role",
        imgUrl: "",
        yearOfStudy: "Diploma FY"
    },
    {
        name: "Sarvesh Salunkhe",
        position: "Community Outreach Coordinator",
        department: "Community Outreach Coordinators, Alumni Relations Officer",
        imgUrl: "",
        yearOfStudy: "Diploma TY"
    },
    {
        name: "Yashshvi Athavale",
        position: "Community Outreach Coordinator",
        department: "Community Outreach Coordinators, Alumni Relations Officer",
        imgUrl: "",
        yearOfStudy: "Diploma SY"
    },
    {
        name: "Shivani Mali",
        position: "Community Outreach Coordinator",
        department: "Community Outreach Coordinators, Alumni Relations Officer",
        imgUrl: "",
        yearOfStudy: "B.Tech FY"
    },
    {
        name: "Aditya Kalagi",
        position: "Media Team",
        department: "Media Team",
        imgUrl: "",
        yearOfStudy: "Diploma TY"
    },
    {
        name: "Miti Parmar",
        position: "Media Team",
        department: "Media Team",
        imgUrl: "",
        yearOfStudy: "Diploma SY"
    },
    {
        name: "Sharayu Arankar",
        position: "Media Team",
        department: "Media Team",
        imgUrl: "",
        yearOfStudy: "B.Tech FY"
    },
    {
        name: "Harsh Aghera",
        position: "Design and Video",
        department: "Media Team",
        imgUrl: "",
        yearOfStudy: "Diploma SY"
    },
    {
        name: "Krrish Galicha",
        position: "Fund Collection Group",
        department: "Management Role",
        imgUrl: "",
        yearOfStudy: "Diploma FY"
    },
    {
        name: "Neel Gholkar",
        position: "Monitoring Body",
        department: "Monitoring Body",
        imgUrl: "",
        yearOfStudy: "Diploma TY"
    },
    {
        name: "Atharv Mali",
        position: "Monitoring Body",
        department: "Monitoring Body",
        imgUrl: "",
        yearOfStudy: "Diploma TY"
    },
    {
        name: "Tiwari Sir",
        position: "Monitoring Body",
        department: "Monitoring Body",
        imgUrl: "",
        yearOfStudy: "Faculty"
    },
];


// Function to generate HTML markup for team members in each department
function generateTeamDepartments() {
    const teamContainer = document.getElementById('teamContainer');

    // Get unique department names
    const departments = [...new Set(teamMembers.map(member => member.department))];

    // Clear existing content
    teamContainer.innerHTML = '';

    // Loop through departments
    departments.forEach(department => {
        // Filter team members by department
        const departmentMembers = teamMembers.filter(member => member.department === department);

        // If there are no members in this department, skip
        if (departmentMembers.length === 0) return;

        // Generate HTML markup for department heading
        const departmentHeadingHTML = `
            <h2 class="department-heading">${department}</h2>
            <div class="department-members">
                <!-- Team member cards will be dynamically generated here -->
            </div>
        `;
        teamContainer.insertAdjacentHTML('beforeend', departmentHeadingHTML);

        // Generate HTML markup for each team member in the department
        const departmentMembersContainer = teamContainer.querySelector('.department-members:last-child');
        departmentMembers.forEach(member => {
            const cardHTML = `
                <div class="team-card">
                    <img src="${member.imageUrl}" alt="${member.name}" class="team-img">
                    <div class="team-info">
                        <h2 class="team-name">${member.name}</h2>
                        <p class="team-position">${member.position}</p>
                        <p class="team-description">${member.yearOfStudy}</p>
                    </div>
                </div>
            `;
            departmentMembersContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    });
}

// Generate team member departments on page load
generateTeamDepartments();
