<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="box"></div>
    <input type="file" id="btn" id="btn">
   <!--  <button id="submit">上传</button> -->
</body>
</html>
<script>

var box=document.querySelector("box");
var btn=document.querySelector("btn");
var submit=document.querySelector("submit");
btn.onchang=function(e){
  var img=new Image();
  var target=e.target.files[0];
  var fd=new FileReader();
   fd.readerAsDataURL(target);
   fd.onload=function(){
    img.src=fd.reslut;
  }
  box.appendChild(img);
}



</script>