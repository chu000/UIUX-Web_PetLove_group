let heart = document.getElementsByClassName('heart-button')
for (let h of heart) {


    h.addEventListener("click", function (e) {
        // h.style.transform = "scale(1.2)";
        h.classList.toggle('n_heart_color')
        // h.classList.toggle("#span_big");

        console.log(h)
    });
}


$('.n_col').click(function () {

    $(this).children().css('color', '#89a7c2')
    $(this).siblings().children().css('color', '#ccc')
})


$('.n_col_2').click(function () {

    $(this).children().css('border-bottom', '3px solid var(--mainyellow)')
    $(this).siblings().children().css('border', 'none')
})

$('.n_category01-1').click(function () {

    $('.n_category02.first').css('display', 'flex')

    $('.n_category02.second').css('display', 'none')
    $('.n_category02.third').css('display', 'none')
})


$('.n_category01-2').click(function () {

    $('.n_category02.second').css('display', 'flex')

    $('.n_category02.first').css('display', 'none')
    $('.n_category02.third').css('display', 'none')
})


$('.n_category01-3').click(function () {

    $('.n_category02.third').css('display', 'flex')

    $('.n_category02.first').css('display', 'none')
    $('.n_category02.second').css('display', 'none')
})