var pts_num = document.getElementsByClassName("pts_num")
var pts_0 = document.getElementById("pts+0")
var pts_0_5 = document.getElementById("pts+0.5")
var pts_1 = document.getElementById("pts+1")


pts_0.addEventListener("click", function(){
    pts_num = pts_num + 0
})
pts_0_5.addEventListener("click", function(){
    pts_num = pts_num + 0.5
})
pts_1.addEventListener("click", function(){
    pts_num = pts_num + 1
})