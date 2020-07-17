
<?php
    
    if (isset($_POST['submit'])){
        $userName 		= $_POST['name'];
        $userEmail	 	= $_POST['email'];
        $userCompany 		= $_POST['company'];
        $userMessage 		= $_POST['message'];

        $to 			= "cavanaghryan1@gmail.com";
        $subject 		= "Email from cavanagh.dev";
        $body 			= "Information Submitted:";

        $body .= "\r\n Name: " . $userName;
        $body .= "\r\n Email: " . $userEmail;
        $body .= "\r\n Company: " . $userCompany;
        $body .= "\r\n Message: " . $userMessage;

        mail($to, $subject, $body);
        header("Location: cavanagh.dev?mailsent");
    }
?>