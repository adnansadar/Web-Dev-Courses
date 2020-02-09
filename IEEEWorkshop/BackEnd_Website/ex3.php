<?php
    $con = mysqli_connect("localhost","root","","Example") or die(mysqli_error($con));
    $select_query = "SELECT name,phone_no,gr_no,college FROM example_1";
    $sq_result=mysqli_query($con,$select_query) or die(mysqli_error($con));
    $row = mysqli_fetch_array($sq_result);
    echo $row[0]."<br />";
    echo $row[1]."<br />";
    echo $row[2]."<br />";

    echo $row['name']."<br />";
    $total_rows=mysqli_num_rows($sq_result);

    echo $row['name']."<br />";
    echo $row['phone_no']."<br />";
    echo $row['gr_no']."<br />";
 ?>
