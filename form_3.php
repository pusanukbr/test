<?php 
 $filename = "form.txt"; //Имя файла для прикрепления
  // $to = "postden@ukr.net"; //Кому
  $to_1 = "leadway.yusavun@gmail.com";
  $from = "no-reply@test.com"; //От кого
  $subject = "Заявка с сайта ТеплоДар на тему 'Связь с разработчиком этого сайта'"; //Тема
  $message .= "Телефон: " . $_POST['form_phone'];
  $message = "<br/>Сообщение:" . $_POST['form_message'];
  $boundary = "---"; //Разделитель
  /* Заголовки */
  $headers = "From: $from\nReply-To: $from\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"";
  $body = "--$boundary\n";
  /* Присоединяем текстовое сообщение */
  $body .= "Content-type: text/html; charset='utf-8'\n";
  $body .= "Content-Transfer-Encoding: quoted-printablenn";
  $body .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode($filename)."?=\n\n";
  $body .= $message."\n";
  $body .= "--$boundary\n";
  $file = fopen($filename, "r"); //Открываем файл
  $text = fread($file, filesize($filename)); //Считываем весь файл
  fclose($file); //Закрываем файл
  /* Добавляем тип содержимого, кодируем текст файла и добавляем в тело письма */
  $body .= "Content-Type: application/octet-stream; name==?utf-8?B?".base64_encode($filename)."?=\n"; 
  $body .= "Content-Transfer-Encoding: base64\n";
  $body .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode($filename)."?=\n\n";
  $body .= chunk_split(base64_encode($text))."\n";
  $body .= "--".$boundary ."--\n";
  mail($to_1, $subject, $body, $headers);//Отправляем письмо

$msg_box = " ";
   
    echo json_encode(array(
        'result' => $msg_box
    ));
?>
