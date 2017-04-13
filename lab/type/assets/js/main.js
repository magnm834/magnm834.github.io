var lastLetter = false;
var lastletterpart = false;
var entryCount = 0;

var wordCount = 0;

function deleteElement() {
  $(".delete").last().remove();
}

// function changeBackground () {
// 	$(".white").css("background-color","black");
// 	$(".black").addClass("white").removeClass("black");
// 	$(".blackl").css("background-color","white");
// 	$("body").css("background-color","white");
// }


$(window).keydown(function(e) {
console.log(e.which);

	// $(".button").click(changeBackground);

	function blinker() {
	$(".blink").fadeOut(500);
	$(".blink").fadeIn(500);
}
	
	if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP" );
      deleteElement();
    }

	// if (e.which == 8) {
	// 	if (lastletterpart == 65) {
	// 		$(".stage .a").css("opacity",0);
	// 	}
	// }

	if (e.which == 65) {
		if (lastLetter == 65) {
			$(".word-" + wordCount + ":last-child .a_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".word-" + wordCount).append($(".a").clone().removeClass("a"));
			lastLetter = 65;
		}
	} 

	if (e.which == 66) {
		if (lastLetter == 66) {
			$(".word-" + wordCount + ":last-child .b_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".word-" + wordCount).append($(".b").clone().removeClass("b"));
			lastLetter = 66;
		}
	} 

	if (e.which == 67) {
		if (lastLetter == 67) {
			$(".word-" + wordCount + ":last-child .c_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".word-" + wordCount).append($(".c").clone().removeClass("c"));
			lastLetter = 67;
		}
	} 

	if (e.which == 68) {
		if (lastLetter == 68) {
			$(".word-" + wordCount + ":last-child .d_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".word-" + wordCount).append($(".d").clone().removeClass("d"));
			lastLetter = 68;
		}
	} 

	if (e.which == 69) {
		console.log
		if (lastLetter == 69 && lastletterpart == 'e3') {
			$(".word-" + wordCount + ":last-child .e_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 69 && lastletterpart == 'e2') {
			$(".word-" + wordCount + ":last-child .e_three").css("opacity",1);
			lastletterpart = 'e3';
		} else if (lastLetter == 69 && lastletterpart == 'e1') {
			$(".word-" + wordCount + ":last-child .e_two").css("opacity",1);
			lastletterpart = 'e2';
		} else {
			$(".word-" + wordCount).append($(".e").clone().removeClass("e"));
			lastLetter = 69;
			lastletterpart = 'e1';

		}
	} 

	if (e.which == 70) {
		if (lastLetter == 70) {
			$(".word-" + wordCount + ":last-child .f_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".word-" + wordCount).append($(".f").clone().removeClass("f"));
			lastLetter = 70;
		}
	} 

	if (e.which == 71) {
		if (lastLetter == 71 && lastletterpart == 'g2') {
			$(".word-" + wordCount + ":last-child .g_three").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 71 && lastletterpart == 'g1') {
			$(".word-" + wordCount + ":last-child .g_two").css("opacity",1);
			lastletterpart = 'g2';
		} else {
			$(".word-" + wordCount).append($(".g").clone().removeClass("g"));
			lastLetter = 71;
			lastletterpart = 'g1';

		}
	} 

	if (e.which == 72) {
		console.log
		if (lastLetter == 72 && lastletterpart == 'h3') {
			$(".word-" + wordCount + ":last-child .h_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 72 && lastletterpart == 'h2') {
			$(".word-" + wordCount + ":last-child .h_three").css("opacity",1);
			lastletterpart = 'h3';
		} else if (lastLetter == 72 && lastletterpart == 'h1') {
			$(".word-" + wordCount + ":last-child .h_two").css("opacity",1);
			lastletterpart = 'h2';
		} else {
			$(".word-" + wordCount).append($(".h").clone().removeClass("h"));
			lastLetter = 72;
			lastletterpart = 'h1';

		}
	}

	if (e.which == 73) {
	$(".word-" + wordCount).append($(".i").clone().removeClass("i"));
	}

	if (e.which == 74) {
		if (lastLetter == 74) {
			$(".word-" + wordCount + ":last-child .j_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".word-" + wordCount).append($(".j").clone().removeClass("j"));
			lastLetter = 74;
		}
	}

	if (e.which == 75) {
		if (lastLetter == 75) {
			$(".word-" + wordCount + ":last-child .k_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".word-" + wordCount).append($(".k").clone().removeClass("k"));
			lastLetter = 75;
		}
	} 

	if (e.which == 76) {
		if (lastLetter == 76) {
			$(".word-" + wordCount + ":last-child .l_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".word-" + wordCount).append($(".l").clone().removeClass("l"));
			lastLetter = 76;
		}
	} 

	if (e.which == 77) {
		if (lastLetter == 77) {
			$(".word-" + wordCount + ":last-child .m_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".word-" + wordCount).append($(".m").clone().removeClass("m"));
			lastLetter = 77;
		}
	} 

	if (e.which == 78) {
		if (lastLetter == 78) {
			$(".word-" + wordCount + ":last-child .n_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".word-" + wordCount).append($(".n").clone().removeClass("n"));
			lastLetter = 78;
		}
	} 

	if (e.which == 79) {
		console.log
		if (lastLetter == 79 && lastletterpart == 'o3') {
			$(".word-" + wordCount + ":last-child .o_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 79 && lastletterpart == 'o2') {
			$(".word-" + wordCount + ":last-child .o_three").css("opacity",1);
			lastletterpart = 'o3';
		} else if (lastLetter == 79 && lastletterpart == 'o1') {
			$(".word-" + wordCount + ":last-child .o_two").css("opacity",1);
			lastletterpart = 'o2';
		} else {
			$(".word-" + wordCount).append($(".o").clone().removeClass("o"));
			lastLetter = 79;
			lastletterpart = 'o1';
		}
	}

	if (e.which == 80) {
		if (lastLetter == 80) {
			$(".word-" + wordCount + ":last-child .p_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".word-" + wordCount).append($(".p").clone().removeClass("p"));
			lastLetter = 80;
		}
	}

	if (e.which == 81) {
		if (lastLetter == 81) {
			$(".word-" + wordCount + ":last-child .q_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".word-" + wordCount).append($(".q").clone().removeClass("q"));
			lastLetter = 81;
		}
	}

	if (e.which == 82) {
		if (lastLetter == 82 && lastletterpart == 'r2') {
			$(".word-" + wordCount + ":last-child .r_three").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 82 && lastletterpart == 'r1') {
			$(".word-" + wordCount + ":last-child .r_two").css("opacity",1);
			lastletterpart = 'r2';
		} else {
			$(".word-" + wordCount).append($(".r").clone().removeClass("r"));
			lastLetter = 82;
			lastletterpart = 'r1';

		}
	} 

	if (e.which == 83) {
		if (lastLetter == 83 && lastletterpart == 's2') {
			$(".word-" + wordCount + ":last-child .s_three").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 83 && lastletterpart == 's1') {
			$(".word-" + wordCount + ":last-child .s_two").css("opacity",1);
			lastletterpart = 's2';
		} else {
			$(".word-" + wordCount).append($(".s").clone().removeClass("s"));
			lastLetter = 83;
			lastletterpart = 's1';

		}
	} 

	if (e.which == 84) {
		console.log
		if (lastLetter == 84 && lastletterpart == 't3') {
			$(".word-" + wordCount + ":last-child .t_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 84 && lastletterpart == 't2') {
			$(".word-" + wordCount + ":last-child .t_three").css("opacity",1);
			lastletterpart = 't3';
		} else if (lastLetter == 84 && lastletterpart == 't1') {
			$(".word-" + wordCount + ":last-child .t_two").css("opacity",1);
			lastletterpart = 't2';
		} else {
			$(".word-" + wordCount).append($(".t").clone().removeClass("t"));
			lastLetter = 84;
			lastletterpart = 't1';
		}
	}

	if (e.which == 85) {
		console.log
		if (lastLetter == 85 && lastletterpart == 'u3') {
			$(".word-" + wordCount + ":last-child .u_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 85 && lastletterpart == 'u2') {
			$(".word-" + wordCount + ":last-child .u_three").css("opacity",1);
			lastletterpart = 'u3';
		} else if (lastLetter == 85 && lastletterpart == 'u1') {
			$(".word-" + wordCount + ":last-child .u_two").css("opacity",1);
			lastletterpart = 'u2';
		} else {
			$(".word-" + wordCount).append($(".u").clone().removeClass("u"));
			lastLetter = 85;
			lastletterpart = 'u1';
		}
	}

	if (e.which == 86) {
		if (lastLetter == 86) {
			$(".word-" + wordCount + ":last-child .v_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".word-" + wordCount).append($(".v").clone().removeClass("v"));
			lastLetter = 86;
		}
	}

	if (e.which == 87) {
		console.log
		if (lastLetter == 87 && lastletterpart == 'w3') {
			$(".word-" + wordCount + ":last-child .w_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 87 && lastletterpart == 'w2') {
			$(".word-" + wordCount + ":last-child .w_three").css("opacity",1);
			lastletterpart = 'w3';
		} else if (lastLetter == 87 && lastletterpart == 'w1') {
			$(".word-" + wordCount + ":last-child .w_two").css("opacity",1);
			lastletterpart = 'w2';
		} else {
			$(".word-" + wordCount).append($(".w").clone().removeClass("w"));
			lastLetter = 87;
			lastletterpart = 'w1';
		}
	}

	if (e.which == 88) {
		console.log
		if (lastLetter == 88 && lastletterpart == 'x3') {
			$(".word-" + wordCount + ":last-child .x_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 88 && lastletterpart == 'x2') {
			$(".word-" + wordCount + ":last-child .x_three").css("opacity",1);
			lastletterpart = 'x3';
		} else if (lastLetter == 88 && lastletterpart == 'x1') {
			$(".word-" + wordCount + ":last-child .x_two").css("opacity",1);
			lastletterpart = 'x2';
		} else {
			$(".word-" + wordCount).append($(".x").clone().removeClass("x"));
			lastLetter = 88;
			lastletterpart = 'x1';
		}
	}

	if (e.which == 89) {
		console.log
		if (lastLetter == 89 && lastletterpart == 'y3') {
			$(".word-" + wordCount + ":last-child .y_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 89 && lastletterpart == 'y2') {
			$(".word-" + wordCount + ":last-child .y_three").css("opacity",1);
			lastletterpart = 'y3';
		} else if (lastLetter == 89 && lastletterpart == 'y1') {
			$(".word-" + wordCount + ":last-child .y_two").css("opacity",1);
			lastletterpart = 'y2';
		} else {
			$(".word-" + wordCount).append($(".y").clone().removeClass("y"));
			lastLetter = 89;
			lastletterpart = 'y1';
		}
	}

	if (e.which == 90) {
		if (lastLetter == 90 && lastletterpart == 'z2') {
			$(".word-" + wordCount + ":last-child .z_three").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 90 && lastletterpart == 'z1') {
			$(".word-" + wordCount + ":last-child .z_two").css("opacity",1);
			lastletterpart = 'z2';
		} else {
			$(".word-" + wordCount).append($(".z").clone().removeClass("z"));
			lastLetter = 90;
			lastletterpart = 'z1';

		}
	}

	if (e.which == 190) {
		if (lastLetter == 190) {
			$(".word-" + wordCount + ":last-child .period_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".word-" + wordCount).append($(".period").clone().removeClass("period"));
			lastLetter = 190;
		}
	}

	if (e.which == 32) {
	$(".stage").append($(".space").clone().removeClass("space"));
	wordCount++;
	$(".stage").append("<div class='word word-" + wordCount + "'></div>");
	}

	if (e.which == 13) {
	$(".stage").append($(".enter").clone().removeClass("enter"));
	wordCount++;
	$(".stage").append("<div class='word word-" + wordCount + "'></div>");
	}

	if (e.which == 188) {
		if (lastLetter == 188 && lastletterpart == 'comma2') {
			$(".word-" + wordCount + ":last-child .comma_three").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 188 && lastletterpart == 'comma1') {
			$(".word-" + wordCount + ":last-child .comma_two").css("opacity",1);
			lastletterpart = 'comma2';
		} else {
			$(".word-" + wordCount).append($(".comma").clone().removeClass("comma"));
			lastLetter = 188;
			lastletterpart = 'comma1';

		}
	}

	if (e.which == 191) {
		console.log
		if (lastLetter == 191 && lastletterpart == 'question3') {
			$(".word-" + wordCount + ":last-child .question_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 191 && lastletterpart == 'question2') {
			$(".word-" + wordCount + ":last-child .question_three").css("opacity",1);
			lastletterpart = 'question3';
		} else if (lastLetter == 191 && lastletterpart == 'question1') {
			$(".word-" + wordCount + ":last-child .question_two").css("opacity",1);
			lastletterpart = 'question2';
		} else {
			$(".word-" + wordCount).append($(".question").clone().removeClass("question"));
			lastLetter = 191;
			lastletterpart = 'question1';
		}
	}
});

