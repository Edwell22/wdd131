  // Get the current date
 // const currentDate = new Date();

  // Format the date
  //const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  //const fullDate = currentDate.toLocaleDateString('en-US', options);

  // Display the full date
  //document.getElementById('full-date').innerText = fullDate;

  const currentyear = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified");
const today = new Date();
currentyear.innerHTML = `© ${today.getFullYear()} Edwell Kakunguwo, Zimbabwe`;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

 