<?php 
session_start();
$connect = mysql_connect('localhost','root','') or die(msyql_error());
if($connect){
	mysql_select_db('bornomala_db') or die(mysql_error());
}


?>