<?php 
    #htmlentities is used for making our site secure as a script can be run which may crash the website.
    if (isset($_POST['name'])){//check if value is entered or no
        $name = htmlentities($_POST['name']);
        echo $name;
    }
    //echo $_SERVER['QUERY_STRING'];
 ?>

<!DOCTYPE html>
<html>
<head>
    <title>Signup</title>
</head>
<body>
    <form  action="get_post.php" method="post">
            <label>Name</label>
            <input type="text" name="name"><br>
            <label>Email</label>
            <input type="text" name="email"><br>
            <input type="submit" value="Submit">
        </form>

</body>
</html>