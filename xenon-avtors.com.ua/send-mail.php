<?
require_once "SendMailSmtpClass.php";

$name=$_POST['name'];
$phone=$_POST['phone'];

$body = "Name: " . $name . "\n"; 
$body .= "Phone: " . $phone . "\n"; 
 
$mailSMTP = new SendMailSmtpClass('chebakov_v@inbox.ru', 'vova8824', 'ssl://smtp.mail.ru', 'steklanet.com.ua', 465);
  
// заголовок письма
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; 	// кодировка письма
$headers .= "From: xenon-avtors.com.ua <chebakov_v@inbox.ru>\r\n";   			// от кого письмо
$result =  $mailSMTP->send('chebakovvl@gmail.com', 'Заказ с xenon-avtors.com', $body, $headers); // отправляем письмо
echo json_encode(array('status'=>'ok'));
?>