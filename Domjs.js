document.addEventListener('DOMContentLoaded',()=>{

const list = document.querySelector('#movie-list ul');

const forms = document.forms;

document.addEventListener('click',(e)=>{
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }

})



const addforms = forms['add-movie']

addforms.addEventListener('submit',(e)=>
{   
    e.preventDefault();
    const value = addforms.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const moviename = document.createElement('span');
    const deletebtn = document.createElement('span');

    
        moviename.textContent = value;
        deletebtn.textContent = 'delete new';
    
    moviename.classList.add('name');
    deletebtn.classList.add('delete');


    list.appendChild(li);
    li.appendChild(moviename);
    li.appendChild(deletebtn);


})
})























// document.addEventListener('DOMContentLoaded',function(){

//     const list = document.querySelector('#movie-list ul');
//     const forms = document.forms;
//     document.addEventListener('click',(e)=>{
//         if(e.target.className == 'delete'){
//             const li = e.target.parentElement;
//             li.parentNode.removeChild(li)

//         }
//     });

//     //creat element

//     const addform = forms['add-movie']
    
//     addform.addEventListener('submit',function(e){
//         e.preventDefault();
//         const value = addform.querySelector('input[type="text"]').value;
//         const li = document.createElement('li');
//         const movieName = document.createElement('span');
//         const deleteBtn = document.createElement('span');
        
        
 
//         // add text content
    
//         movieName.textContent = value;
//         deleteBtn.textContent = 'delete';
    
//         //add classes

//         movieName.classList.add('name');
//         deleteBtn.classList.add('delete');

//         //append to dom

//         li.appendChild(movieName);  
//         li.appendChild(deleteBtn);
//         list.appendChild(li);
//     });
   

// });

























// document.addEventListener('DOMContentLoaded',function(){

//     const list = document.querySelector('#movie-list ul');
//     const forms= document.forms;

//     //delete movie
//     list.addEventListener('click',(e) => {
//         if(e.target.className == 'delete'){
//             const li = e.target.parentElement;
//             li.parentNode.removeChild(li);

//         }

//     });

//     //add Movie
//     const addform= forms['add-movie'];
//     addform.addEventListener('submit',function(e){
//         e.preventDefault();

//         // creating elements 
//         const value = addform.querySelector('input[type="text"]').value;
//         const li = document.createElement('li');
//         const movieName= document.createElement('span');
//         const deleteBtn= document.createElement('span');

    
    
//         // add text content
    
//         movieName.textContent = value;
//         deleteBtn.textContent = 'delete';
    
//         //add classes

//         movieName.classList.add('name');
//         deleteBtn.classList.add('delete')

//         //append to dom

//         li.appendChild(movieName);  
//         li.appendChild(deleteBtn);
//         list.appendChild(li);

//     });

// });