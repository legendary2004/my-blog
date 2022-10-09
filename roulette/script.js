
var number = 0;


var money = 8000;
// red green black
var bets = [0,0,0];

var time = 200;


function reset() {
  $("#roulette .box").remove();
  let color;
  let numbers = [1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8,1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8,];

  for (var i = 0; i < 495; i++) {
        let number = numbers.splice(0, 1)[0];
        if (number === 0) color = "green";
        else if (number >= 8) color = "black";
        else color = "red";
        var element = `<div class="box ${color}" id="box${i}">${number}</div>`;
        $("#roulette").append(element);  
      }
        
  } 

  

      

    
  

    


reset();

function spin() {
  $('#result .box').remove();
  var rand = random(1000, (500-16) * 30);

  $("#roulette .box").first().animate({
    marginLeft: -rand
  }, 5000, "easeOutCubic", function() {
    var childNumber = Math.floor(rand / 70) + 8;
    var child = $("#box" + childNumber);
    checkBet(child);
    child.clone(function() {
      this.id = "won";
    }).appendTo("#result");
  })
}

function random(min, max) {
  return Math.floor(Math.random() * max - min) + min;
}

setInterval(function(){
  var cash = money/100;
  document.getElementById("money").innerHTML = "Coins: "+(money).toLocaleString()+" / ("+cash+"$)";
  var perc = time/200 * 800;
  document.getElementById("time").style.width = perc+"px";
  if (time > 0){
    time--;
  }
  if (time == 0){
    spin();
    time -= 1;
    
  }
}, 1000/20);

function bet(color,btn){
  var betSize = parseFloat(document.getElementById("betInput").value);
  
  if (money < betSize || !betSize) return;
  
  if (color == "r"){
    money -= betSize;
    bets[0] += betSize;
    var element = `<div class="betText"><span class="name">Bet placed</span>${betSize.toLocaleString()}</div>`
    $(element).appendTo($(btn).parent()).slideUp(1).slideDown(1000);
  }
  if (color == "g"){
    money -= betSize;
    bets[1] += betSize;
    var element = `<div class="betText"><span class="name">Bet placed</span>${betSize.toLocaleString()}</div>`
    $(element).appendTo($(btn).parent()).slideUp(1).slideDown(1000);
  }
  if (color == "b"){
    money -= betSize;
    bets[2] += betSize;
    var element = `<div class="betText"><span class="name">Bet placed</span>${betSize.toLocaleString()}</div>`
    $(element).appendTo($(btn).parent()).slideUp(1).slideDown(1000);
  }
}

function checkBet(result) {
  var color = $(result).attr('class').replace(/box /,"");
  if (color == "green"){
    money += bets[1] * 14;
  }
  if (color == "red"){
    money += bets[0] * 2;
  }
  if (color == "black"){
    money += bets[2] * 2;
  }
  
  $('.betText').slideDown(1000,function(){
    $(this).remove();
  })
  
  // document.getElementById("betInput").value = "";
  
  bets = [0,0,0];
  time = 200;
}