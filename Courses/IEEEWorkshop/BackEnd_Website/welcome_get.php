<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Welcome PHP</title>
    </head>
    <body>
        Welcome
        <?php
        echo $_POST["name"];
        echo "<br />";
         ?>
         Your Email Address is:
         <?php
         echo $_POST["email"];
          ?>
    </body>
</html>
