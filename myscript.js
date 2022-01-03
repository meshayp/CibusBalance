

var request = new XMLHttpRequest();

request.open('GET', 'https://www.mysodexo.co.il/new_my/new_my_orders.aspx', true);

request.onload = function() {
    var btn = document.createElement("div")
    var t = document.createTextNode("CLICK ME");
	var div = document.createElement("div");
	div.style.display = "none";
    btn.appendChild(t);
	//btn.appendChild(div);
	
	div.innerHTML = request.responseText;
	var deal = div.getElementsByClassName("deal-price");
	
	t.textContent = deal.length;
	
	var sum = 0;
	for (let i = 0; i < deal.length - 1; i++) {
		sum += parseFloat(deal[i].textContent);
	}
	
	t.textContent = sum + " שח ";
	
	var item = document.getElementsByClassName('bdg space');
	item[0].appendChild(btn);
};

request.send();