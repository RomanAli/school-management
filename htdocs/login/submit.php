<?php

	$user_name = $_POST['user_name'];
	$password  = $_POST['password'];

	$cn = mysql_connect('localhost', 'root', '');

	mysql_select_db('parvez');

	$query = sprintf("
				SELECT
					*
				FROM
					user
				WHERE
					user_name = '%s' AND password = '%s'",
						$user_name,$password
					);

	$result = mysql_query($query, $cn);

	$num_row = mysql_num_rows($result);

	session_start();

	if( $num_row > 0 )
	{
		$_SESSION['logged_in']=1;

		header('location:home.php');
	}
	else
	{
		$_SESSION['logged_in']=0;
		header('location:form.php');
	}


 ?>