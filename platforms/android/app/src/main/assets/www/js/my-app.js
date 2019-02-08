// Dom7
var $$ = Dom7;



(function() {
  "use strict";
  // Initialize your app
  var myApp = new Framework7({
    material: true,
    fastClicks:true,
    modalTitle: 'E-BIN',
    init: false,
    animateNavBackIcon: true,
  });

  // Export selectors engine
  var $$ = Dom7;

  // Add view
  var mainView = myApp.addView('.view-main', {
      // Because we use fixed-through navbar we can enable dynamic navbar
      dynamicNavbar: true
  });

  // Callbacks to run specific code for specific pages, for example for About page:
  myApp.onPageInit('about', function (page) {
      // run createContentPage func after link was clicked
      $$('.create-page').on('click', function () {
          createContentPage();
      });
  });
  // Show/hide preloader for remote ajax loaded pages
  // Probably should be removed on a production/local app
  $$(document).on('ajaxStart', function (e) {
      myApp.showIndicator();
  });
  $$(document).on('ajaxComplete', function () {
      myApp.hideIndicator();
  });
  // Generate dynamic page
  var dynamicPageIndex = 0;
  function createContentPage() {
  	mainView.router.loadContent(
          '<!-- Top Navbar-->' +
          '<div class="navbar">' +
          '  <div class="navbar-inner">' +
          '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
          '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
          '  </div>' +
          '</div>' +
          '<div class="pages">' +
          '  <!-- Page, data-page contains page name-->' +
          '  <div data-page="dynamic-pages" class="page">' +
          '    <!-- Scrollable page content-->' +
          '    <div class="page-content">' +
          '      <div class="content-block">' +
          '        <div class="content-block-inner">' +
          '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
          '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
          '        </div>' +
          '      </div>' +
          '    </div>' +
          '  </div>' +
          '</div>'
      );
  	return;
  }
//our main Js
  $(document).on('pageInit', function(e) {
    // main-page swiper
    var swiper = new Swiper('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            paginationClickable: false,
            spaceBetween: 0,
            loop: true,
        });
        //services swiper
        var swiper = new Swiper('.services-swiper-container', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 1,
                paginationClickable: false,
                spaceBetween: 0,
                loop: true,
            });
      //swipebox
      var swipebox=$( '.swipebox' ).swipebox();
      //item swiper
      var swiper = new Swiper('.item-slide', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
      });
      //picker color
      var pickerDevice = myApp.picker({
          input: '#picker-color',
          cols: [
              {
                  textAlign: 'center',
                  values: ['Black', 'Blue', 'Brown', 'White', 'Yellow', 'Red']
              }
          ]
      });
      //picker size
      var pickerDevice = myApp.picker({
          input: '#picker-size',
          cols: [
              {
                  textAlign: 'center',
                  values: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
              }
          ]
      });
  });
  myApp.init();
  myApp.onPageInit('main', function (page) {
      // run createContentPage func after link was clicked
      $$("#barcodescanner").click(function()
  {
    cordova.plugins.barcodeScanner.scan(
      function (result) {
          /*myApp.alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);*/
                $$("#scannedcode").text(result.text);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
  });
  });
  

 })();
