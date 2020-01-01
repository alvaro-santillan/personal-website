<?php
// Retrieve input from html.
$firstName = $_POST['first-name-input'];
$lastName = $_POST['last-name-input'];
$email = $_POST['email-input'];
$subject = $_POST['subject-input'];
$message = $_POST['message-input'];

// Email message
$to = "alvaro@alvarosantillan.com";
$email_from = "contact@alvarosantillan.com";
$email_subject = "New Personal Website Form Submission";
$email_body = "Name: $firstName $lastName \n Email: $email \n Subject: $subject \n\n Message: $message";

$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email \r\n";

// Send it
mail($to, $email_subject, $email_body, $headers);

// Injection protection
function IsInjected($str) {
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if(preg_match($inject,$str)) {
      return true;
    } else {
      return false;
    }
}

if(IsInjected($visitor_email)) {
    echo "Bad email value!";
    exit;
}

header('Location: ' . $_SERVER['HTTP_REFERER']);

?>