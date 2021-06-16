const IdManager = {
  edit: (oldid, newid) => {
    // edits a html element id
    let select = document.getElementById(`${oldid}`);
    select.id = newid;
  },
  delete: (oldid) => {
    // deletes a html elements id
    let select = document.getElementById(`${oldid}`);
    select.id = "";
  },
  switch: (id1, id2) => {
    // switch two different id
    let id1select = document.getElementById(id1);
    let id2select = document.getElementById(id2);
    id1select.id = `${id2}`
    id2select.id = `${id1}`

  }
};
