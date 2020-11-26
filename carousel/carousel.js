/*
***************************
*  SYLVAVIO's COMPONENT   * 
*  CAROUSEL v1.0          *
*                         *
*  Feel free to use       *
*                         *
*  And contact me         *
*  sylvavio@gmail.com     *     
*                         *
***************************
*/

// Variables

const numberOfslides = 3; /* ENTER HERE THE NUMBER OF SLIDES OF THE CAROUSEL */
const mobileBreakPoint = 550;   /* This value has to be the same as CSS $mobile-breakpoint variable*/



//  CODE

let slideToDisplay = 1;
$(document).ready(() => {
  // CAROUSEL
  // Resets CSS display of slides depending on responsive
  // Checks screen width onload :
  window.onload = () => {
    windowWidthCheck(mobileBreakPoint);
  };
  // Checks screen width on resize :
  $(window).resize(() => {
    windowWidthCheck(mobileBreakPoint);
  });

  function windowWidthCheck(mobileBreakPoint) {
    if ($(window).width() > mobileBreakPoint) {
      displayDiv(slideToDisplay);
    } else {
      $(".cc_slide__container").children().css("display", "flex");
    }
  }

  // Slide behaviour
  // prev click
  $("#cc_prev__button").on("click", () => {
    if (slideToDisplay > 1) {
      slideToDisplay--;
    } else {
      slideToDisplay = numberOfslides;
    }
    $(".cc_slide__container").addClass("cc_slide-in-left");
    displayBg(slideToDisplay);
    displayDiv(slideToDisplay);
    setTimeout(() => {
      $(".cc_slide__container").removeClass("cc_slide-in-left");
      $(".cc_slide__container").removeClass("cc_slide-in-right");
    }, 400);
  });

  // next click
  $("#next__button").on("click", () => {
    if (slideToDisplay < numberOfslides) {
      slideToDisplay++;
    } else {
      slideToDisplay = 1;
    }
    $(".cc_slide__container").addClass("cc_slide-in-right");
    displayBg(slideToDisplay);
    displayDiv(slideToDisplay);
    setTimeout(() => {
      $(".cc_slide__container").removeClass("cc_slide-in-left");
      $(".cc_slide__container").removeClass("cc_slide-in-right");
    }, 400);
  });

  // background
  function displayBg(number) {
    $("#cc_carousel").removeClass();
    $("#cc_carousel").addClass(createClassId(number));
  }
  // Div
  function displayDiv(number) {
    let slideId = `#${createClassId(number)}`;
    $(".cc_slide").css("display", "none");
    $(slideId).css("display", "flex");
  }

  function createClassId(number) {
    return (classIdOfslideToDisplay = "cc_slide" + number);
  }
});