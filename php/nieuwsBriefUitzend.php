<?php 



    if(isset($_POST['uitzend']))
    {
        $headers = array(
            'From' => 'noreply@planco.io',
            'Reply-To' => 'noreply@planco.io',
            'X-Mailer' => 'PHP/' . phpversion()
        );

        $bericht = $_POST['nieuws'];
       

       $conn= new SQLite3("brief.db");

       if($conn->connect_error){
           die("connection failed: ". $conn->connect_error);
       }

       
       $results = $conn->query("SELECT email FROM brief WHERE ID ");
       while($row = $results->fetchArray()){
        $to = $row["email"];
        mail($to,"PlanCo maandelijkse nieuwsbrief",$bericht,$headers);
    }

        

        $conn ->close();

        
    }

 




?>