<?
require_once "SendMailSmtpClass.php";

$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];

$body = "Name: " . $name . "\n"; 
$body .= "Email: " . $email . "\n"; 
$body .= "Message: " . $message . "\n"; 
 
$mailSMTP = new SendMailSmtpClass('pazekivana@gmail.com', 'pazekivana8824', 'ssl://smtp.gmail.com', 'ivanapazek.com', 465);
  

$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; 	// кодировка письма
$headers .= "From: ivanapazek.com <pazekivana@gmail.com>\r\n";   			// от кого письмо
$result =  $mailSMTP->send('ivana.pazek@gmail.com', 'letter from ivanapazek.com', $body, $headers); // отправляем письмо
echo json_encode(array('status'=>$result));
?>