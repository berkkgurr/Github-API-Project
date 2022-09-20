class UI{
    constructor(){
        this.profile=document.getElementById("profile");
        this.repos=document.getElementById("repos");
        this.lastUsers=document.getElementById("last-users");
        this.inputField=document.getElementById("githubname");
        this.cardBody=document.querySelector(".card-body");
    }
    clearInput(){
        this.inputField.value="";
    }
    addProfileToUi(object){
        this.profile.innerHTML+=`
             <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="" target = "_blank">
                         <img class="img-fluid mb-2" src="${object.avatar_url}"> </a>
                         <hr>
                         <div id="fullName"><strong>${object.name}</strong></div>
                         <hr>
                         <div id="bio">${object.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  Takipçi  <span class="badge badge-light">${object.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Takip Edilen  <span class="badge badge-light">${object.following}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repolar  <span class="badge badge-light">${object.public_repos+object.public_gists}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${object.company}</span>                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location">${object.location}</a>                           
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="company">${object.email}</span>                          
                                </li>                     
                            </div>                
                      </div>
                </div>
        `;
    }
    addReposToUi(object){
        this.repos.innerHTML="";
        object.forEach(element => {
            this.repos.innerHTML+=`<div class="mb-2 card-body">
            <div class="row">
                <div class="col-md-2">
                <span></span> 
                <a href="${element.html_url}" target = "_blank" id = "repoName">${element.name}</a>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-secondary">
                        Starlar  <span class="badge badge-light" id="repoStar">${element.stargazers_count}</span>
                    </button>
                    <button class="btn btn-info">
                        Forklar  <span class="badge badge-light" id ="repoFork">${element.forks}</span>
                    </button>     
                </div>
        </div>
        </div>`;
        });
    }
    clearToUi(){
        this.lastUsers.innerHTML="";
    }
    showMessages(message){
        const div=document.createElement("div");
        div.className="alert alert-danger";
        div.textContent=message;
        this.cardBody.appendChild(div);
        setTimeout(() => {
            div.remove();
        }, 2000);
    }
    addSearchedUserToUi(username){
        let users=Storage.getSearchedUsersFromStorage();
        if(users.indexOf(username)===-1){
            const li=document.createElement("li");
            li.className="list-group-item";
            li.textContent=username;
            this.lastUsers.appendChild(li);
        }
    }

}