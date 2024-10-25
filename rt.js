
      var start =new Date().getTime();
function move(){
    var left=Math.random()*300;
    var top=Math.random()*300;
    var wh=((Math.random()*400)+100)
    console.log(left,top,wh)
document.getElementById("box").style.left=left +"px";

document.getElementById("box").style.top=top +"px";
document.getElementById("box").style.width=wh +"px";
start =new Date().getTime();
}

        document.getElementById("submit").onclick = function() {
            document.getElementById("box").style.display="block";




        }

        move();
       
            document.getElementById("box").onclick = function() {
               
                let  end = new Date().getTime();
                let reaction=(end-start)/1000;
                console.log(reaction)
                document.getElementById("reactionTime").innerHTML = reaction;
move()
getRandomColor()
        }


        function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; // eg: letter[1]=0 / letter[16]=F
  }
  document.getElementById("box").style.backgroundColor=color;
}

