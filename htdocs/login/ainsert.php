<html>
<head>
</head>
<body bgcolor="orange">
<?php

	$cn = mysql_connect('localhost', 'root', '');

	mysql_select_db('student');

$sql="INSERT INTO log (first_name,last_name,username,password)
VALUES
('$_POST[first_name]','$_POST[last_name]','$_POST[username]','$_POST[password]')";


if (!mysql_query($sql,$cn))
  {
  die('Error: ' . mysql_error());
  }
 
echo "<h1>INSERTION COMPLETE</h1>";
mysql_close($cn);
?>



 

  
 