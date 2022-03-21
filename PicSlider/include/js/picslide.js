const picss= document.querySelectorAll('.pics');

picss.forEach(pics =>{
    pics.addEventListener('click',() =>{
        remove();
        pics.classList.toggle('activ');
    })
})


function remove(){
    picss.forEach(pics =>
    pics.classList.remove('activ'))

}

// picss.forEach(pics =>{
//     pics.addEventListener('click',()=>{
//         pics.classList.toggle('activ');
//     })
//
// })




