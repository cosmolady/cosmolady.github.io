<?
require_once "SendMailSmtpClass.php";

$name=$_POST['name'];
$phone=$_POST['phone'];

$body = "Name: " . $name . "\n"; 
$body .= "Phone: " . $phone . "\n"; 
 
$mailSMTP = new SendMailSmtpClass('', '', 'ssl://smtp.mail.ru', 'xenon-avtors.com.ua', 465);
  
// заголовок письма
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; 	// кодировка письма
$headers .= "From: xenon-avtors.com.ua <>\r\n";   			// от кого письмо
$result =  $mailSMTP->send('', 'Заказ с xenon-avtors.com', $body, $headers); // отправляем письмо
echo json_encode(array('status'=>'ok'));
?>
