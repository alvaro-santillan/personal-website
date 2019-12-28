<?php

$firstName = $_POST['first-name-input'];
$lastName = $_POST['last-name-input'];
$email = $_POST['email-input'];
$subject = $_POST['subject-input'];
$message = $_POST['message-input'];

$email_from = "contact@alvarosantillan.com";

$email_subject = "New Form Submission";

$email_body = "<b>$firstName $lastName</b> has sent you a message about <b>$subject</b>! \n\n $message \n\n You can email them back at: <b>$email</b>";

$to = "afsm1995@live.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $email \r\n";

mail($to, $email_subject, $email_body, $headers);

function IsInjected($str){
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

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

header('Location: ' . $_SERVER['HTTP_REFERER']);

?>