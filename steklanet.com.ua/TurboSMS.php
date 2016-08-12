<?php
class TurboSMS
{
    const LOGIN = 'steklanet';
    const PASS = 'steklanet';
    const URL = 'http://turbosms.in.ua/api/wsdl.html';
    const SENDER = 'steklanet';

    public function send($destination, $text)
    {
        $client = new SoapClient (self::URL);
        $sendResult = array('sent' => false, 'message' => '');
        $result = $client->Auth(array('login' => self::LOGIN, 'password' => self::PASS));
        var_dump($result);
        if ($result->AuthResult != 'Вы успешно авторизировались') {
            $sendResult['message'] = 'Не удалось авторизоваться';
            return $sendResult;
        }
        $result = $client->GetCreditBalance();
        if ($result->GetCreditBalanceResult <= 0) {
            $sendResult['message'] = 'Недостаточно средств для отправки';
            return false;
        }

        $destination = $this->formatPhone($destination);
        if (!$destination) {
            $sendResult['message'] = 'Неверный формат номера получателя';
            return $sendResult;
        }

        $sms = Array(
            'sender' => self::SENDER,
            'destination' => $destination,
            'text' => $text
        );

        //echo  "try to send sms to ".$destination." from ".$sender." with message = ".$text;
        // Подпись отправителя может содержать английские буквы и цифры. Максимальная длина - 11 символов.
        // Номер указывается в полном формате, включая плюс и код страны
        $result = $client->SendSMS($sms);
        if ($result->SendSMSResult->ResultArray[0] != 'Сообщения успешно отправлены') {
             var_dump($result->SendSMSResult);
            $sendResult['message'] = $result->SendSMSResult->ResultArray[0];
            return $sendResult;
        }
        
        $sendResult['sent'] = true;
        return $sendResult;
    }

    private function formatPhone($phone)
    {
        $phone_text = strval($phone);
        if (strpos($phone_text, '+3') === false && strlen($phone_text) == 9) {
            $phone = '+380' . $phone_text;
        } elseif (strpos($phone_text, '0') === 0 && strlen($phone_text) == 10) {
            $phone = '+38' . $phone_text;
        } elseif (strpos($phone_text, '80') === 0 && strlen($phone_text) == 11) {
            $phone = '+3' . $phone_text;
        } elseif (strpos($phone_text, '380') === 0 && strlen($phone_text) == 12) {
            $phone = '+' . $phone_text;
        } elseif (strpos($phone_text, '+380') === 0 && strlen($phone_text) == 13) {
            //sender is in right format
        } else {
            return false;
        }
        return $phone;
    }


}

/*
header('Content-type: text/html; charset=utf-8');

// Подключаемся к серверу
$client = new SoapClient ('http://turbosms.in.ua/api/wsdl.html');

// Авторизируемся на сервере
$result = $client->Auth($auth);

// Результат авторизации
echo $result->AuthResult . '
';

// Получаем количество доступных кредитов
$result = $client->GetCreditBalance();
echo $result->GetCreditBalanceResult . '
';
exit();
// Текст сообщения ОБЯЗАТЕЛЬНО отправлять в кодировке UTF-8
$text = iconv('windows-1251', 'utf-8', 'Это сообщение будет доставлено на указанный номер');

// Данные для отправки
$sms = Array(
    'sender' => 'Rassilka',
    'destination' => '+380XXXXXXXXX',
    'text' => $text
);

// Отправляем сообщение на один номер.
// Подпись отправителя может содержать английские буквы и цифры. Максимальная длина - 11 символов.
// Номер указывается в полном формате, включая плюс и код страны
$result = $client->SendSMS($sms);

// Отправляем сообщение на несколько номеров.
// Номера разделены запятыми без пробелов.
$sms = Array(
    'sender' => 'Rassilka',
    'destination' => '+380XXXXXXXX1,+380XXXXXXXX2,+380XXXXXXXX3',
    'text' => $text
);
$result = $client->SendSMS($sms);

// Выводим результат отправки.
echo $result->SendSMSResult->ResultArray[0] . '
';

// ID первого сообщения
echo $result->SendSMSResult->ResultArray[1] . '
';

// ID второго сообщения
echo $result->SendSMSResult->ResultArray[2] . '
';

// Отправляем сообщение с WAPPush ссылкой
// Ссылка должна включать http://
$sms = Array(
    'sender' => 'Rassilka',
    'destination' => '+380XXXXXXXXX',
    'text' => $text,
    'wappush' => 'http://super-site.com'
);

$result = $client->SendSMS($sms);

// Запрашиваем статус конкретного сообщения по ID
$sms = Array('MessageId' => 'c9482a41-27d1-44f8-bd5c-d34104ca5ba9');
$status = $client->GetMessageStatus($sms);
echo $status->GetMessageStatusResult . '
';

// Запрашиваем массив ID сообщений, у которых неизвестен статус отправки
$result = $client->GetNewMessages();

// Есть сообщения
if (!empty ($result->GetNewMessagesResult->ResultArray)) {
    echo '
';

    print_r($result->GetNewMessagesResult->ResultArray);

    echo '
';

// Запрашиваем статус каждого сообщения по ID
    foreach ($result->GetNewMessagesResult->ResultArray as $msg_id) {
        $sms = Array('MessageId' => $msg_id);
        $status = $client->GetMessageStatus($sms);
        echo '' . $msg_id . ' - ' . $status->GetMessageStatusResult . '
';
    }
}
*/
?>
