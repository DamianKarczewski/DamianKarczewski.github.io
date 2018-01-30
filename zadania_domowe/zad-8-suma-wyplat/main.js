 $(function () {
     var sum = 0;
     $('#count-sum').click(function () {
         $(".salary").each(function () {
             sum = sum + parseInt($(this).text());
             $("#sum").text(sum);
         })
     });
 });
