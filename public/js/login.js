// const base = "http://localhost:3333/api/v1/";
// var results = [];

// function login(name,pass) {
// 	var xhr = new XMLHttpRequest();
// 	var response
// 	xhr.onreadystatechange = function() {
// 	    if (xhr.readyState == XMLHttpRequest.DONE) {
// 	        response = xhr.responseText;
// 			var bodyResponse = JSON.parse(response);
// 			search(bodyResponse);
// 	    }
// 	}
// 	xhr.open('GET', base + "games", true);
// 	xhr.send(null);
// }
// function get(target, id, gameid, property) {
// 	var xhr = new XMLHttpRequest();
// 	var response
// 	xhr.onreadystatechange = function() {
// 	    if (xhr.readyState == XMLHttpRequest.DONE) {
// 	        response = xhr.responseText;
// 			var bodyResponse = JSON.parse(response);
// 			results[gameid][target + property] = bodyResponse[property];
// 			if (target === "cities") {

// 			}
// 	    }
// 	}
// 	xhr.open('GET', base + target + "/" + id, true);
// 	xhr.send(null);
// }
// // function getCity(what, id, gameid, property) {
// // 	var xhr = new XMLHttpRequest();
// // 	var response
// // 	xhr.onreadystatechange = function() {
// // 	    if (xhr.readyState == XMLHttpRequest.DONE) {
// // 	        response = xhr.responseText;
// // 			var bodyResponse = JSON.parse(response);
// // 			if ("")
// // 			search(bodyResponse);
// // 	    }
// // 	}
// // 	xhr.open('GET', base + "games" + "/" + id, true);
// // 	xhr.send(null);
// // }
// function search(res) {
// 	var games = res;
// 	for (var game in games) {
// 		var slots = games[+game].slots,
// 			cityID = games[+game].city,
// 			courtID = games[+game].court;
// 		get("courts", courtID, +game, "image");
// 		get("courts", courtID, +game, "name");
// 		get("cities", cityID, +game, "name");
// 		var tmp = {
// 			slots: slots
// 		}
// 		results.push(tmp);
// 	}
// }
// getGames();

// var target = document.querySelector(".wrapResults");
// var fragment = document.createDocumentFragment();
// target.appendChild(fragment);