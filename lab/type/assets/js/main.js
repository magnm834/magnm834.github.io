var lastLetter = false;
var lastletterpart = false;
var entryCount = 0;


function deleteElement() {
  $(".letter").last().remove();
}

$(window).keydown(function(e) {
console.log(e.which);

	
if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP" );
      deleteElement ()
    }

	if (e.which == 8) {
		if (lastletterpart == 65) {
			$(".stage .a").css("opacity",0);
		}
	}

	if (e.which == 65) {
		if (lastLetter == 65) {
			$(".stage:last-child .a_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".a").clone().removeClass("a"));
			lastLetter = 65;
		}
	} 

	if (e.which == 66) {
		if (lastLetter == 66) {
			$(".stage:last-child .b_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".b").clone().removeClass("b"));
			lastLetter = 66;
		}
	} 

	if (e.which == 67) {
		if (lastLetter == 67) {
			$(".stage:last-child .c_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".c").clone().removeClass("c"));
			lastLetter = 67;
		}
	} 

	if (e.which == 68) {
		if (lastLetter == 68) {
			$(".stage:last-child .d_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".d").clone().removeClass("d"));
			lastLetter = 68;
		}
	} 

	if (e.which == 69) {
		console.log
		if (lastLetter == 69 && lastletterpart == 'e3') {
			$(".stage:last-child .e_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 69 && lastletterpart == 'e2') {
			$(".stage:last-child .e_three").css("opacity",1);
			lastletterpart = 'e3';
		} else if (lastLetter == 69 && lastletterpart == 'e1') {
			$(".stage:last-child .e_two").css("opacity",1);
			lastletterpart = 'e2';
		} else {
			$(".stage").append($(".e").clone().removeClass("e"));
			lastLetter = 69;
			lastletterpart = 'e1';

		}
	} 

	if (e.which == 70) {
		if (lastLetter == 70) {
			$(".stage:last-child .f_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".f").clone().removeClass("f"));
			lastLetter = 70;
		}
	} 

	if (e.which == 71) {
		if (lastLetter == 71 && lastletterpart == 'g2') {
			$(".stage:last-child .g_three").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 71 && lastletterpart == 'g1') {
			$(".stage:last-child .g_two").css("opacity",1);
			lastletterpart = 'g2';
		} else {
			$(".stage").append($(".g").clone().removeClass("g"));
			lastLetter = 71;
			lastletterpart = 'g1';

		}
	} 

	if (e.which == 72) {
		console.log
		if (lastLetter == 72 && lastletterpart == 'h3') {
			$(".stage:last-child .h_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 72 && lastletterpart == 'h2') {
			$(".stage:last-child .h_three").css("opacity",1);
			lastletterpart = 'h3';
		} else if (lastLetter == 72 && lastletterpart == 'h1') {
			$(".stage:last-child .h_two").css("opacity",1);
			lastletterpart = 'h2';
		} else {
			$(".stage").append($(".h").clone().removeClass("h"));
			lastLetter = 72;
			lastletterpart = 'h1';

		}
	}

	if (e.which == 73) {
	$(".stage").append($(".i").clone().removeClass("i"));
	}

	if (e.which == 74) {
		if (lastLetter == 74) {
			$(".stage:last-child .j_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".j").clone().removeClass("j"));
			lastLetter = 74;
		}
	}

	if (e.which == 75) {
		if (lastLetter == 75) {
			$(".stage:last-child .k_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".k").clone().removeClass("k"));
			lastLetter = 75;
		}
	} 

	if (e.which == 76) {
		if (lastLetter == 76) {
			$(".stage:last-child .l_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".l").clone().removeClass("l"));
			lastLetter = 76;
		}
	} 

	if (e.which == 77) {
		if (lastLetter == 77) {
			$(".stage:last-child .m_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".m").clone().removeClass("m"));
			lastLetter = 77;
		}
	} 

	if (e.which == 78) {
		if (lastLetter == 78) {
			$(".stage:last-child .n_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".n").clone().removeClass("n"));
			lastLetter = 78;
		}
	} 

	if (e.which == 79) {
		console.log
		if (lastLetter == 79 && lastletterpart == 'o3') {
			$(".stage:last-child .o_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 79 && lastletterpart == 'o2') {
			$(".stage:last-child .o_three").css("opacity",1);
			lastletterpart = 'o3';
		} else if (lastLetter == 79 && lastletterpart == 'o1') {
			$(".stage:last-child .o_two").css("opacity",1);
			lastletterpart = 'o2';
		} else {
			$(".stage").append($(".o").clone().removeClass("o"));
			lastLetter = 79;
			lastletterpart = 'o1';
		}
	}

	if (e.which == 80) {
		if (lastLetter == 80) {
			$(".stage:last-child .p_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".p").clone().removeClass("p"));
			lastLetter = 80;
		}
	}

	if (e.which == 81) {
		if (lastLetter == 81) {
			$(".stage:last-child .q_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".q").clone().removeClass("q"));
			lastLetter = 81;
		}
	}

	if (e.which == 82) {
		if (lastLetter == 82 && lastletterpart == 'r2') {
			$(".stage:last-child .r_three").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 82 && lastletterpart == 'r1') {
			$(".stage:last-child .r_two").css("opacity",1);
			lastletterpart = 'r2';
		} else {
			$(".stage").append($(".r").clone().removeClass("r"));
			lastLetter = 82;
			lastletterpart = 'r1';

		}
	} 

	if (e.which == 83) {
		if (lastLetter == 83 && lastletterpart == 's2') {
			$(".stage:last-child .s_three").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 83 && lastletterpart == 's1') {
			$(".stage:last-child .s_two").css("opacity",1);
			lastletterpart = 's2';
		} else {
			$(".stage").append($(".s").clone().removeClass("s"));
			lastLetter = 83;
			lastletterpart = 's1';

		}
	} 

	if (e.which == 84) {
		console.log
		if (lastLetter == 84 && lastletterpart == 't3') {
			$(".stage:last-child .t_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 84 && lastletterpart == 't2') {
			$(".stage:last-child .t_three").css("opacity",1);
			lastletterpart = 't3';
		} else if (lastLetter == 84 && lastletterpart == 't1') {
			$(".stage:last-child .t_two").css("opacity",1);
			lastletterpart = 't2';
		} else {
			$(".stage").append($(".t").clone().removeClass("t"));
			lastLetter = 84;
			lastletterpart = 't1';
		}
	}

	if (e.which == 85) {
		console.log
		if (lastLetter == 85 && lastletterpart == 'u3') {
			$(".stage:last-child .u_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 85 && lastletterpart == 'u2') {
			$(".stage:last-child .u_three").css("opacity",1);
			lastletterpart = 'u3';
		} else if (lastLetter == 85 && lastletterpart == 'u1') {
			$(".stage:last-child .u_two").css("opacity",1);
			lastletterpart = 'u2';
		} else {
			$(".stage").append($(".u").clone().removeClass("u"));
			lastLetter = 85;
			lastletterpart = 'u1';
		}
	}

	if (e.which == 86) {
		if (lastLetter == 86) {
			$(".stage:last-child .v_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".v").clone().removeClass("v"));
			lastLetter = 86;
		}
	}

	if (e.which == 87) {
		console.log
		if (lastLetter == 87 && lastletterpart == 'w3') {
			$(".stage:last-child .w_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 87 && lastletterpart == 'w2') {
			$(".stage:last-child .w_three").css("opacity",1);
			lastletterpart = 'w3';
		} else if (lastLetter == 87 && lastletterpart == 'w1') {
			$(".stage:last-child .w_two").css("opacity",1);
			lastletterpart = 'w2';
		} else {
			$(".stage").append($(".w").clone().removeClass("w"));
			lastLetter = 87;
			lastletterpart = 'w1';
		}
	}

	if (e.which == 88) {
		console.log
		if (lastLetter == 88 && lastletterpart == 'x3') {
			$(".stage:last-child .x_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 88 && lastletterpart == 'x2') {
			$(".stage:last-child .x_three").css("opacity",1);
			lastletterpart = 'x3';
		} else if (lastLetter == 88 && lastletterpart == 'x1') {
			$(".stage:last-child .x_two").css("opacity",1);
			lastletterpart = 'x2';
		} else {
			$(".stage").append($(".x").clone().removeClass("x"));
			lastLetter = 88;
			lastletterpart = 'x1';
		}
	}

	if (e.which == 89) {
		console.log
		if (lastLetter == 89 && lastletterpart == 'y3') {
			$(".stage:last-child .y_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 89 && lastletterpart == 'y2') {
			$(".stage:last-child .y_three").css("opacity",1);
			lastletterpart = 'w3';
		} else if (lastLetter == 89 && lastletterpart == 'y1') {
			$(".stage:last-child .y_two").css("opacity",1);
			lastletterpart = 'y2';
		} else {
			$(".stage").append($(".y").clone().removeClass("y"));
			lastLetter = 89;
			lastletterpart = 'y1';
		}
	}

	if (e.which == 90) {
		if (lastLetter == 90 && lastletterpart == 'z2') {
			$(".stage:last-child .z_three").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 90 && lastletterpart == 'z1') {
			$(".stage:last-child .z_two").css("opacity",1);
			lastletterpart = 'z2';
		} else {
			$(".stage").append($(".z").clone().removeClass("z"));
			lastLetter = 90;
			lastletterpart = 'z1';

		}
	}

	if (e.which == 190) {
		if (lastLetter == 190) {
			$(".stage:last-child .period_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".period").clone().removeClass("period"));
			lastLetter = 190;
		}
	}

	if (e.which == 32) {
	$(".stage").append($(".space").clone().removeClass("space"));
	}

	if (e.which == 13) {
	$(".stage").append($(".enter").clone().removeClass("enter"));
	}

	if (e.which == 188) {
		if (lastLetter == 188 && lastletterpart == 'comma2') {
			$(".stage:last-child .comma_three").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 188 && lastletterpart == 'comma1') {
			$(".stage:last-child .comma_two").css("opacity",1);
			lastletterpart = 'comma2';
		} else {
			$(".stage").append($(".comma").clone().removeClass("comma"));
			lastLetter = 188;
			lastletterpart = 'comma1';

		}
	}

	if (e.which == 191) {
		console.log
		if (lastLetter == 191 && lastletterpart == 'question3') {
			$(".stage:last-child .question_four").css("opacity",1);
			lastLetter = false;
			lastletterpart = false;
		} else if (lastLetter == 191 && lastletterpart == 'question2') {
			$(".stage:last-child .question_three").css("opacity",1);
			lastletterpart = 'question3';
		} else if (lastLetter == 191 && lastletterpart == 'question1') {
			$(".stage:last-child .question_two").css("opacity",1);
			lastletterpart = 'question2';
		} else {
			$(".stage").append($(".question").clone().removeClass("question"));
			lastLetter = 191;
			lastletterpart = 'question1';
		}
	}
});

