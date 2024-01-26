$(document).ready(function() {
//     $("#stream1_btn").on("click", function() rewritten code below.
    $("#stream1_btn").mouseenter(function() {
     //    $(".stream1").removeClass('highlight_stream');
     //    $(".stream2").removeClass('highlight_stream');
     //    $(".stream3").removeClass('highlight_stream');
     //    $(".stream1").addClass('highlight_stream');
        $(".stream1").fadeTo(1000, 0.1);
   });

   $("#stream1_btn").mouseleave(function() {
        $(".stream1").fadeTo(1000, 1);
   });


   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 

