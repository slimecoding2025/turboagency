<?php

$name = $_POST['name'];
$email = $_POST['email'];
$service = $_POST['service'];
$message = $_POST['message'];

$to = "bousminaselim@gmail.com";

$subject = "New Project Request";

$body = "
Name: $name

Email: $email

Service: $service

Message:
$message
";

$headers = "From: $email";

mail($to,$subject,$body,$headers);

echo "Request Sent Successfully";

?>