<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);
    
    // Dirección a la que se enviará el mensaje
    $destinatario = "proyectos@urbanistikconsultores.com";
    
    // Asunto del correo
    $asunto = "Mensaje de $nombre";
    
    // Cuerpo del mensaje
    $cuerpo = "Nombre: $nombre\nCorreo: $email\n\nMensaje:\n$mensaje";
    
    // Cabeceras del correo
    $cabeceras = "From: $email\r\n";
    $cabeceras .= "Reply-To: $email\r\n";
    $cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Enviar el correo
    if (mail($destinatario, $asunto, $cuerpo, $cabeceras)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
}
?>
