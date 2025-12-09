//Getting elements
const myForm = document.getElementById('myForm');
const studentsTable = document.getElementById('studentsTable');

// console.log(myForm.nextElementSibling
// )
//Adding students to a table
myForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    //Getting form inputs
    const studentName = getElementById("studentName");
    const mathematicsScore = getElementById("mathematicsScore");
    const englishScore = getElementById("englishScore");
    const physicsScore = getElementById("physicsScore");
    const errorMsg = document.createElement("p");

    errorMsg.style.color = "red";
    errorMsg.style.fontSize = "15px";
    myForm.appendChild(errorMsg);

    //Validating input value
    if(studentName.value.trim() === "" || studentName.value.length < 3){
        errorMsg.textContent = "Please enter a valid name with a least 3 characters ";
        studentName.focus();
        return
    } else if (mathematicsScore.value > 100 || 
        englishScore > 100 || 
        physicsScore > 100 || 
        mathematicsScore < 0 || 
        englishScore < 0 ||
        physicsScore < 0){
       errorMsg.textContent = "Scores must be between 0 and 100.";
       return
    }

    //Creating a new row

    studentsTable.style.display = "block";
    const tableRow = document.createElement("tr")
    tableRow.innerHTML = `
    <tr>
        <td>${studentName.value}</td>
        <td>${mathematicsScore.value}</td>
        <td>${englishScore.value}</td>
        <td>${physicsScore.value}</td>
    </tr> `

    studentsTable.appendChild(tableRow);
    

    myForm.reset();
    errorMsg.textContent = "";

});


