function OpenDetails(){
  let openDet = document.querySelector(".modal");
  openDet.style.display = "flex";

  openDet.innerHTML = "";
  
  EmployeeDetails()
  
}
function EmployeeDetails(){
  const box = document.createElement("div");
  box.className = "card";
  box.innerHTML = `
    

                <div class="header">
                    <h2>Profil de l'employé</h2>
                    <span class="close" onclick="CloseDetails()">×</span>
                </div>

                <div class="top-section">
                    <div>
                        <img class="avatar" src="" alt="">
                    </div>
                    <div class="info">
                        <h3>xx</h3>
                        <p class="role">xx</p>
                        <p class="unassigned">📌 Non assigné</p>
                    </div>
                </div>

                <hr>

                <div class="contact">
                    <h4>Informations de contact</h4>
                    <p>@ : kacimi.lahcen88@gmail.com</p>
                    <p>📞 : +212614153906</p>
                </div>

                <div class="experience">
                    <h4>Expériences professionnelles</h4>

                    <div class="exp-box">
                        <div>
                            <p class="exp-title">etudiant</p>
                            <p class="exp-sub">dms</p>
                        </div>
                        <span class="year">2023-2024</span>
                    </div>
                </div>

                <button class="End-details" onclick="CloseDetails()">Fermer</button>


  
  `;
  document.querySelector(".modal").appendChild(box);

//   OpenDetails();

}



// CloseDetails();


function CloseDetails(){
  let close = document.querySelector(".modal");
  close.style.display = "none";
}