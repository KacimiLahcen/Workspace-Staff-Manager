function openPopup(){
  let open = document.getElementById("overlay");
  open.style.display = "flex";
}

function closePopup(){
  let close = document.getElementById("overlay");
  close.style.display = "none";
}



let expCount = 1;

function addExperience(){
  const box = document.createElement("div");
  box.className = "exp-box";
  box.innerHTML = `
    <span class="remove-exp" onclick="this.parentNode.remove()">×</span>
    <strong>Expérience ${expCount++}</strong><br>
    <input class="exp-title" placeholder="Entreprise">
    <input class="exp-sub" placeholder="Poste">
    <input class="exp-year" placeholder="Durée : (exemple: 2022-2024)">
  `;
  document.getElementById("expContainer").appendChild(box);

  
}


  function ResetExpCount () {
    const ExpContainer = document.getElementById("expContainer");
    // ExpContainer.innerHTML= "";

    expCount = 1;
  }

  const AddemployeeBtn = document.querySelector(".save-btn");
  
  AddemployeeBtn.addEventListener("click", ResetExpCount);