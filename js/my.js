/* привет тебе незнакомец, сочувствую, ибо сайт делал на скорую руку, и поверишь ли — бесплатно!*/
// прости...
$(document).ready(function() {
	

$(window).scroll(function() {
	var wScroll =  $(this).scrollTop();


// features elements
	if (wScroll > ($('.features_trigger').offset().top - ($(window).height()/2))){
		$('.features_element').each(function(index) {
			setTimeout(function(){
				$('.features_element').eq(index).addClass('show rotate');
			}, 100 * (index + 1))
		});
	};

// razbor img
	if (wScroll > ($('.razbor_trigger').offset().top - ($(window).height()/2))){
		$('.razbor_img').each(function(index) {
			setTimeout(function(){
				$('.razbor_img').eq(index).addClass('show');
			}, 100 * (index + 1))
		});
	};


// blocks img
	if (wScroll > ($('.blocks_trigger').offset().top - ($(window).height()/2))){
		$('.block_element').each(function(index) {
			setTimeout(function(){
				$('.block_element').eq(index).addClass('show');
			}, 100 * (index + 1))
		});
	};	

// complect img show
	if (wScroll > ($('.complect_trigger').offset().top - ($(window).height()/2))){
		$('.compl_element').each(function(index) {
			setTimeout(function(){
				$('.compl_element').eq(index).addClass('show');
			}, 100 * (index + 1))
		});
		$('.tomato_container').addClass('fly');
	};	

// char element show
	if (wScroll > ($('.char_trigger').offset().top - ($(window).height()/2))){
		$('.char_element').each(function(index) {
			setTimeout(function(){
				$('.char_element').eq(index).addClass('show');
			}, 100 * (index + 1))
		});
	};		

// cucumber element show
  if (wScroll > ($('.cucumber_trigger').offset().top - ($(window).height()/2))){
    $('.cucumber').each(function(index) {
      setTimeout(function(){
        $('.cucumber').eq(index).addClass('show');
      }, 5000 * (index + 1))
    });
  };    






});//$(window).scroll-function END





// ########   #######   ######  ########
// ##     ## ##     ## ##    ##    ##
// ##     ## ##     ## ##          ##
// ########  ##     ##  ######     ##
// ##        ##     ##       ##    ##
// ##        ##     ## ##    ##    ##
// ##         #######   ######     ##

  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('.form_hidden_wrapper').removeClass('show_form');
      succsess();

    });
    return false;

  });


  $("#form_top").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('.form_hidden_wrapper').removeClass('show_form');
      succsess();
    });
    return false;

  });


  $("#form_hidden").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('.form_hidden_wrapper').removeClass('show_form');
      succsess();
    });
    return false;

  });


function succsess(){
	$('.succsess_wrapper').addClass('succses_show');
	setTimeout(function(){
		$('.succsess_wrapper').removeClass('succses_show');
	},5000);
};



// ########  #######  ##     ##    ###    ########  #######
//    ##    ##     ## ###   ###   ## ##      ##    ##     ##
//    ##    ##     ## #### ####  ##   ##     ##    ##     ##
//    ##    ##     ## ## ### ## ##     ##    ##    ##     ##
//    ##    ##     ## ##     ## #########    ##    ##     ##
//    ##    ##     ## ##     ## ##     ##    ##    ##     ##
//    ##     #######  ##     ## ##     ##    ##     #######

// летающая помидорка
$('.show_btn').click(function(event) {
	$('.form_hidden_wrapper').addClass('show_form');
});
$('.close').click(function(event) {
	$('.form_hidden_wrapper').removeClass('show_form');
	$('.succsess_wrapper').removeClass('succses_show');
});

/*ахахахах, вот такое все костылявое, добавляется второй класс с дисплей-ноне, чтобы кровяка не перехватывала фокус на экране, еще раз ахахахаха*/
// большой привет тому, кто это будет поддерживать в дальшейшем
$('.tomato_container').click(function(event) {
  $('.tomato_container').hide('fast', function() {
    $('.bloody').addClass('bloody_show');
    setTimeout(bloodyHide, 3000);
    setTimeout(bloodyHide2, 5000); 
    function bloodyHide(){
      $('.bloody').addClass('bloody_sweep');
    };
    function bloodyHide2(){
      $('.bloody').addClass('bloody_sweep2');
    };
  });
});


}); //$(document).ready-func END




/*
 ######   #######  ##     ## ##    ## ######## ########   #######  ##      ## ##    ##
##    ## ##     ## ##     ## ###   ##    ##    ##     ## ##     ## ##  ##  ## ###   ##
##       ##     ## ##     ## ####  ##    ##    ##     ## ##     ## ##  ##  ## ####  ##
##       ##     ## ##     ## ## ## ##    ##    ##     ## ##     ## ##  ##  ## ## ## ##
##       ##     ## ##     ## ##  ####    ##    ##     ## ##     ## ##  ##  ## ##  ####
##    ## ##     ## ##     ## ##   ###    ##    ##     ## ##     ## ##  ##  ## ##   ###
 ######   #######   #######  ##    ##    ##    ########   #######   ###  ###  ##    ##
 */





function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },countDown:function(){
  var timer='';
  var today=new Date();
  var day=Math.floor((this.tl-today)/(24*60*60*1000));
  var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  var me=this;

  if( ( this.tl - today ) > 0 ){
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">ДНИ</div><span class="number day">'+day+'</span></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">ЧАСЫ</div><span class="number hour">'+hour+'</span></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">МИН</div><span class="number min">'+this.addZero(min)+'</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">СЕК</div><span class="number sec">'+this.addZero(sec)+'</span></span>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
function CDT(){

 // Set countdown limit
 var tl = new Date('2019/05/09 00:00:00');

 // You can add time's up message here
  var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div></span>');
  timer.countDown();
}
window.onload=function(){
 CDT();
}

