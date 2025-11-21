const EmployeeName = document.getElementById("EmployeeName");
const EmployeeRole = document.getElementById("select-role");
const EmployeePhoto = document.getElementById("EmployeePhoto");
const EmployeeEmail = document.getElementById("EmployeeEmail");
const EmployeePhone = document.getElementById("EmployeePhone");
const expContainer = document.getElementById("expContainer");


document.querySelector(".save-btn").addEventListener("click", addEmployee);

// addemployee
function addEmployee() {

    const name = EmployeeName.value.trim();
    const role = EmployeeRole.value;
    const photo = EmployeePhoto.value.trim() !== "" ? EmployeePhoto.value.trim() : "./assets/default-photo.jpg";
    const email = EmployeeEmail.value.trim();
    const phone = EmployeePhone.value.trim();

    if (name === "" || email === "" || phone === "" || role === "Sélectionner un rôle") {
        alert("Tous les champs sont obligatoires !");
        return;
    }

    // crate card
    const newCard = document.createElement("div");
    // newCard.classList.add("EmployeeContainer");

    newCard.innerHTML = `
            <div class="EmployeeContainer">
        <img src="${photo}" alt="photo" class="employee-photo">
        <div class="employee-info">
            <h3 class="employee-name">${name} tyest</h3>
            <p class="employee-role">${role}</p>
            </div>
        </div>
    `;
    newCard.onclick = OpenDetails

    // put the content in its right div
    document.querySelector(".Horizntl").appendChild(newCard);

    // clean form
    EmployeeName.value = "";
    EmployeeRole.value = "Sélectionner un rôle";
    EmployeePhoto.value = "";
    EmployeeEmail.value = "";
    EmployeePhone.value = "";
    expContainer.innerHTML = "";

    
    const aucun = document.querySelector(".employe");
    aucun.style.display = "none";

    // then close form
    closePopup();
    
       
   
}


// function OpenDetails(){
//   let openDet = document.querySelector(".modal");
//   openDet.style.display = "flex";
//   console.log(openDet.style.display)

// }