	function dynamicsearch(e) {
	    var filter, no_of_cards, container_element, card_element, value_card, i, position_at, filter_char, filter_str;
	    input_text = document.getElementById("searchbar");
	    no_of_cards = document.querySelectorAll('#container .card').length;
	    container_element = document.getElementById("container");
	    card_element = container_element.getElementsByClassName("card");
	    filter = input_text.value.toUpperCase();

	    for (i = 0; i < no_of_cards; i++) {
	        value_card = card_element[i].getElementsByClassName("ids")[0].innerHTML.toUpperCase();
	        if (!value_card.includes(filter)) {
	            card_element[i].style.display = "none";
	        } else {
	            if (card_element[i].style.display == "none") {
	                card_element[i].style.display = "inline-block";
	            }
	        }
	    }
	}