function fn(a){
    var b=a.innerHTML;
    var c=document.getElementById("play");
    var d="./music/"+b+".mp3";
    c.setAttribute("src",d);
    player.load();
    player.play();
}
function test(){
    var search=document.getElementById("search");
    var search1=search.value;
    var d="./music/"+search1+" .mp3";
    var c=document.getElementById("play");
    c.setAttribute("src",d);
    player.load();
    player.play();
}
