function getDogImage(){
    var request=$.ajax({
        url:"https://dog.ceo/dog-api/",
        method:"GET"
    })
    request.done(function(response){
        console.log(response);
        var img=$('<img/>').attr('src',response.message)
    })
}