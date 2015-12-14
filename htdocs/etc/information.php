
<html>
<head>
<link href="css/bootstrap.min.css" rel="stylesheet"/>
</head>
</html>
<?php 
require_once 'connect.php';

if(!isset($_SESSION['logged_in'])){
	header('location: login.php');
}
@$username = $_SESSION['username'];
$query = "select *from users where username='".$username."'";
$query = mysql_query($query);
echo '<table border="1" class="table table-bordered table-hover">
		<tr>
			<th>First Name</th>
			<th>last name</th>
			<th>Gender</th>
			<th>Class</th>
			<th>Subject</th>
			<th>Meal</th>
			<th>Residential</th>
			<th>Comment</th>
		</tr>';
while($row = mysql_fetch_array($query)){
	echo '<tr>';
		
		echo '<td>'.$row['first_name'].'</td>';
		echo '<td>'.$row['last_name'].'</td>';
		echo '<td>'.$row['gender'].'</td>';
		echo '<td>'.$row['class'].'</td>';
		echo '<td>'.$row['subject'].'</td>';
		echo '<td>'.$row['meal'].'</td>';
		echo '<td>'.$row['residential'].'</td>';
		echo '<td>'.$row['comment'].'</td>';

	echo '</tr>';
}
echo '</table>';

?>
<a href="logout.php" class="btn btn-primary btn-lg btn-danger">Logout</a>