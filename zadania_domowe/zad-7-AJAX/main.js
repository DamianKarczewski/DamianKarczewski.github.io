 $(function () {

     $('#btn').click(function () {
         $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
             $(data).each(function (e, i) {
                 $('#btn').after("<div id=dane-programisty>" + "Imię: " + this.imie + ", Nazwisko: " + this.nazwisko + ", zawód: " + this.zawod + ", firma: " + this.firma + "</div>");
             });
         });
     });
 });