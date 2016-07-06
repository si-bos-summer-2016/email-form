<?php

  if ($_SERVER["REQUEST_METHOD"] === "POST") {

  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  require_once('phpmailer/PHPMailerAutoload.php');

  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

  $name = test_input($name);
  $email = test_input($email);
  $message = test_input($message);

  if(!($name ==='') && !($email ==='') && !($message ==='')) {

  $mail             = new PHPMailer();
  $mail->SMTPDebug  = 0;
  $mail->Debugoutput = 'html';
  $mail->Host       =  gethostbyname('smtp.gmail.com');
  $mail->SMTPAuth   = true;
  $mail->SMTPSecure = "tls";
  $mail->Port       = 587;
  $mail->Username   = "youraddress@gmail.com";      // Your GMAIL username
  $mail->Password   = "yourpassword";            // GMAIL password
  $mail->Subject    = "Contact Form Submittal";
  $mail->Body       = "From: $name\n E-Mail: $email\n Message: $message\n";
  //send to
  $mail->AddAddress("youraddress@gmail.com", "Recipients Name"); // E-Mail address you want to send to
  // sender
  $mail->SetFrom('youraddress@gmail.com', 'Website Submittal'); // E-Mail address of sender.

  // I personally put the same email address in all of the above asked for sections,
  // what that ends up doing is just emailing yourself the message from the user.
  // If you want to send it to a different email address, just change the email address
  // in the AddAddress line.
}

  if(!$mail->Send())
  {
    $error = 'Message was not sent.';
  }
  else
  {
    $success = 'Message has been sent. Thank You.';
  }
}

?>
