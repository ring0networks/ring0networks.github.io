var img = {
	1: "https://www.life.com.br/imgs/logolife.png",
	2: "https://www.fs.com.br/assets/image/logo/head-logo-fs.png",
	3: "https://srx.net.br/assets/logo_srx.png"
};

var bg = {
	1: "black",
	2: "white",
	3: "#f7f6f2ff"
}

var url = {
	1: "https://life.net.br/",
	2: "https://www.fs.com.br/",
	3: "https://srx.net.br/"
}

function querystringValue(name) {
	var qs = location.search.substring(1),
		qsPairs = qs.split('&'),
		i, split,
		name, value;
	for (i = 0; i < qsPairs.length; i += 1) {
		split = qsPairs[i].split('=');
		key = split[0];
		value = split[1];
		if (name === key) {
			return value;
		}
	}
}

function loadLogo() {
	var id = querystringValue('id');
	var custImg = img[id];

	if (custImg) {
		var header = document.getElementsByTagName('header')[0];
		var partner = document.getElementById('partner');
		var partner_url = document.getElementById('partner_url');
		header.style.display = "block";
		header.style.backgroundColor = bg[id];
		partner.style.display = "block";
		partner.src = custImg;
		partner_url.href = url[id]
	}
}

window.onload = loadLogo();
