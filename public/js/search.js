// const base = "http://localhost:3333/api/v1/";
const base = "https://sport-radar-rest-api.herokuapp.com/api/v1/"
var results = [];
var last = 0;
function getGames() {
	var xhr = new XMLHttpRequest();
	var response
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == XMLHttpRequest.DONE) {
	        response = xhr.responseText;
			var bodyResponse = JSON.parse(response);
			search(bodyResponse);
	    }
	}
	xhr.open('GET', base + "games", true);
	xhr.send(null);
}
function get(target, id, gameid, property) {
	var xhr = new XMLHttpRequest();
	var response
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == XMLHttpRequest.DONE) {
	        response = xhr.responseText;
			var bodyResponse = JSON.parse(response);
			results[gameid][target + property] = bodyResponse[property];
			if (target === "cities" && gameid === last - 1) {
				setTimeout(generate,500);
			}
	    }
	}
	xhr.open('GET', base + target + "/" + id, true);
	xhr.send(null);
}
// function getCity(what, id, gameid, property) {
// 	var xhr = new XMLHttpRequest();
// 	var response
// 	xhr.onreadystatechange = function() {
// 	    if (xhr.readyState == XMLHttpRequest.DONE) {
// 	        response = xhr.responseText;
// 			var bodyResponse = JSON.parse(response);
// 			if ("")
// 			search(bodyResponse);
// 	    }
// 	}
// 	xhr.open('GET', base + "games" + "/" + id, true);
// 	xhr.send(null);
// }
function search(res) {
	var games = res;
	for (var game in games) {
		var slots = games[+game].slots,
			cityID = games[+game].city,
			courtID = games[+game].court;
		last++;
		get("courts", courtID, +game, "thumbnail");
		get("courts", courtID, +game, "name");
		get("cities", cityID, +game, "name");
		var tmp = {
			slots: slots
		}
		results.push(tmp);
	}
}
getGames();

function _createElement( str ) {
    var frag = document.createDocumentFragment();

    var elem = document.createElement('div');
    elem.innerHTML = str;

    while (elem.childNodes[0]) {
        frag.appendChild(elem.childNodes[0]);
    }
    return frag;
}
// function _createElement(element, class) {
// 	var tmp = document.createElement(element);
// 	tmp.className = class;
// 	return tmp;
var template = "<div class='row'><div class='col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12'><div class='row'><div class='col-lg-6'><img src='http://cdn.bleacherreport.net/images_root/slides/photos/001/162/166/rucker_display_image.jpg?1312610824'></div><div class='col-lg-6'><div class='wrapData'><div class='data' id='cityName'><span>City</span><p>Wrocław</p></div><div class='data' id='courtName'><span>Court</span><p>Rucker Park</p></div><div class='data' id='slots'><span>Slots</span><p>10</p></div></div></div></div></div></div>"
function generate() {
	var target = document.querySelector(".wrapResults"),
		fragment = document.createDocumentFragment();
	target.innerHTML = "";
	for (var i = 0; i < 7; i++) {
		var tmpElement = _createElement(template);
		console.log(tmpElement.querySelector("img"));
		tmpElement.querySelector("img").src = results[i]["courtsthumbnail"];
		tmpElement.querySelector("#cityName p").innerHTML = results[i]["citiesname"];
		tmpElement.querySelector("#courtName p").innerHTML =results[i]["courtsname"];
		fragment.appendChild(tmpElement);
	}
	target.appendChild(fragment);
}
// }
// for (var i = 0; i < 10; i++) {
// 	var li = document.createElement("li");
// 	li.innerHTML = "List item " + x;
// 	frag.appendChild(li);
// 	var div1 = _createElement("div","row"),
// 		div2 = _createElement("div","row"),
// 		div2 = _createElement("div","row"),
// 		div2 = _createElement("div","row"),
// 		div2 = _createElement("div","row"),
// 		div2 = _createElement("div","row"),
// 		div2 = _createElement("div","row"),
// 		div2 = _createElement("div","row"),

// }



