function Insert(id , html) {
    /*
     Note : diffrence between Render and Insert is Render can be used many times and will add new things to that element 
     but Insert can only used 1 time and the content of element will be deleted if You use it more than 1 time .
    */
     let selection = document.getElementById(`${id}`)
     selection.innerHTML = html
    
}