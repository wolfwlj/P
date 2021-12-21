<?php 
    $db= new SQLite3("REGconformaties.db");
    $db ->busyTimeout("5000");
    


    if(isset($_POST['reg']))
    {

        $email = SQLite3::escapeString($_POST['email']);
        $headers = array(
            'From' => 'noreply@planco.io',
            'Reply-To' => 'noreply@planco.io',
            'X-Mailer' => 'PHP/' . phpversion()
        );
        $bericht = "";
        $bericht .= "Automatische mail naar " . $email . "\r\n";
        $bericht .= "\r\n";
        $bericht .= "Bedankt voor het registreren bij PlanCo!";
        $bericht .= "\r\n";
        $bericht .= "hier ergens komt conformatie code of link idk blabalbal";
        $bericht .= "\r\n";
        $bericht .= "\r\n";
        $bericht .= "Veel geluk namens ons bij Planco!";

        
        mail($email,"Registratie Conformatie",$bericht,$headers);

        
        $datum = date("d/m/Y");

        $query = "INSERT INTO brief (email,datum) VALUES('$email', '$datum')";
        $db->exec($query);
    }
    echo '<script type="text/JavaScript">  window.history.back();   </script>';
 




?>