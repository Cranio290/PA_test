function render() {
    var valx = Number(document.getElementById("xpos").value);
    var valy = Number(document.getElementById("ypos").value);
	var valyear = Number(document.getElementById("year").value);
    var valmonth = Number(document.getElementById("month").value);
	var valday = Number(document.getElementById("day").value);
	var valchunksize = Number(document.getElementById("size").value);
	var valrepx = Number(document.getElementById("repx").value);
	var valrepy = Number(document.getElementById("repy").value);
	renderframe(valyear, valmonth, valday, valx, valy, valchunksize, valrepx, valrepy);
}