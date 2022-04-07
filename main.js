document.getElementById('showcakes').addEventListener('click', showCakes);
document.getElementById('hidecakes').addEventListener('click', hideCakes);
document.getElementById('showcontact').addEventListener('click', showcontact);
document.getElementById('hidecontact').addEventListener('click', hidecontact);



function showcontact() {
    document.getElementById('showcontact').style.display = "none"; 
    document.getElementById('outputContact').style.display = "block"; 
    document.getElementById('hidecontact').style.display = "block"; 
}
function hidecontact() {
    document.getElementById('outputContact').style.display = "none";    
    document.getElementById('hidecontact').style.display = "none"; 
    document.getElementById('showcontact').style.display = "block";
}


function showCakes(){
    fetch('cake.json')
    .then((res) => res.json())
    .then((data) => {
     var output= '';
     data.cakes.forEach(function (cake){
         output += 
         `<div class="cakeCard">
            <ul id="card-container">
                <li><div class="card-img"><img src="${cake.image}" alt=""></div></li>
                <li id="shiftli"><h3>${cake.id}. <span>${cake.title}</span></h3></li>
                <li id="shiftli"><h4><span> Discription : </span></h4></li>
                <li id="shiftli"><h4>${cake.previewDescription}</h4></li>
            </ul>
         </div> `;
         
     });
     document.getElementById('output').innerHTML = output; 

    })
    document.getElementById('showcakes').style.display = "none";   
    document.getElementById('hidecakes').style.display = "block"; 
}



function hideCakes() {
    window.location.reload();
}
         
         


//Search Cake recept
var searchcake = '';
var form = document.getElementById('form');
var search = document.getElementById('search');
form.addEventListener('submit', (e) => {
  e.preventDefault({
    once: true
  });
  searchcake = search.value.replace(/\s+/g, ' ').trim();
  showrecept()
})

function showrecept(){
    fetch('cake.json')
    .then((res) => res.json())
    .then((data) => {
     var output= '';
     data.cakes.forEach(function (cake){
        if (`${cake.id}` === searchcake)
         output = 
         `<div class="cakeCardRecept">
            <div class="card-img-recept">
                <img src="${cake.image}" alt="">  
            </div>
            <ul id="card-container-recept">
                <li id="shiftli"><h3>${cake.id}. <span>${cake.title}</span></h3></li>
                <li id="shiftli"><h4><span> Recept : </span>${cake.detailDescription}</h4></li>
            </ul>
         </div> `;
         
     });
     document.getElementById('output').innerHTML = output; 

    })

}

function contact(){
    fetch('cake.json')
    .then((res) => res.json())
    .then((data) => {
     var output= '';
     data.staffContacts.forEach(function (contact){
         output += 
         `<div class="cakeCardContact">
            <ul id="card-containerContact">
                <li><h2>${contact.name}</h2></li>
                <li id="shiftli"><h4><span>${contact.role}</span></h4></li>
                <li>${contact.phones.home}</li>
                <li>${contact.phones.mobile}</li>
                <li id="shiftli">${contact.email}</li>
            </ul>
         </div> <hr>`;
         
     });
     document.getElementById('outputContact').innerHTML = output; 
})
}

contact();