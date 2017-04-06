var lastLetter = false;


$(window).keypress(function(e) {
console.log(e.which);

	if (e.which == 61) {
		if (lastLetter = 97) {
			$(".stage:last-child .a_two").remove();
			$(".stage:last-child .a_one").remove();
		}

		if (lastLetter = 98) {
			$(".stage:last-child .b_two").remove();
			$(".stage:last-child .b_one").remove();
		} 

		if (lastLetter = 99) {
			$(".stage:last-child .c_two").remove();
			$(".stage:last-child .c_one").remove();
		}

		if (lastLetter = 100) {
			$(".stage:last-child .d_two").remove();
			$(".stage:last-child .d_one").remove();
		}

		if (lastLetter = 101) {
			$(".stage:last-child .e_four").remove();
			$(".stage:last-child .e_three").remove();
			$(".stage:last-child .e_two").remove();
			$(".stage:last-child .e_one").remove();
		}

		if (lastLetter = 102) {
			$(".stage:last-child .f_two").remove();
			$(".stage:last-child .f_one").remove();
		}

		if (lastLetter = 103) {
			$(".stage:last-child .g_four").remove();
			$(".stage:last-child .g_three").remove();
			$(".stage:last-child .g_two").remove();
			$(".stage:last-child .g_one").remove();
		}

		if (lastLetter = 104) {
			$(".stage:last-child .h_four").remove();
			$(".stage:last-child .h_three").remove();
			$(".stage:last-child .h_two").remove();
			$(".stage:last-child .h_one").remove();
		}

		if (lastLetter = 105) {
			$(".stage:last-child .i_one").remove();
		}

		if (lastLetter = 106) {
			$(".stage:last-child .j_two").remove();
			$(".stage:last-child .j_one").remove();
		}

		if (lastLetter = 107) {
			$(".stage:last-child .k_two").remove();
			$(".stage:last-child .k_one").remove();
		}

		if (lastLetter = 108) {
			$(".stage:last-child .l_two").remove();
			$(".stage:last-child .l_one").remove();
		}

		if (lastLetter = 109) {
			$(".stage:last-child .m_two").remove();
			$(".stage:last-child .m_one").remove();
		}

		if (lastLetter = 110) {
			$(".stage:last-child .n_two").remove();
			$(".stage:last-child .n_one").remove();
		}

		if (lastLetter = 111) {
			$(".stage:last-child .o_four").remove();
			$(".stage:last-child .o_three").remove();
			$(".stage:last-child .o_two").remove();
			$(".stage:last-child .o_one").remove();
		}

		if (lastLetter = 112) {
			$(".stage:last-child .p_two").remove();
			$(".stage:last-child .p_one").remove();
		}

		if (lastLetter = 113) {
			$(".stage:last-child .q_two").remove();
			$(".stage:last-child .q_one").remove();
		}

		if (lastLetter = 114) {
			$(".stage:last-child .r_three").remove();
			$(".stage:last-child .r_two").remove();
			$(".stage:last-child .r_one").remove();
		}

		if (lastLetter = 115) {
			$(".stage:last-child .s_three").remove();
			$(".stage:last-child .s_two").remove();
			$(".stage:last-child .s_one").remove();
		}

		if (lastLetter = 116) {
			$(".stage:last-child .t_four").remove();
			$(".stage:last-child .t_three").remove();
			$(".stage:last-child .t_two").remove();
			$(".stage:last-child .t_one").remove();
		}

		if (lastLetter = 117) {
			$(".stage:last-child .u_four").remove();
			$(".stage:last-child .u_three").remove();
			$(".stage:last-child .u_two").remove();
			$(".stage:last-child .u_one").remove();
		}

		if (lastLetter = 118) {
			$(".stage:last-child .v_two").remove();
			$(".stage:last-child .v_one").remove();
		}

		if (lastLetter = 119) {
			$(".stage:last-child .w_four").remove();
			$(".stage:last-child .w_three").remove();
			$(".stage:last-child .w_two").remove();
			$(".stage:last-child .w_one").remove();
		}

		if (lastLetter = 120) {
			$(".stage:last-child .x_four").remove();
			$(".stage:last-child .x_three").remove();
			$(".stage:last-child .x_two").remove();
			$(".stage:last-child .x_one").remove();
		}

		if (lastLetter = 121) {
			$(".stage:last-child .y_four").remove();
			$(".stage:last-child .y_three").remove();
			$(".stage:last-child .y_two").remove();
			$(".stage:last-child .y_one").remove();
		}

		if (lastLetter = 122) {
			$(".stage:last-child .z_three").remove();
			$(".stage:last-child .z_two").remove();
			$(".stage:last-child .z_one").remove();
		}
	}

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

	if (e.which == 111 || e.which == 78) {
		if (lastLetter == 111) {
			$(".stage:last-child .o_two").css("opacity",1);
		} 
		if (lastLetter == 111) {
			$(".stage:last-child .o_three").css("opacity",1);
		}
		if (lastLetter == 111) {
			$(".stage:last-child .o_four").css("opacity",1);
			lastLetter = false;
		}else {
			$(".stage").append($(".o").clone().removeClass("o"));
			lastLetter = 111;
		}
	}

	if (e.which == 112 || e.which == 77) {
		if (lastLetter == 112) {
			$(".stage:last-child .p_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".p").clone().removeClass("p"));
			lastLetter = 112;
		}
	}

	if (e.which == 113 || e.which == 78) {
		if (lastLetter == 113) {
			$(".stage:last-child .q_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".q").clone().removeClass("q"));
			lastLetter = 113;
		}
	}

	if (e.which == 114 || e.which == 79) {
		if (lastLetter == 114) {
			$(".stage:last-child .r_two").css("opacity",1);
		}
		if (lastLetter == 114) {
			$(".stage:last-child .r_three").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".r").clone().removeClass("r"));
			lastLetter = 114;
		}
	}

	if (e.which == 115 || e.which == 80) {
		if (lastLetter == 115) {
			$(".stage:last-child .s_two").css("opacity",1);
		} 
		if (lastLetter == 115) {
			$(".stage:last-child .s_three").css("opacity",1);
		}
		if (lastLetter == 115) {
			$(".stage:last-child .s_four").css("opacity",1);
			lastLetter = false;
		}else {
			$(".stage").append($(".s").clone().removeClass("s"));
			lastLetter = 115;
		}
	}

	if (e.which == 116 || e.which == 80) {
		if (lastLetter == 116) {
			$(".stage:last-child .t_two").css("opacity",1);
		} 
		if (lastLetter == 116) {
			$(".stage:last-child .t_three").css("opacity",1);
		}
		if (lastLetter == 116) {
			$(".stage:last-child .t_four").css("opacity",1);
			lastLetter = false;
		}else {
			$(".stage").append($(".t").clone().removeClass("t"));
			lastLetter = 116;
		}
	}

	if (e.which == 117 || e.which == 81) {
		if (lastLetter == 117) {
			$(".stage:last-child .u_two").css("opacity",1);
		} 
		if (lastLetter == 117) {
			$(".stage:last-child .u_three").css("opacity",1);
		}
		if (lastLetter == 117) {
			$(".stage:last-child .u_four").css("opacity",1);
			lastLetter = false;
		}else {
			$(".stage").append($(".u").clone().removeClass("u"));
			lastLetter = 117;
		}
	}

	if (e.which == 118 || e.which == 82) {
		if (lastLetter == 118) {
			$(".stage:last-child .v_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".v").clone().removeClass("v"));
			lastLetter = 118;
		}
	}

	if (e.which == 119 || e.which == 83) {
		if (lastLetter == 119) {
			$(".stage:last-child .w_two").css("opacity",1);
		} 
		if (lastLetter == 119) {
			$(".stage:last-child .w_three").css("opacity",1);
		}
		if (lastLetter == 119) {
			$(".stage:last-child .w_four").css("opacity",1);
			lastLetter = false;
		}else {
			$(".stage").append($(".w").clone().removeClass("w"));
			lastLetter = 119;
		}
	}

	if (e.which == 120 || e.which == 84) {
		if (lastLetter == 120) {
			$(".stage:last-child .x_two").css("opacity",1);
		} 
		if (lastLetter == 120) {
			$(".stage:last-child .x_three").css("opacity",1);
		}
		if (lastLetter == 120) {
			$(".stage:last-child .x_four").css("opacity",1);
			lastLetter = false;
		}else {
			$(".stage").append($(".x").clone().removeClass("x"));
			lastLetter = 120;
		}
	}

	if (e.which == 121 || e.which == 85) {
		if (lastLetter == 121) {
			$(".stage:last-child .y_two").css("opacity",1);
		} 
		if (lastLetter == 121) {
			$(".stage:last-child .y_three").css("opacity",1);
		}
		if (lastLetter == 121) {
			$(".stage:last-child .y_four").css("opacity",1);
			lastLetter = false;
		}else {
			$(".stage").append($(".y").clone().removeClass("y"));
			lastLetter = 121;
		}
	}

	if (e.which == 122 || e.which == 86) {
		if (lastLetter == 122) {
			$(".stage:last-child .z_two").css("opacity",1);
		}
		if (lastLetter == 122) {
			$(".stage:last-child .z_three").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".z").clone().removeClass("z"));
			lastLetter = 122;
		}
	}

	if (e.which == 46) {
		if (lastLetter == 46) {
			$(".stage:last-child .period_two").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".period").clone().removeClass("period"));
			lastLetter = 46;
		}
	}

	if (e.which == 32) {
	$(".stage").append($(".space").clone().removeClass("space"));
	}

	if (e.which == 13) {
	$(".stage").append($(".enter").clone().removeClass("enter"));
	}

	if (e.which == 44) {
		if (lastLetter == 44) {
			$(".stage:last-child .comma_two").css("opacity",1);
		}
		if (lastLetter == 44) {
			$(".stage:last-child .comma_three").css("opacity",1);
			lastLetter = false;
		} else {
			$(".stage").append($(".comma").clone().removeClass("comma"));
			lastLetter = 44;
		}
	}

	if (e.which == 63) {
		if (lastLetter == 63) {
			$(".stage:last-child .question_two").css("opacity",1);
		} 
		if (lastLetter == 63) {
			$(".stage:last-child .question_three").css("opacity",1);
		}
		if (lastLetter == 63) {
			$(".stage:last-child .question_four").css("opacity",1);
			lastLetter = false;
		}else {
			$(".stage").append($(".question").clone().removeClass("question"));
			lastLetter = 63;
		}
	}
});

