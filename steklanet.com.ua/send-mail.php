<?
require_once "SendMailSmtpClass.php";
require_once "TurboSMS.php";

$name=$_POST['name'];
$phone=$_POST['phone'];
$message=$_POST['message'];

$body = "Name: " . $name . "\n"; 
$body .= "Phone: " . $phone . "\n"; 
$body .= "Message: " . $message . "\n"; 

$client = new TurboSMS();

$client->send("380504701909",$body);
 
$mailSMTP = new SendMailSmtpClass('skorik71@mail.ru', 'bretty', 'ssl://smtp.mail.ru', 'steklanet.com.ua', 465);
  
// заголовок письма
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; 	// кодировка письма
$headers .= "From: steklanet.com.ua <skorik71@mail.ru>\r\n";   			// от кого письмо
$result =  $mailSMTP->send('skorik71@mail.ru', 'Заказ с stekla.net.com', $body, $headers); // отправляем письмо
?>

    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">

    <head>
        <script>
            alert("Your message has been sent successfully. We will contact you shortly.");
        </script>
        <meta HTTP-EQUIV="REFRESH" content="0; url=index.html">

    </head>