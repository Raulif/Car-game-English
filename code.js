var carState = false;
var fuel = 0;

//Hover function over buttons:
$(document).ready(function(){
  $("button").hover(
    function(){
      $(this).addClass("highlight");
    },
    function(){
      $(this).removeClass("highlight");
    }
  );




  //START car.
  $("#start-btn").click(function(){
    if(checkFuel()){
      carState = true;
      document.getElementById("outputBox").value="Car is ON";
      $("#start-btn").addClass("start-on");
      $("#stop-btn").removeClass("stop-on");
    }
    else {
      document.getElementById("outputBox").value="You need fuel to start the car";
    }
  });

  //STOP button.
  $("#stop-btn").click(function(){
    if(carState == false){
      document.getElementById("outputBox").value="Car is already off!.";
    }
    else {
      carState = false;
      document.getElementById("outputBox").value="Car is OFF";
      $("#stop-btn").addClass("stop-on");
      $("#start-btn").removeClass("start-on");
    }
  });

  //Flip the car:
  $("#turn-btn").click(function(){
    console.log("Car is " + carState);
    if(checkCarState()){
      document.getElementById("outputBox").value="You need to stop the car before turning.";
    }
    else {
      if (!$("#car-icon").hasClass("car-back")){
        $("#car-icon").addClass("car-back");
      }
      else {
        $("#car-icon").removeClass("car-back");
      }
    }
  });

  //Add fuel:
  $("#addFuel-btn").click(function(){
    if (fuel < 3){
      fuel++;
      document.getElementById("outputBox").value="Fuel is " + fuel;
    } else {
      document.getElementById("outputBox").value="Fuel is at max! Have a drive and try again later.";
    }
  });

  //Drive back and forth:
  $("#drive-btn").click(function(){
    if(!checkCarState()){
      document.getElementById("outputBox").value="You have to switch ON the car first.";
    } else {
        if(!$("#car-icon").hasClass("Moved")){
          driveRight();
        } else {
          driveLeft();
        }
        stopIfNoFuel();
      }
  });
});

//Check if car is ON:
function checkCarState(){
  if (carState == true){
    return true;
  } else {
    return false;
  }
};

//Check if there is Fuel:
function checkFuel(){
  if (fuel > 0){
    return true;
  } else {
    return false;
  }
};

//Stop the car if there is no fuel:
function stopIfNoFuel(){
  if (!checkFuel()){
    stopCar();
  }
  else {
    return true;
  }
};

//STOP the car:
function stopCar(){
  if(carState == false){
    document.getElementById("outputBox").value="Car is already off!";
  }
  else {
    carState = false;
    console.log("Car is " + carState);
    $("#stop-btn").addClass("stop-on");
    $("#start-btn").removeClass("start-on");
  }
};

//Check if car faces right:
function carLookingFront(){
  if(!$("#car-icon").hasClass("car-back")){
    return true;
  } else {
    return false;
  }
};

//Drive to the right:
function driveRight(){
  if(!carLookingFront()){
    document.getElementById("outputBox").value="You need to turn the car first.";
    return false;
  } else {
    $("#car-icon").animate({
    right: "0"                                                                //Drive to the right.
    }, 1500).addClass("Moved").css({left: ''});
    document.getElementById("outputBox").value="Car goes wiiiiiiiiiii!!!!!";
    fuel--;
    console.log("Fuel is " + fuel);
  }
};

//Drive to the left:
function driveLeft(){
  if(carLookingFront()){
    document.getElementById("outputBox").value="You need to turn the car first.";
    return false;
  } else {
    $("#car-icon").animate({
    left: "0"                                                                 //Drive to the left.
    }, 1500).removeClass("Moved").css({right: ''});
    document.getElementById("outputBox").value="Car goes wiiiiiiiiiii!!!!!";
    fuel--;
    console.log("Fuel is " + fuel);
  }
};
