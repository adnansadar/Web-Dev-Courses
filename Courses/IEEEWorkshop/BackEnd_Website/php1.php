<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>PHP in HTML</title>
    </head>
    <body>
        <?php
        echo "Hello World!";
        echo "<br>";
        $var1=20;
        $var2=18;
        $var3 = $var1 + $var2;
        echo "$var3";
        echo "<br>";
        echo gettype($var1);
        echo "<br>";
        $str1="Hello";
        $str2="World";
        echo $str1.$str2."<br>";
        echo "Value of 1st variable is ".$str1." and value of 2nd variable is ".$str2."<br>";
        echo '$var3'."<br>";
        function sum($var1,$var2)
        {
            $sum1=$var1+$var2;
            return $sum1;
        }
        $sum=sum($var1,$var2);
        echo $sum."<br>";
        $arr = array(18,12);
        $sum2 = $arr[0]+$arr[1];
        echo  "$sum2"."<br>";
        echo count($arr);
        echo "<br>";

        //associative array
        $num = array('a' => 12, 'b' => 20 );
        $sum=$num["a"]+$num["b"];
        print_r($num);
        echo "<br>";
        $num=array(array(1,12),array(1,12));
        print_r($num);
        echo "<br>";
        for ($i=0; $i < 10; $i++)
        {
            echo "$i";
        }
        echo "<br />";
        $a=0;
        echo "Even Numbers:"."<br />";
        while ($a <= 10)
        {
            if ($a%2==0) {
                echo "$a";
            }
            $a=$a+1;
        }
        echo "<br />";
        //foreach will be used in associative arrays mostly
        $variable = array(40,50,60);
        foreach ($variable as $key) {
            echo $key."<br />";
        }
        ?>

    </body>
</html>
