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
