function Render(id : string, html : string) {

    //Note : diffrence between Render and Insert is Render can be used many times and will add new things to that element 
    //but Insert can only used 1 time and the content of element will be deleted if You use it more than 1 time .

    let selection = document.getElementById(`${id}`)
    selection.innerHTML += html
}
function Insert(id : string, html: string) {
    /*
     Note : diffrence between Render and Insert is Render can be used many times and will add new things to that element 
     but Insert can only used 1 time and the content of element will be deleted if You use it more than 1 time .
    */
     let selection = document.getElementById(`${id}`)
     selection.innerHTML = html
    
}
const IdManager = {
  edit: (oldid:string, newid:string) => {
    // edits a html element id
    let select = document.getElementById(`${oldid}`);
    select.id = newid;
  },
  delete: (oldid:string) => {
    // deletes a html elements id
    let select = document.getElementById(`${oldid}`);
    select.id = "";
  },
  switch: (id1:string, id2:string) => {
    // switch two different id
    let id1select = document.getElementById(id1);
    let id2select = document.getElementById(id2);
    id1select.id = `${id2}`
    id2select.id = `${id1}`

  }
};

function IDselector(id:string) {
    return document.getElementById(id)
}

