document.getElementById("countrySelect").addEventListener("change", calculateTimeDifference);

function calculateTimeDifference() {
    const countrySelect = document.getElementById("countrySelect"); 
    const offset = parseInt(countrySelect.value); // Declaring the offset variable here - the value comes from the dropdown, parseInt turns it into an integer from the string
    const timeDifferenceDisplay = document.getElementById("timeDifference"); // Getting the display element

    let timeDifferenceText = "The time difference from UTC is UTC ";
    if (offset >= 0) {
        timeDifferenceText += '+'; // if greater or equal to 0 then add plus sign before UTC time
    }
    timeDifferenceText += `${offset}:00.`;
    timeDifferenceDisplay.textContent = timeDifferenceText;

}

