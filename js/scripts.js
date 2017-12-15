//business

function Album(title, artist,  year, image) {
  this.title = title;
  this.artist = artist;
  this.year = year;
  this.image = image;
}

function resetForm() {
  $('#album-title').val("");
  $('#artist').val("");
  $('#year').val("");
  $('#image').val("");
}

//front end
$(document).ready(function(){
  // $(".button-collapse").sideNav();
  $('#upload').click(function(event) {
    event.preventDefault();
    if (($("#album-title").val() === "") || ($("#artist").val() === "") || ($("#year").val() === "") || ($("#image").val() === "")) {
       alert('you did not fill out one of the fields');
       return false;
    } else {
      var title = $('#album-title').val();
      var artist = $('#artist').val();
      var year = $('#year').val();
      var image = $('#image').val();
      var albumItem = new Album(title, artist, year, image);
      $('.gallery-area').append('<div class="card">' +
                                  '<div class="card-image waves-effect waves-block waves-light">' +
                                    '<img class="activator"' +
                                    'src="' + albumItem.image + '">' +
                                  '</div>' +
                                  '<div class="card-content">' +
                                    '<span class="card-title activator grey-text text-darken-4">' + albumItem.artist + '<i class="material-icons right">more_vert</i></span>' +
                                  '</div>' +
                                  '<div class="card-reveal">' +
                                    '<span class="card-title grey-text text-darken-4">' + albumItem.title + '<i class="material-icons right">close</i></span>' +
                                    '<p>This album was released in ' + albumItem.year + '</p>' +
                                  '</div>');

    resetForm();
    $('.form-area').hide();
    }
  });
});
