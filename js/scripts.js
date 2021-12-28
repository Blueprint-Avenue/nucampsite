$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

// });

// $(document).ready(function(){
    $("#reserveButton").click(function(){
        // shows modal
        $("#reserveModal").modal('show');
    });
        // Hides the modal
         $(".close").click(function(){
             $("#reserveButton").modal("hide");
         });
         $("#loginButton").click(function(){
            // shows modal
            $("#loginModal").modal('show');
        });

});
