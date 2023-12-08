//Contact Page
function submitForm() {
    // Got values name, email, message from form tag 
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("userEmail").value;
    var message = document.getElementById("message").value;

    //If form is empty do alert asking user to fill in text field
    if ((fname === '') || (lname == '') || (email == '') || (message == '')) {
      alert('Please enter some text in the fields.');
      return false; // Prevent form submission
    }

    //If they have filled in the text field send this alert
    else{
      // Displays the data inputted by user
      alert( "Thank you! " + "" + fname + " your mesage has been sent");
    }
    

}
  
 
//Product Page
//Rent Button 
const rentButtons = document.querySelectorAll('.rentButton');

rentButtons.forEach(button => {
//When user clicks on a button the function is processed
button.addEventListener('click', function() {
  const dressId= Rhilestone-embellished;
});
});

//Alert user that they have rented a dress
function submitChoice(dressId) {
alert("You have rented the " + dressId + ". Thank you!");
}


//Testing randomization
// $("#myOutfits").click(function randomImages(params) {
//     //Actions
//     $(".myImages").hide();
// });


//Game Page
// jQuery code
$(document).ready(function() {
  // Event listener for the change event on the select element
  $("#myOutfits").change(function() {
      // Get the value from the option selected
      var selectedOutfit = $(this).val();

      // Gets the image from the source 'images folder' according to the selected outfit option and assigns the image to the option
      var imageSource = "images/" + selectedOutfit + ".jpg";
      $("#outfitImage").attr("src", imageSource);

      // Show the button when an option is selected
      $("#myButton").show();
  });
});

const imagePath = 'images';
//array to store the images
const imageArray = [
  'outfit1.jpg',
  'outfit2.jpg',
  'outfit3.jpg',
  'outfit4.jpg',
  'outfit5.jpg',
  'outfit6.jpg',
];

//A function to generate a random image, get the value of the option selected and compares it to the random image
function randomImage() {
  var selectedOutfit = $("#myOutfits").val();

  //Get a random image from the array by creating the random number based on the index of the images
  var randomIndex = Math.floor(Math.random() * imageArray.length)   ;
  //Get an image with the random index created
  var myRandomImage = imageArray[randomIndex];

  //Display the image generated
  document.getElementById("myImage").src = "images/" + myRandomImage;

  // Compare the selected image with the randomly generated one
  if (selectedOutfit === myRandomImage.replace('.jpg', '')) {
    $("#resultMessage").text("Congratulations! That's the next image");
    //show the play Again Button
    $("#playAgainButton").show();
  } else {
    $("#resultMessage").text("Oops! They don't match. Try again!");
    $("#playAgainButton").show();
  }
  
  // Hide the option to select the outfits after displaying the answer
  $("#myOutfits").hide();
  //Hide the button to prevent more random image generation
  $("#myButton").hide(); 

}

//Function to allow the user to play again
function playAgain(){
  //Reset the value of the option selected 
  $("#myOutfits").val("");

  //Clear the text in the h1 for the result 
  $("#resultMessage").text("");

  //Show the dropdown options
  $("#myOutfits").show();

  //Hide the playAgainButton
  $("#playAgainButton").hide(); 

  // Clear the images on the card
  $("#outfitImage").attr("src", "");
  $("#myImage").attr("src", "");
}
//function to compare the two images
// function compareImages() {
//   var selectedOutfit = $("#myOutfits").val();
//   var randomIndex = Math.floor(Math.random() * imageArray.length);
//   var myRandomImage = imageArray[randomIndex];

//   document.getElementById("myImage").src = "images/" + myRandomImage;

//   // Compare the selected image with the randomly generated one
//   if (selectedOutfit === myRandomImage) {
//       $("#resultMessage").text("Congratulations! They match!");
//   } else {
//       $("#resultMessage").text("Oops! They don't match. Try again!");
//   }
//}