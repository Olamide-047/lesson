// Getting elements
const myForm = document.getElementById('myForm');
const studentsTable = document.getElementById("studentsTable");
const add = document.getElementById("add");


// Adding students to a table
myForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    // Getting form inputs
    const studentName = document.getElementById("studentName");
    const mathematicsScore = document.getElementById("mathematicsScore");
    const englishScore = document.getElementById("englishScore");
    const physicsScore = document.getElementById("physicsScore");

    const errorMsg = document.createElement("p");

    errorMsg.style.color = "red";
    errorMsg.style.fontSize = "14px";
    myForm.appendChild(errorMsg);

    // Validating inputs value
    if (studentName.value.trim() === "" || studentName.value.length < 3) {
      errorMsg.textContent =
        "Please enter a valid name with at least 3 characters.";
      studentName.focus();
      return;
    } else if (
      mathematicsScore.value < 0 ||
      englishScore.value < 0 ||
      physicsScore.value < 0 ||
      mathematicsScore.value > 100 ||
      englishScore.value > 100 ||
      physicsScore.value > 100
    ) {
      errorMsg.textContent = "Scores must be between 0 and 100.";
      return;
    }

    // Creating a new row
    studentsTable.style.display = "block";
    
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
    <tr>
        <td>${studentName.value}</td>
        <td>${mathematicsScore.value}</td>
        <td>${englishScore.value}</td>
        <td>${physicsScore.value}</td>  
    </tr>
    `

    studentsTable.appendChild(tableRow);

    // Resetting form and error message
    myForm.reset();
    errorMsg.textContent = "";

});
