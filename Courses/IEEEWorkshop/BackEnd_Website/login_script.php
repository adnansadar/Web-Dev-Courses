<?php
    $con = mysqli_connect("localhost","root","","store") or die(mysqli_error($con));
    $email = $_POST['email'];
    $password = ($_POST['password']);

    $query = "select * from users where email = '$email' and password ='$password'";
    $result = mysqli_query($con,$query) or die("failed".mysqli_error($con));
    $number_of_users = mysqli_num_rows($result);
    if($number_of_users == 1)
    {
        echo "Success";
    }
    else
    {
        echo "Fail";
    }
 ?>
