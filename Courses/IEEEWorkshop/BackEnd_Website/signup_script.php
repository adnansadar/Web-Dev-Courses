<?php
    $con = mysqli_connect("localhost","root","","store") or die(mysqli_error($con));
    $name=$_POST['name'];
    $email=$_POST['email'];
    //$password=$_POST['password'];
    $contact=$_POST['contact'];
    $city=$_POST['city'];
    $address=$_POST['address'];
    $query = "select * from users where email = '$email'";
    $res=mysqli_query($con,$query) or die("failed".mysqli_error($con));
    $num = mysqli_num_rows($res);
    $array = mysqli_fetch_array($res);
    if($num > 1)
    {
        echo "<h3>User already exists! Try another username</h3>";
    }
    else {
        echo "Submitted Successfully!";
        $insert = "insert into users values('$name','$email','$contact','$city')";
        $r = mysqli_query($con,$insert) or die("failed! ".mysqli_error($con));
    }
 ?>
