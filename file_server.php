<?php
$file = $_FILES["file"]["tmp_name"];

move_uploaded_file($file,"./files/tmp_img.png");
echo("success");
?>