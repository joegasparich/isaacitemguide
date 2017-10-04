$(document).ready(function () {
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: 'itemdata.json',
        success: function (json) {
            //for each item
            $.each(json.items, function (index, object) {
            	if('recharge' in object) {
            		$(".ul-list-items").append(
	                    "<li><div class = \"hover-img\"> <img src=" + object.img + "><div class=\"details\"><p id=\"name\"> " + object.name + "</p><p id=\"desc\"> " + object.desc + "</p><p> " + object.details + "</p><p><b>Type:</b> " + object.type + "</p><p><b>Recharge:</b> " + object.recharge + "</p><p><b>Pool:</b> " + object.pool + "</p><p><b>Source:</b> " + object.source + "</p></div></div></li>"
	                );
            	} else {
	                $(".ul-list-items").append(
	                    "<li><div class = \"hover-img\"> <img src=" + object.img + "><div class=\"details\"><p id=\"name\"> " + object.name + "</p><p id=\"desc\"> " + object.desc + "</p><p> " + object.details + "</p><p><b>Type:</b> " + object.type + "</p><p><b>Pool:</b> " + object.pool + "</p><p><b>Source:</b> " + object.source + "</p></div></div></li>"
	                );
            	}
            });
            $.each(json.trinkets, function (index, object) {
                $(".ul-list-trinkets").append(
                    "<li><div class = \"hover-img\"> <img src=" + object.img + "><div class=\"details\"><p id=\"name\"> " + object.name + "</p><p id=\"desc\"> " + object.desc + "</p><p> " + object.details + "</p><p><b>Source:</b> " + object.source
                );
            });
            $.each(json.consumables, function (index, object) {
            	if('desc' in object) {
	                $(".ul-list-consumables").append(
	                    "<li><div class = \"hover-img\"> <img src=" + object.img + "><div class=\"details\"><p id=\"name\"> " + object.name + "</p><p id=\"desc\"> " + object.desc + "</p><p> " + object.details + "</p><p><b>Source:</b> " + object.source
	                );
	            } else {
	            	$(".ul-list-consumables").append(
	                    "<li><div class = \"hover-img\"> <img src=" + object.img + "><div class=\"details\"><p id=\"name\"> " + object.name + "</p><p> " + object.details + "</p><p><b>Source:</b> " + object.source
	                );
	            }
            });
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
	        //for each item
	        if(type == "name") {
	        	json.items.sort(function(a, b) {return a.name.localeCompare(b.name)})
	        	json.trinkets.sort(function(a, b) {return a.name.localeCompare(b.name)})
	        }
			if(type == "tag") {
				json.items.sort(function(a, b) {return a.tag.localeCompare(b.tag)})
	        	json.trinkets.sort(function(a, b) {return a.tag.localeCompare(b.tag)})
			}
	        $.each(json.items, function (index, object) {
	            if('recharge' in object) {
            		$(".ul-list-items").append(
	                    "<li><div class = \"hover-img\"> <img src=" + object.img + "><div class=\"details\"><p id=\"name\"> " + object.name + "</p><p id=\"desc\"> " + object.desc + "</p><p> " + object.details + "</p><p><b>Type:</b> " + object.type + "</p><p><b>Recharge:</b> " + object.recharge + "</p><p><b>Pool:</b> " + object.pool + "</p><p><b>Source:</b> " + object.source + "</p></div></div></li>"
	                );
            	} else {
	    	console.log("weeeeeooo")
	                $(".ul-list-items").append(
	                    "<li><div class = \"hover-img\"> <img src=" + object.img + "><div class=\"details\"><p id=\"name\"> " + object.name + "</p><p id=\"desc\"> " + object.desc + "</p><p> " + object.details + "</p><p><b>Type:</b> " + object.type + "</p><p><b>Pool:</b> " + object.pool + "</p><p><b>Source:</b> " + object.source + "</p></div></div></li>"
	                );
            	}
	        });
            $.each(json.trinkets, function (index, object) {
                $(".ul-list-trinkets").append(
                    "<li><div class = \"hover-img\"> <img src=" + object.img + "><div class=\"details\"><p id=\"name\"> " + object.name + "</p><p id=\"desc\"> " + object.desc + "</p><p> " + object.details + "</p><p><b>Source:</b> " + object.source
                );
            });
	    }
	});
}