var modal = document.querySelector('.modal-1');

document.querySelector('.card1').addEventListener('click', function () {
  modal.style.display = "block";
});

document.querySelector('.btn-close').addEventListener('click', function () {
  modal.style.display = "none";
});

// second modal

var modal2=document.querySelector('.modal-2');

document.querySelector('.card2').addEventListener('click',function(){
  modal2.style.display="block";
})

document.querySelector('.btn-close-2').addEventListener('click',function(){
  modal2.style.display="none";
})


// third modal

var modal3=document.querySelector('.modal-3');

document.querySelector('.card3').addEventListener('click',function(){
  modal3.style.display="block";
})

document.querySelector('.btn-close-3').addEventListener('click',function(){
  modal3.style.display="none";
})

// fourth modal

var modal4=document.querySelector('.modal-4');

document.querySelector('.card4').addEventListener('click',function(){
  modal4.style.display="block";
})

document.querySelector('.btn-close-4').addEventListener('click',function(){
  modal4.style.display="none";
})

// fifth modal

var modal5=document.querySelector('.modal-5');

document.querySelector('.card5').addEventListener('click',function(){
  modal5.style.display="block";
})

document.querySelector('.btn-close-5').addEventListener('click',function(){
  modal5.style.display="none";
})

// sixth modal

var modal6=document.querySelector('.modal-6');

document.querySelector('.card6').addEventListener('click',function(){
  modal6.style.display="block";
})

document.querySelector('.btn-close-6').addEventListener('click',function(){
  modal6.style.display="none";
})

// seventh modal

var modal7=document.querySelector('.modal-7');

document.querySelector('.card7').addEventListener('click',function(){
  modal7.style.display="block";
})

document.querySelector('.btn-close-7').addEventListener('click',function(){
  modal7.style.display="none";
})

// eighth modal

var modal8=document.querySelector('.modal-8');

document.querySelector('.card8').addEventListener('click',function(){
  modal8.style.display="block";
})

document.querySelector('.btn-close-8').addEventListener('click',function(){
  modal8.style.display="none";
})



// Fetch the data from the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Populate Modal 1
    var modal1Title = document.querySelector('.modal-1 .modal-title');
    var modal1Body = document.querySelector('.modal-1 .modal-body');
    modal1Title.textContent = data.modal1.title;
    modal1Body.textContent = data.modal1.body;
    
    // Populate Modal 2
    var modal2Title = document.querySelector('.modal-2 .modal-title');
    var modal2Body = document.querySelector('.modal-2 .modal-body');
    modal2Title.textContent = data.modal2.title;
    modal2Body.textContent = data.modal2.body;
    
    // Populate Modal 3
    var modal3Title = document.querySelector('.modal-3 .modal-title');
    var modal3Body = document.querySelector('.modal-3 .modal-body');
    modal3Title.textContent = data.modal3.title;
    modal3Body.textContent = data.modal3.body;

    // Populate Modal 4
    var modal4Title = document.querySelector('.modal-4 .modal-title');
    var modal4Body = document.querySelector('.modal-4 .modal-body');
    modal4Title.textContent = data.modal4.title;
    modal4Body.textContent = data.modal4.body;
    
    // Populate Modal 5
    var modal5Title = document.querySelector('.modal-5 .modal-title');
    var modal5Body = document.querySelector('.modal-5 .modal-body');
    modal5Title.textContent = data.modal5.title;
    modal5Body.textContent = data.modal5.body;
    
    // Populate Modal 6
    var modal6Title = document.querySelector('.modal-6 .modal-title');
    var modal6Body = document.querySelector('.modal-6 .modal-body');
    modal6Title.textContent = data.modal6.title;
    modal6Body.textContent = data.modal6.body;

    // Populate Modal 7
    var modal7Title = document.querySelector('.modal-7 .modal-title');
    var modal7Body = document.querySelector('.modal-7 .modal-body');
    modal7Title.textContent = data.modal7.title;
    modal7Body.textContent = data.modal7.body;
    
    // Populate Modal 8
    var modal8Title = document.querySelector('.modal-8 .modal-title');
    var modal8Body = document.querySelector('.modal-8 .modal-body');
    modal8Title.textContent = data.modal8.title;
    modal8Body.textContent = data.modal8.body;
    
    
  })
  .catch(error => console.log(error));

