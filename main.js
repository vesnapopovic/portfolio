var meni=document.getElementById('iMeni');
var navigacija=document.getElementById('nav');
console.log(navigacija);
console.log(navigacija.style.display);

function obrniMeni(){

    navigacija.style.display =  (navigacija.style.display=='none') ? 'block' : 'none';
   // (navigacija.style.display='block') ?navigacija.style.display='none' : navigacija.style.display='block';
    

//if(navigacija.style.display=='none'){
  //  navigacija.style.display=='block';
//}else{
  //  navigacija.style.display=='none';
//}
   
//drugi nacin preko classList
    //navigacija.classList.toggle("hide");
}
meni.addEventListener('click',obrniMeni);
