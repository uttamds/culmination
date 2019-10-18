
<?php
header("Access-Control-Allow-Origin: *");

foreach($_POST as $post_var){
    echo strtoupper($post_var). "</b>";
}


?>