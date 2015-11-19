$(document).ready(function(){
  $("#home").click(function() {
      $('html, body').animate({
          scrollTop: $("#home-div").offset().top
      }, 1000);
  });

  $("#our-team").click(function() {
    $('html,body').animate({
      scrollTop: $('#our-team-div').offset().top
    }, 1000);
  });

  $("#portfolio").click(function() {
    $('html,body').animate({
      scrollTop: $('#portfolio-div').offset().top
    }, 1000);
  });

  $("#contactus").click(function() {
    $('html,body').animate({
      scrollTop: $('#contactus-div').offset().top
    }, 1000);
  });
});
// call img by id on mouse leave change it back

function changeOne() {
	document.getElementById("pic1").src= "images/w2.jpg"
}

function changeBack() {
	document.getElementById("pic1").src="images/w5.jpg"
}

function changeTwo() {
	document.getElementById("pic2").src= "images/m1.jpg"
}

function changeBack2() {
	document.getElementById("pic2").src="images/w5.jpg"
}
function changeThree() {
	document.getElementById("pic3").src= "images/m2.jpg"
}

function changeBack3() {
	document.getElementById("pic3").src="images/w5.jpg"
}
function changeFour() {
	document.getElementById("pic4").src= "images/m3.jpg"
}

function changeBack4() {
	document.getElementById("pic4").src="images/w5.jpg"
}
// $(document).ready(function() {
// 	$('#pic1').mouseenter(function() {
// 		(this).src("images/IMG_0539.jpg");
// 	})
// })

$(document).ready(function(){

$( "#puppies" ).click(function() {
  $( "#puppies" ).animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    height: "3em"
  }, 1500 );
});
});

$(document).ready(function() {
$('#img1').hover(

  function() {
   	$('#hidden_text_1').fadeIn(1000)        
  },

  function() {
    $('#hidden_text_1').fadeOut(100)
  }

 );


	$('#img2').hover(

  function() {
   	$('#hidden_text_2').fadeIn(1000)        
  },

  function() {
    $('#hidden_text_2').fadeOut(100)
  }

  );

  $('#img3').hover(

  function() {
   	$('#hidden_text_3').fadeIn(1000)        
  },

  function() {
    $('#hidden_text_3').fadeOut(100)
  }

  );

  $('#img4').hover(

  function() {
   	$('#hidden_text_4').fadeIn(1000)        
  },

  function() {
    $('#hidden_text_4').fadeOut(100)
  }

 );

	$('#img5').hover(

  function() {
   	$('#hidden_text_5').fadeIn(1000)        
  },

  function() {
    $('#hidden_text_5').fadeOut(100)
  }

 );

	$('#img6').hover(

  	function() {
   		$('#hidden_text_6').fadeIn(1000)        
  	},

  	function() {
    	$('#hidden_text_6').fadeOut(100)
  	}

	);   

	$('#img7').hover(

  	function() {
   		$('#hidden_text_7').fadeIn(1000)        
  	},

  	function() {
    	$('#hidden_text_7').fadeOut(100)
  	}

	); 

	$('#img8').hover(

  	function() {
   		$('#hidden_text_8').fadeIn(1000)        
  	},

  	function() {
    	$('#hidden_text_8').fadeOut(100)
  	}

	); 	

	$('#img9').hover(

  	function() {
   		$('#hidden_text_9').fadeIn(1000)        
  	},

  	function() {
    	$('#hidden_text_9').fadeOut(100)
  	}

	); 
});