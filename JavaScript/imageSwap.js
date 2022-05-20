function cycleImages(){
      var $active = $('#cycler .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first'); //grabs first image and makes it active
      $next.css('z-index',2); //move the next image up the pile
      $active.fadeOut("fast",function(){ //fade out the top image
	  $active.css('z-index',1).show().removeClass('active'); //reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active'); //make the next image the top one
      });
    }

$(document).ready(function(){

setInterval('cycleImages()', 15000);
})
