function onClickSelected(variable, func) {
    variable.onclick = func;
}
function onClick(id, func) {
    var a = document.getElementById(id);
    a.onclick = func;
}
var IdManager = {
    edit: function (oldid, newid) {
        var select = document.getElementById("" + oldid);
        select.id = newid;
    },
    "delete": function (oldid) {
        var select = document.getElementById("" + oldid);
        select.id = "";
    },
    "switch": function (id1, id2) {
        var id1select = document.getElementById(id1);
        var id2select = document.getElementById(id2);
        id1select.id = "" + id2;
        id2select.id = "" + id1;
    }
};
function Insert(id, html) {
    var selection = document.getElementById("" + id);
    selection.innerHTML = html;
}
function Render(id, html) {
    var selection = document.getElementById("" + id);
    selection.innerHTML += html;
}
function CLASSselector(classname) {
    return document.getElementsByClassName(classname);
}
function IDselector(id) {
    return document.getElementById(id);
}
var doc = document;
var message = function (msg) {
    alert(msg);
};
//# sourceMappingURL=applecake.js.map