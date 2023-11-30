const timeSlider = document.getElementById("timeSlider");
const selectedTime = document.getElementById("selectedTime");

timeSlider.addEventListener("input", function() {
  const value = this.value;
  const time = calculateTime(value);
  selectedTime.textContent = time;
});

const Years = [
    '2017', 
    '2018', 
    '2019', 
    '2020', 
    '2021'
    ];
     
function calculateTime(value) {
  // Assuming 100 represents the maximum time range
  const totalYears = 5; // For example, 24 hours in a day

  // Calculate time based on the percentage value of the slider
  const selectedHour = Math.round((value / 100) * totalHours);
  
  // Format the time (you can adjust this based on your requirements)
  const formattedTime = `${selectedHour}:00`; // Simple format: "hour:00"
  return formattedTime;
}

// Initialize the selected time based on default value
const initialValue = timeSlider.value;
selectedTime.textContent = calculateTime(initialValue);
