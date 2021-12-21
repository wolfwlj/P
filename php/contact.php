<?php 

    if(isset($_POST['submit'])){

     $naam = $_POST['1']." ". $_POST['4'];
     $email = $_POST['2'];
     $bericht = $_POST['5'];
     $tel = $_POST['3'];
     
     $to = "planco.contactdesk@gmail.com";


        $admin = ""; 
        $admin .= "naam : ".$naam. "\r\n";
        $admin .= "Gebruikers bericht : ".$bericht."\r\n";
        $admin .= "Gebruikers Email : ".$email."\r\n";
        $admin .= "Gebruikers telefoon nummer : ".$tel."\r\n"; 


        $dank = ""; 
        $dank .= "Goedendag ".$naam. "\r\n";
        $dank .= "Uw bericht naar ons contact desk word zo snel mogeljik behandeld! ".$gekozenhuisstring."\r\n";
        $dank .= "Vriendelijke groeten!"."\r\n"; 
   
        $bericht = wordwrap($dank,70);
        

        mail($email,"Bericht",$dank);
        mail($to,"Contact form gebruiker",$admin);



    }

 

echo '<script type="text/JavaScript">  window.location.href = "https://86714.ict-lab.nl/Project-6/contact.html";  </script>';



?>