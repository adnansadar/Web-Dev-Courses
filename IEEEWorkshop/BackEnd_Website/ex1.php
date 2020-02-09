<?php
    $con = mysqli_connect("localhost","root","","Example") or die(mysqli_error($con));
    if($con)
    echo "Success";
    else
    echo "Fail";
    $select_query = "SELECT name,phone_no,gr_no,college FROM example_1";
    $sq_result=mysqli_query($con,$select_query) or die(mysqli_error($con));
    $total_rows=mysqli_num_rows($sq_result);
    echo $total_rows;
 ?>
