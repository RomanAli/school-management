<?php

require_once 'connect.php';

 ?>
<html>
<head>

</head>

<body bgcolor=#C0C0C0>
<form action="form.php" method="Post">
<b>First Name:<b><br>
	<input type="text" name="fname" placeholder="First Name"/><br>
<b>Last Name:</b><br>
	<input type="text" name="lname" placeholder="Last Name"/><br>
<b>Username:<b><br>
	<input type="text" name="uname" placeholder="Username"/><br>
<b>password:<b><br>
	<input type="password" name="pword" placeholder="password"/><br>
	
Select Your Gender:
</br>

<input type="radio" name="sex" value="Male"> Male <br>
<input type="radio" name="sex" value="Female"/> Female<br>


Select Your Class:
</br>
<select name="class">
<option value="1">Class One</option>
<option value="2">Class Two</option>
<option value="3">Class Three</option>
<option value="4">Class Four</option>
<option value="5">Class Five</option>
</select><br>
Select Your Subject:
<br/>
<select name="subject">
<option  value="Bangla">Bangla</option>
<option  value="English">English</option>
<option  value="Quiz">Quiz</option>
<option  value="Math">Math</option>
<option  value="Social Science">Social Science</option>
<option  value="General Science">Genarel Science</option>
<option  value="Religious Studies">Religious Studies</option>
<option  value="Art & Drawing">Art & Drawing</option>
<option  value="Physical Exercise">Physical Exercise</option>
</select>

<br/>
Select meal System:
<br/>
<select name="meal">
	<option value="Yes">Yes</option>
	<option value="No">No</option>
</select><br>

Select Your Residential System:
<br/>
<select name="resid">
<option value="Yes">Yes</option>
<option value="No">No</option>
</select>
<br/>

Comment:<br>
<textarea rows="10" cols="16">
</textarea>
</br>
<input type="submit" name="submit" value="submit"/>
</form>
</body>

</html>

<?php

if(isset($_REQUEST['submit'])){
	echo '<br/>';
	$fname =  $_REQUEST['fname'];
	$lname =  $_REQUEST['lname'];
	$uname =  $_REQUEST['uname'];
	$pword =  $_REQUEST['pword'];
	$meal =  $_REQUEST['meal'];
	$class = $_REQUEST['class'];
	$subject =  $_REQUEST['subject'];
	$resid = $_REQUEST['resid'];
	$sex = $_REQUEST['sex'];
	$comment = $_REQUEST['comment'];


	$query = "insert into users(sno,first_name,last_name,username,password,gender,class,subject,meal, Residential,comment) values(NULL,'".$fname."','".$lname."','".$uname."','".$pword."','".$sex."','".$class."','".$subject."','".$meal."','".$residential."','".$comment."')";
	$query = mysql_query($query);
	if($query){
		echo '<script>alert("Registration Successfull..!");</script>';
	}
	else{
		echo '<script>alert("Registration Unsuccessfull..!");</script>';
	}
}

 ?>