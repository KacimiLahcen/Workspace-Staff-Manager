function OpenDetails(employee){
  let openDet = document.querySelector(".modal");
  openDet.style.display = "flex";

  openDet.innerHTML = ""; 
  
  EmployeeDetails(employee)   //employee

    
                        // <p class="unassigned">${employee.role === "Non Assigné" ? "📌 Non assigné" : ""}</p>
  
}
function EmployeeDetails(employee){ //employee
  const box = document.createElement("div");
  box.className = "card";
  box.innerHTML = `
    

                <div class="header">
                    <h2>Profil de l'employé</h2>
                    <span class="close" onclick="CloseDetails()">×</span>
                </div>

                <div class="top-section">
                    <div>
                        <img class="avatar" src="${employee.photo}" alt="">
                    </div>
                    <div class="info">
                        <h3>${employee.name}</h3>
                        <p class="role">${employee.role}</p>
                        <p class="unassigned">${employee.zone === null ? "📌 Non assigné" : "📌" + employee.zone}</p>
                    </div>
                </div>

                <hr>

                <div class="contact">
                    <h4>Informations de contact</h4>
                    <p>@ : ${employee.email}</p>
                    <p>📞 : ${employee.phone}</p>
                </div>

                <div class="experience">
                    <h4>Expériences professionnelles</h4>

                    ${employee.experiences.length > 0 
                    ? employee.experiences.map(exp => `

                    <div class="exp-box">
                        <div>
                            <p class="exp-title">${exp.title}</p>
                            <p class="exp-sub">${exp.sub}</p>
                        </div>
                        <span class="exp-year">${exp.year}</span>
                    </div>
                    
                </div>
                 `).join("")
            : `<p>Aucune expérience disponible.</p>`
        }
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