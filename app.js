const githubForm=document.getElementById("github-form");
const nameInput=document.getElementById("githubname");
const clearlastusers=document.getElementById("clear-last-users");
const lastUsers=document.getElementById("last-users");
const github=new Github();
const ui= new UI();

eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit",getData);
    clearlastusers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}
function getData(e) {
    let username=nameInput.value.trim();
    if (username==="") {
        ui.showMessages("Kullanıcı Adı Girmediniz.");
    } else {
        github.getGithubData(username)
        .then(response=>{
            if(response.user.message==="Not Found"){
                alert("Kullanıcı Bulunamadı.")
            }
            else{
            ui.addSearchedUserToUi(username);
            Storage.addSearchedUserToStorage(username);
            ui.addProfileToUi(response.user);
            ui.addReposToUi(response.repo);
            }
        })
        .catch(err=>console.log(err));
    }
    ui.clearInput();
    e.preventDefault();
}
function clearAllSearched() {
    if(confirm("Emin misiniz?")){
        ui.clearToUi();
        Storage.clearAllSearchedUsersFromStorage();
    }
}
function getAllSearched() {
    let users=Storage.getSearchedUsersFromStorage();
    let result="";
    users.forEach(element => {
        result+=`<li class="list-group-item">${element}</li>`;
    });
    lastUsers.innerHTML=result;
}