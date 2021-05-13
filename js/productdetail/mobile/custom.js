

// $('.main-gallery').flickity({
//   // options
//   cellAlign: 'left',
//   contain: true
// });




$(function () {
  // This button will increment the value
  $('.qtyplus').click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
      // Increment
      $('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
  // This button will decrement the value till 0
  $(".qtyminus").click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 0) {
      // Decrement one
      $('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
});


$(".aa_productdetail_box2_top_select1").on("click", function () {

  $('.aa_productdetail_box2_top_select1').css('border-bottom', '5px solid  var(--mainyellow)')

  $('.aa_productdetail_box2_top_select2').css('border-bottom', '0')
  $('.aa_productdetail_box2_top_select3').css('border-bottom', '0')



  $('.aa_productdetail_box2_top_detailed_box').css('display', 'block');

  $('.aa_productdetail_box2_feeding_box').css('display', 'none');

  $('.aa_productdetail_box2_evaluate_box').css('display', 'none');

  $('.aa_productdetail_box2_evaluation_box_mobile').css('display', 'none');
})



$(".aa_productdetail_box2_top_select2").on("click", function () {


  $('.aa_productdetail_box2_top_select2').css('border-bottom', '5px solid  var(--mainyellow)')

  $('.aa_productdetail_box2_top_select1').css('border-bottom', '0')
  $('.aa_productdetail_box2_top_select3').css('border-bottom', '0')



  $('.aa_productdetail_box2_feeding_box').css('display', 'block');

  $('.aa_productdetail_box2_top_detailed_box').css('display', 'none');

  $('.aa_productdetail_box2_evaluate_box').css('display', 'none');

  $('.aa_productdetail_box2_evaluation_box_mobile').css('display', 'none');

})


$(".aa_productdetail_box2_top_select3").on("click", function () {

  $('.aa_productdetail_box2_top_select3').css('border-bottom', '5px solid  var(--mainyellow)')

  $('.aa_productdetail_box2_top_select2').css('border-bottom', '0')
  $('.aa_productdetail_box2_top_select1').css('border-bottom', '0')



  $('.aa_productdetail_box2_evaluate_box').css('display', 'block');



  $('.aa_productdetail_box2_top_detailed_box').css('display', 'none');

  $('.aa_productdetail_box2_feeding_box').css('display', 'none');

  $('.aa_productdetail_box2_evaluation_box_mobile').css('display', 'block');

})