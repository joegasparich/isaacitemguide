var json

$(document).ready(function () {
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: 'itemdata.json',
        success: function (json) {
            show(json)
        }
    });
});

function sort(type) {
	$.ajax({
	    type: "GET",
	    dataType: 'json',
	    url: 'itemdata.json',
	    success: function (json) {
			$(".ul-list-items").empty()
			$(".ul-list-trinkets").empty()
            $(".ul-list-consumables").empty()
	        //for each item
	        if(type == "name") {
	        	json.items.sort(function(a, b) {return a.name.localeCompare(b.name)})
	        	json.trinkets.sort(function(a, b) {return a.name.localeCompare(b.name)})
	        }
			if(type == "tag") {
				json.items.sort(function(a, b) {return a.tag.localeCompare(b.tag)})
	        	json.trinkets.sort(function(a, b) {return a.tag.localeCompare(b.tag)})
			}
	        show(json)
	    }
	});
}

function search() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    itemul = document.getElementById("itmlist");
    li = itemul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
    	item = li[i]
        a = li[i].getElementsByTagName("p")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

    trnkul = document.getElementById("tnklist");
    li = trnkul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
    	item = li[i]
        a = li[i].getElementsByTagName("p")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

    consul = document.getElementById("cnslist");
    li = consul.getElementsByTagName('li');
    
    for (i = 0; i < li.length; i++) {
    	item = li[i]
        a = li[i].getElementsByTagName("p")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function show(json) {
    //for each item
    $.each(json.items, function (index, object) {
        info = "<li><div class = \"hover-img\"> <img src=" + object.img + "><div class=\"details\"><p id=\"name\"> " + object.name + "</p><p id=\"desc\"> " + object.desc + "</p><p><ul>"
        object.details.forEach(function (item) {
            info += "<li>" + item + "</li>"
        })
        info += "</ul></p><p><b>Type:</b> " + object.type
        if('recharge' in object) {
            info += "</p><p><b>Recharge:</b> " + object.recharge
        }
        info += "</p><p><b>Pool:</b> " + object.pool + "</p><p><b>Source:</b> " + object.source + "</p></div></div></li>"

        $(".ul-list-items").append(info);
    });
    //for each trinket
    $.each(json.trinkets, function (index, object) {
        info = "<li><div class = \"hover-img\"> <img src=" + object.img + "><div class=\"details\"><p id=\"name\"> " + object.name + "</p><p id=\"desc\"> " + object.desc + "</p><p><ul>"
        object.details.forEach(function (item) {
            info += "<li>" + item + "</li>"
        })
        info += "</ul></p><p><b>Source:</b> " + object.source

        $(".ul-list-trinkets").append(info);
    });
    //for each consumable
    $.each(json.consumables, function (index, object) {
        info = "<li><div class = \"hover-img\"> <img src=" + object.img + "><div class=\"details\"><p id=\"name\"> " + object.name
        if('desc' in object) {
            info += "</p><p id=\"desc\"> " + object.desc
        }
        info +=  "</p><p><ul>"
        object.details.forEach(function (item) {
            info += "<li>" + item + "</li>"
        })
        info += "</ul></p><p><b>Source:</b> " + object.source

        $(".ul-list-consumables").append(info)
    });
}