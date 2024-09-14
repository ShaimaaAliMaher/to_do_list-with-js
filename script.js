let input = document.getElementById('text');
let Add_btn = document.getElementById('add');
let tasks = document.getElementById('tasks');
let del_All = document.querySelector('.btn')

// // ///add //////////
Add_btn.addEventListener('click', function () {
    if (input.value === "") {
        alert("there is no task")
    }
    else {
        tasks.innerHTML +=`
        <div id="parent" class="task">
                <p id="title" onclick="done()">${input.value}</p>
                <div class="actions">
                    <button class="delete"><i class="far fa-trash-alt" onclick="removeTask()"></i></button>
                    <button class="edit"><i class="fa-regular fa-pen-to-square" onclick="editTask()"></i></button>
                </div>
               </div>
        `
        saveData()
     }
        input.value="";
        
})
// /////  done //////
tasks.addEventListener("click", function (e) {
    if (e.target.tagName === 'P') {
        e.target.classList.toggle('cheked');  
        saveData() 
    }
}, false)
// ////////////// edit ////////
 function editTask(){
   let z= document.getElementById('title')
    input.value= z.innerText
    let parent = document.getElementById('parent')
    parent.remove()
    saveData()
 }
//  ////////// delete ///////
function removeTask(){
    let z = document.getElementById('title')
    let x =  z.innerText
    let isconfirmed = confirm("are you sure you want to delete => "+ x )
    if (isconfirmed){
    let parent = document.getElementById('parent')
    parent.remove()
    saveData()}
}

// //////////////saveData
function saveData(){
  localStorage.setItem("data", tasks.innerHTML)
}
function showdata(){
  tasks.innerHTML= localStorage.getItem('data')
}
showdata()
// ///// deletAll

