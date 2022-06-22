
	var music = document.getElementById("audio");
	var mico = document.getElementsByClassName("music")[0];

	function play() {
		if(music.paused) {
			music.play();
			mico.style.backgroundImage = "url(img/paused.png)";
		} else {
			music.pause();
			mico.style.backgroundImage = "url(img/play.png)";
		}
	}

	$(function() {
		$("#nav a").eq(0).css("color", "#f8e478");
		$("#nav a").click(function() {
			$(this).css("color", "#f8e478").siblings("a").css("color", "white");
		})
	})

	var bigbox = document.getElementById("frame");

	function item1() {
		bigbox.style.transform = "translateX(0%)";
	}

	function item2() {
		bigbox.style.transform = "translateX(-25%)";
	}

	function item3() {
		bigbox.style.transform = "translateX(-50%)";
	}

	function item4() {
		bigbox.style.transform = "translateX(-75%)";
	}

	$(function() {
		$(".lei-d").css("opacity", "0");

		$(".char2").each(function(i, ele) {

			$(ele).click(function() {
				$(".char2").css("opacity", "1");
				$(".char2").eq(i).css("opacity", "0");
				$(".char-big").eq(i).addClass("char-choose").removeClass("char-no").siblings(".char-big").removeClass("char-choose").addClass("char-no");
			})

		})
	})

	$(function() {
		$(".min-d").eq(0).css("opacity", "0");

		$(".min-d").each(function(i, ele) {

			$(ele).click(function() {
				$(".min-d").css("opacity", "1");
				$(".min-d").eq(i).css("opacity", "0");
				$(".st-body").css("backgroundImage", "url(img/game" + (i + 1) + ".jpg)");
			})
		})
	})

	$(function() {
		$("#tobecome").hide();

		$(".come").click(function() {
			$("#tobecome").fadeIn();
		})

		$(".close").click(function() {
			$("#tobecome").fadeOut();
		})
	})

	$(function() {
		var s = 1;
		$(".next").stop().click(function() {
			s++;
			if(s > 3) {
				s = 1;
			}
			$(".story").css("backgroundImage", "url(img/story" + s + ".png)")
		})
	})
