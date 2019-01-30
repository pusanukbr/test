<?php
    $msg_box = ""; 
        $message  = "<br/>Телефон: " . $_POST['form_phone'];      
        send_mail($message); 
        $msg_box = " ";
   
    echo json_encode(array(
        'result' => $msg_box
    ));
     
     
    function send_mail($message){
        $mail_to = "postden@ukr.net"; 
        $to_1 = "leadway.yusavun@gmail.com";
        $subject = "Заявка с сайта ТеплоДар";
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: <no-reply@test.com>\r\n";
        
        mail($mail_to, $subject, $message, $headers);
        mail($to_1, $subject, $message, $headers);
    }
     
?>
