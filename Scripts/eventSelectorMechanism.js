const events = {
    event1: {
        heading: "Event 1",
        img1: "image1.jpg",
        img2: "image2.jpg",
        img3: "image3.jpg",
        para1heading: "Paragraph 1 Heading",
        para1details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        para2heading: "Paragraph 2 Heading",
        para2details: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        para3heading: "Paragraph 3 Heading",
        para3details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        para4heading: "Paragraph 4 Heading",
        para4details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    event2: {
        heading: "Event 2",
        img1: "image4.jpg",
        img2: "image5.jpg",
        img3: "image6.jpg",
        para1heading: "Paragraph 1 Heading",
        para1details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        para2heading: "Paragraph 2 Heading",
        para2details: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        para3heading: "Paragraph 3 Heading",
        para3details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        para4heading: "Paragraph 4 Heading",
        para4details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
};
// Function to populate event details based on selected event
function populateEventDetails(selectedEvent) {
    const event = events[selectedEvent];
    const eventHeading = document.getElementById('eventHeading');
    const imageSlider = document.getElementById('imageSlider');
    const eventDetails = document.getElementById('eventDetails');

    eventHeading.textContent = event.heading;

    // Populate image slider
    imageSlider.innerHTML = `
        <img src="${event.img1}" alt="Image 1">
        <img src="${event.img2}" alt="Image 2">
        <img src="${event.img3}" alt="Image 3">
    `;

    // Populate event details
    eventDetails.innerHTML = `
        <div>
            <h2>${event.para1heading}</h2>
            <p>${event.para1details}</p>
        </div>
        <div>
            <h2>${event.para2heading}</h2>
            <p>${event.para2details}</p>
        </div>
        <div>
            <h2>${event.para3heading}</h2>
            <p>${event.para3details}</p>
        </div>
        <div>
            <h2>${event.para4heading}</h2>
            <p>${event.para4details}</p>
        </div>
    `;
}

// Get reference to the event selector combo box
const eventSelector = document.getElementById('eventSelector');

// Add event listener to the combo box
eventSelector.addEventListener('change', function() {
    // Get the selected event
    const selectedEvent = eventSelector.value;
    // Populate event details based on the selected event
    populateEventDetails(selectedEvent);
});

// Populate event details for the default event (event1)
populateEventDetails('event1');
