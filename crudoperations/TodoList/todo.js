const UserInput = document.getElementById("input");
const AddBtn = document.getElementById("addTask");
const Show = document.getElementById("result");
AddBtn.addEventListener("click", addTask);

let p;


function addTask(){


    p=`  <ul> <li>   ${UserInput.value} </li> </ul> `;
    Show.innerHTML+=p;
    UserInput.value=' git'
  



}




// }
