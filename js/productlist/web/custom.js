$('.n_product_bg').mouseenter(function () {
    $(this).css('filter', 'brightness(90%)').find('.n_booking_buttonweb').css('background', '#F9DD83').css('color', 'grey')

})

$('.n_product_bg').mouseleave(function () {
    $(this).css('filter', 'brightness(100%)').find('.n_booking_buttonweb').css('background', 'transparent').css('color', 'transparent')

})


let heart = document.getElementsByClassName('heart-button')
for (let h of heart) {


    h.addEventListener("click", function (e) {
        // h.style.transform = "scale(1.2)";
        h.classList.toggle('n_heart_color')
        // h.classList.toggle("#span_big");

        console.log(h)
    });
}


// function mybuttonFunction() {
//     var c = document.getElementsByClassName("n_product_bg");
//     if (c.style.display === "none") {
//         c.style.display = "block";
//         console.log(c);
//     } else {
//         c.style.display = "none";

//     }


// }




// $('.n_booking_buttonweb').mouseenter(function () {
//     $(this).css('background', '#F9DD83').css('color', 'grey').show()
// })

// $('.n_booking_buttonweb').mouseleave(function () {
//     $(this).css('background', 'transparent').css('color', 'transparent').show()

// })






// $('.heart-button').click(function () {
//     $(this).css('fill', '#FF9A9A');

// });
// $('.n_icon-heart').mouseleave(function () {
//     $(this).css('fill', '#ccc')
// })