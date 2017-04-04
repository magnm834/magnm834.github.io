var lastLetter = false;


$(window).keypress(function(e) {
console.log(e.which);

	if (e.which == 97 || e.which == 65) {
		if (lastLetter == 97) {
			$(".stage:last-child .a_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".a").clone().removeClass("a"));
			lastLetter = 97;
		}
	} 

	if (e.which == 98 || e.which == 66) {
		if (lastLetter == 98) {
			$(".stage:last-child .b_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".b").clone().removeClass("b"));
			lastLetter = 98;
		}
	} 

	if (e.which == 99 || e.which == 67) {
		if (lastLetter == 99) {
			$(".stage:last-child .c_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".c").clone().removeClass("c"));
			lastLetter = 99;
		}
	} 

	if (e.which == 100 || e.which == 68) {
		if (lastLetter == 100) {
			$(".stage:last-child .d_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".d").clone().removeClass("d"));
			lastLetter = 100;
		}
	} 

	if (e.which == 101 || e.which == 69) {
		if (lastLetter == 101) {
			$(".stage:last-child .e_two").css("opacity",1);
		} 
		if (lastLetter == 101) {
			$(".stage:last-child .e_three").css("opacity",1);
		}
		if (lastLetter == 101) {
			$(".stage:last-child .e_four").css("opacity",1);
			lastLetter = false;
		}else {
			$(".stage").append($(".e").clone().removeClass("e"));
			lastLetter = 101;
		}
	} 

	if (e.which == 102 || e.which == 70) {
		if (lastLetter == 102) {
			$(".stage:last-child .f_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".f").clone().removeClass("f"));
			lastLetter = 102;
		}
	} 

	if (e.which == 103 || e.which == 71) {
		if (lastLetter == 103) {
			$(".stage:last-child .g_two").css("opacity",1);
		} 
		if (lastLetter == 103) {
			$(".stage:last-child .g_three").css("opacity",1);
		}
		if (lastLetter == 103) {
			$(".stage:last-child .g_four").css("opacity",1);
			lastLetter = false;
		}else {
			$(".stage").append($(".g").clone().removeClass("g"));
			lastLetter = 103;
		}
	}

	if (e.which == 104 || e.which == 72) {
		if (lastLetter == 104) {
			$(".stage:last-child .h_two").css("opacity",1);
		} 
		if (lastLetter == 104) {
			$(".stage:last-child .h_three").css("opacity",1);
		}
		if (lastLetter == 104) {
			$(".stage:last-child .h_four").css("opacity",1);
			lastLetter = false;
		}else {
			$(".stage").append($(".h").clone().removeClass("h"));
			lastLetter = 104;
		}
	}

	if (e.which == 105 || e.which == 72) {
	$(".stage").append($(".i").clone().removeClass("i"));
	}

	if (e.which == 106 || e.which == 73) {
		if (lastLetter == 106) {
			$(".stage:last-child .j_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".j").clone().removeClass("j"));
			lastLetter = 106;
		}
	}

	if (e.which == 107 || e.which == 74) {
		if (lastLetter == 107) {
			$(".stage:last-child .k_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".k").clone().removeClass("k"));
			lastLetter = 107;
		}
	} 

	if (e.which == 108 || e.which == 75) {
		if (lastLetter == 108) {
			$(".stage:last-child .l_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".l").clone().removeClass("l"));
			lastLetter = 108;
		}
	} 

	if (e.which == 109 || e.which == 76) {
		if (lastLetter == 109) {
			$(".stage:last-child .m_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".m").clone().removeClass("m"));
			lastLetter = 109;
		}
	} 

	if (e.which == 110 || e.which == 77) {
		if (lastLetter == 110) {
			$(".stage:last-child .n_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".n").clone().removeClass("n"));
			lastLetter = 110;
		}
	} 

	if (e.which == 111) {
	$(".stage").append($(".o").clone().removeClass("o"));
	}

	if (e.which == 112) {
	$(".stage").append($(".p").clone().removeClass("p"));
	}

	if (e.which == 113) {
	$(".stage").append($(".q").clone().removeClass("q"));
	}

	if (e.which == 114) {
	$(".stage").append($(".r").clone().removeClass("r"));
	}

	if (e.which == 115) {
	$(".stage").append($(".s").clone().removeClass("s"));
	}

	if (e.which == 116) {
	$(".stage").append($(".t").clone().removeClass("t"));
	}

	if (e.which == 117) {
	$(".stage").append($(".u").clone().removeClass("u"));
	}

	if (e.which == 118) {
	$(".stage").append($(".v").clone().removeClass("v"));
	}

	if (e.which == 119) {
	$(".stage").append($(".w").clone().removeClass("w"));
	}

	if (e.which == 120) {
	$(".stage").append($(".x").clone().removeClass("x"));
	}

	if (e.which == 121) {
	$(".stage").append($(".y").clone().removeClass("y"));
	}

	if (e.which == 122) {
	$(".stage").append($(".z").clone().removeClass("z"));
	}

	if (e.which == 46) {
	$(".stage").append($(".period").clone().removeClass("period"));
	}

	if (e.which == 32) {
	$(".stage").append($(".space").clone().removeClass("space"));
	}

	if (e.which == 13) {
	$(".stage").append($(".enter").clone().removeClass("enter"));
	}

	if (e.which == 44) {
	$(".stage").append($(".comma").clone().removeClass("comma"));
	}

	if (e.which == 63) {
	$(".stage").append($(".question").clone().removeClass("question"));
	}
});

