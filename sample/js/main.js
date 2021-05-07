$(window).ready(function(){
  console.log(window.location.hostname);
  if(window.location.hostname == "jiyeonkim.net") {
    $('body').attr("oncontextmenu", "return false");
    $('body').attr("onselectstart", "return false");
    $('body').attr("ondragstart", "return false");
  }

  $("#light-slider-footer").lightSlider({
    loop: true,
    auto: true,
    pause: 5000,
    slideMargin: 0
  });

  var $grid_home = $('#education .grid');
  $grid_home.imagesLoaded().progress(function() {
    $grid_home.masonry({
      itemSelector: '.grid-item-home'
    }).masonry('layout');;
  });

  var $grid_media_announcer = $('#media-image-announcer .grid');
  $grid_media_announcer.imagesLoaded().progress(function() {
    $grid_media_announcer.masonry({
      itemSelector: '.grid-item'
    }).masonry('layout');;
  });

   $('#media-image a').on('shown.bs.tab', function(e){
     console.log($(this).attr('href'));
     var target = $(this).attr('href');
     console.log($(target).children('.grid'));
     $(target).children('.grid').masonry({
       itemSelector: '.grid-item'
     }).masonry('layout');
   });

   // START GO TO TOP BTN
   //Get the button
   var mybutton = document.getElementById("btn-back-to-top");

   // When the user scrolls down 20px from the top of the document, show the button
   window.onscroll = function() {scrollFunction()};

   function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       mybutton.style.display = "block";
     } else {
       mybutton.style.display = "none";
     }
   }

   // When the user clicks on the button, scroll to the top of the document
   function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
   }

   $(mybutton).click(function(){
      topFunction();
   });
   // END GO TO TOP BTN

   // START IMG MODAL
  // Get the modal
  var modal = $("#modal-img");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var modalImg = $("#img01");
  var captionText = ("#caption");

  $('.img-zoomable').click(function(){
    modal.css('display','block');
    modalImg.attr('src', $(this).attr('src'));
    captionText.innerHTML = this.alt;
  });

  // When the user clicks on <span> (x), close the modal
  $(".btn-close").click(function(){
    modal.css('display', 'none');
  });
   // END IMG MODAL
});
