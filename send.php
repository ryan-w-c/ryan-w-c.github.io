<?php
    if (isset($_POST['submit'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $company = $_POST['company'];
        $message = $_POST['message'];

        $mailTo = "cavanaghryan1@gmail.com";
        $subject = "Email from cavanagh.dev";
        $body = "Information Submitted:";

        $body .= "\r\n Name: " . $name;
        $body .= "\r\n Email: " . $email;
        $body .= "\r\n Company: " . $company;
        $body .= "\r\n Message: " . $message;

        mail($mailTo, $subject, $body);
        // header("Location: index.html");
        console.log("working");
    }
?>