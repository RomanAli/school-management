<?php 
session_start();
$_SESSION['logged_in'] = false;
$_SESSION['username'] = null;
session_destroy();
header('location: login.php');

?>