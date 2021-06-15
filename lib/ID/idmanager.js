const IdManager = {
  edit:(oldid , newid)=>{
    // edits a html element id
    let select = document.getElementById(`${oldid}`);
    select.id = newid
  } , 
  delete : (oldid)=>{
    // deletes a html elements id
    let select = document.getElementById(`${oldid}`);
    select.id = ""
  } 
};
