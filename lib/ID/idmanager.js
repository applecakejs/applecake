const IdManager = {
  edit: function (oldid , newid) {
    let select = document.getElementById(`${oldid}`);
    select.id = newid
  }
};
