/*

 *= require jquery.min


 */

$(document).ready(function() {

    var currentImage = 0;
    var imgArray = $("#photodisplay img").map(function() {
        return $(this).attr("src");
    });


    var changeBG = function(index) {
        var bg = "url(" + imgArray[index] + ")";
        $('#photodisplay').fadeOut('slow',
                                   function() {
                                       $(this).css("background-image",
                                                   bg).fadeIn('slow')
                                   }
                                  )};

    $('#next').on('click', function(e) {
        currentImage++;
        if (currentImage > imgArray.length -1 ) {
            currentImage = 0;
        }
        changeBG(currentImage);
    });


    $("#prev").click(function() {
        currentImage--;
        if (currentImage < 0 ) {
            currentImage = imgArray.length -1;
        }
        changeBG(currentImage);
    });
});
