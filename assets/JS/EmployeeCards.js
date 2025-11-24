const EmployeeName = document.getElementById("EmployeeName");
const EmployeeRole = document.getElementById("select-role");
const EmployeePhoto = document.getElementById("EmployeePhoto");
const EmployeeEmail = document.getElementById("EmployeeEmail");
const EmployeePhone = document.getElementById("EmployeePhone");
const expContainer = document.getElementById("expContainer");

                let allWorkers = [];   //for the rooms manaagement

document.querySelector(".save-btn").addEventListener("click", addEmployee);

// addemployee
function addEmployee() {

    const name = EmployeeName.value.trim();
    const role = EmployeeRole.value;
    const photo = EmployeePhoto.value.trim() !== "" ? EmployeePhoto.value.trim() : "./assets/default-photo.jpg";
    const email = EmployeeEmail.value.trim();
    const phone = EmployeePhone.value.trim();

    // if (name === "" || email === "" || phone === "" || role === "Sélectionner un rôle") {
    //     alert("Tous les champs sont obligatoires !");
    //     return;
    // }







const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const emailRegex = /^[^\s@]+@[^\s@]+\.youcode+$/;
const phoneRegex = /^06[0-9]{8,}$/;

if (!nameRegex.test(name)) {
    alert("Le nom doit inclure seulement des lettres !");
    return;
}

if (!emailRegex.test(email)) {
    alert("Email invalide !");
    return;
}

if (!phoneRegex.test(phone)) {
    alert("Le numéro doit débuter par 06 et contenir au moins 10 chiffres !");
    return;
}

 if ( role === "Sélectionner un rôle") {
        alert("Sélectionner un rôle !");
        return;
    }











     const experiences = [];

    document.querySelectorAll('#expContainer .exp-box').forEach(exp => {
        const title = exp.querySelector('.exp-title').value.trim();
        const sub = exp.querySelector('.exp-sub').value.trim();
        const year = exp.querySelector('.exp-year').value.trim();

        if (title && sub && year) {
            experiences.push({ title, sub, year });
        }
    });




    

    // crate card
    const newCard = document.createElement("div");
    // newCard.classList.add("EmployeeContainer");

    newCard.innerHTML = `
            <div class="EmployeeContainer">
        <img src="${photo}" alt="photo" class="employee-photo">
        <div class="employee-info">
            <h3 class="employee-name">${name}</h3>
            <p class="employee-role">${role}</p>
            </div>
        </div>
    `;
    // newCard.onclick = OpenDetails


//     newCard.onclick = () => OpenDetails(worker); {
//     OpenDetails({
//         name,
//         role,
//         photo,
//         email,
//         phone,
//         experiences
//     });
// };

newCard.addEventListener("click", () => {
    OpenDetails(worker);
});



        // collect worker
const worker = {
    id: Date.now(),
    name,
    role,
    photo,
    email,
    phone,
    experiences,
    zone: null
};

// store in memory
allWorkers.push(worker);







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