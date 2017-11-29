$(document).ready(function() {
  $("form#adopt").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#name").val();
    var addressline1Input = $("#addressline1").val();
    var addressline2Input = $("#addressline2").val();
    var cityInput = $("#city").val();
    var stateInput = $("#state").val();
    var zipcodeInput = $("#zipcode").val();
    var animalInput = $("#animal").val();
    $(".name").text(nameInput);
    $(".addressline1").text(addressline1Input);
    $(".addressline2").text(addressline2Input);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zipcode").text(zipcodeInput);
    $(".animal").text(animalInput);
    $("div.homepage").fadeOut();
    $("div.receipt").fadeIn();
    if (animalInput === "Lemmy the Lemur"){
      $("img#lemur").show();
    } else if (animalInput === "Yokai the LLama") {
      $("img#llama").show();
    } else if (animalInput === "Barry the Bear") {
      $("img#bear").show();
    } else if (animalInput === "Tony the Tiger (he's Great)"){
      $("img#tiger").show();
    }
  });
});
