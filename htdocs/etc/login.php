<form id="loginform" class="form-vertical no-padding no-margin" method="POST" action="">
    				    <div class="control-wrap">
    			          <h4>User Login</h4>
    			          <div class="control-group">
    			              <div class="controls">
    			                  <div class="input-prepend">
    			                      <span class="add-on"><i class="icon-user"></i></span><input name="username" id="input-username" placeholder="Username" type="text">
    			                  </div>
    			                  <span class="red"></span>
    			              </div>
    			          </div>
    			          <div class="control-group">
    			              <div class="controls">
    			                  <div class="input-prepend">
    			                      <span class="add-on"><i class="icon-key"></i></span><input name="password" id="input-password" placeholder="Password" type="password">
    			                  </div>
    			                   <span class="red"></span>

    			                  <!-- <div class="mtop10">
    			                      <div class="block-hint pull-left small">
    			                          <input type="checkbox" id=""> Remember Me
    			                      </div>
    			                      <div class="block-hint pull-right">
    			                          <a href="javascript:;" class="" id="forget-password">Forgot Password?</a>
    			                      </div>
    			                  </div> -->

    			                  <div class="clearfix space5"></div>
    			              </div>
    			          </div>
    			      </div>
    			      <input id="login-btn" style="width:250px" class="btn btn-block login-btn" value="Login" type="submit" name="submitlogin" />    			   
    			      </form>


<?php 
require_once 'connect.php';
if(isset($_REQUEST['submitlogin'])){
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $query = "select *from users where username='".$username."' and password = '".$password."'";
    $query = mysql_query($query);
    $rows = mysql_num_rows($query);
    if($rows > 0){
        $_SESSION['username'] = $username;
        $_SESSION['logged_in'] = true;
        header('location: rrrrr.html');
    }
}

?>