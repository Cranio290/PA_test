const cvs = document.getElementById("cvs");
const ctx = cvs.getContext("2d");
cvs.width = 1280;
cvs.height = 720;
//ctx.scale(2, 2);

//chunk size 256x256
//71, 40 and 426, 240
function renderchunk(yy,m,d,c,t,x,y, cx,cy,cs) {
	var img = new Image();
    img.src = "https://klokantech.github.io/naturalearthtiles/tiles/natural_earth_2_shaded_relief.raster/" + "6" + "/" + x + "/" + y + ".png";
        img.onload = function () {
            ctx.drawImage(img, cx, cy, cs, cs);
            console.log("rendered: " + img.src);
        };
		img.onerror = function() {
            console.log("error");
        };
}

function renderframe(year, month, day, ix, iy, chunksize, repx, repy) {
const chs = chunksize;
var pixareax = 256 * repx;
var pixareay = 256 * repy;
cvs.width = pixareax;
cvs.height = pixareay;

for (let j = 0; j < repy; j++) {
    for (let i = 0; i < repx; i++) {
        	    var checkmonth = month.toString();
		if (checkmonth.length == 1) {
		    var setmonth = "0" + month;
	    } else {
			var setmonth = month;
		}
		var checkday = day.toString();
		if (checkday.length == 1) {
		var setday = "0" + day;
	    } else {
		    var setday = day;
		}
        renderchunk(year, setmonth, setday, 0, "tiles", ix+i, iy, chs*i, chs*j, chs);
    }
iy++;
}
}

renderframe(2022, 5, 7, 130, 88, 256, 17, 10);
