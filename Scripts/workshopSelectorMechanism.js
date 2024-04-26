const events = {
    event1: {
        heading: "Workshop 1",
        img1: "https://th.bing.com/th/id/OIP.UHbAF6yPon33W3A03yO47wHaFj?w=213&h=180&c=7&r=0&o=5&pid=1.7",
        img2: "https://th.bing.com/th/id/OIP.E4IJcali_762Oo_vNhhbFgHaEK?w=272&h=180&c=7&r=0&o=5&pid=1.7",
        img3: "https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=282&h=180&c=7&r=0&o=5&pid=1.7",
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
        heading: "Workshop 2",
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
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    eventHeading.textContent = event.heading;

    // Populate image slider
    let imageIndex = 1;

    function showImage(index) {
        imageSlider.style.backgroundImage = `url('${event[`img${index}`]}')`;
    }

    function slideNext() {
        imageIndex++;
        if (imageIndex > 3) {
            imageIndex = 1;
        }
        showImage(imageIndex);
    }

    function slidePrev() {
        imageIndex--;
        if (imageIndex < 1) {
            imageIndex = 3;
        }
        showImage(imageIndex);
    }

    eventHeading.textContent = event.heading;
    showImage(imageIndex);
    prevButton.addEventListener('click', slidePrev);
    nextButton.addEventListener('click', slideNext);

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
