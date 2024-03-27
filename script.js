function iniciarJuego() {
    var userName = document.getElementById("username").value;
    var mensaje = document.getElementById("mensaje");
    var numIntentos = document.getElementById("numeroIntentos").value;
    var rangoInicio = document.getElementById("rangoInicio").value;
    var rangoFin = document.getElementById("rangoFin").value;

    userName = userName.charAt(0).toUpperCase() + userName.slice(1);

    mensaje.innerHTML = "";

    var confirmacion = document.createElement("label");
    confirmacion.innerHTML = "¿Quieres jugar, " + userName + "? (s/n)";
    var botonSi = document.createElement("button");
    botonSi.innerHTML = "Sí";
    var botonNo = document.createElement("button");
    botonNo.innerHTML = "No";
    mensaje.appendChild(confirmacion);
    mensaje.appendChild(botonSi);
    mensaje.appendChild(botonNo);

    botonSi.addEventListener("click", function() {
        // Mostrar un saludo personalizado
   alert("Hola, " + userName + "! Bienvenido al juego.");

        var maxIntentos = parseInt(numIntentos);
        var intentosRealizados = 0;
        var numeroSecreto = Math.floor(Math.random() * (parseInt(rangoFin) - parseInt(rangoInicio) + 1)) + parseInt(rangoInicio);
        var numeroIngresado;
        var intentosRestantes;

        while (intentosRealizados < maxIntentos) {
            intentosRealizados++;
            intentosRestantes = maxIntentos - intentosRealizados;

            numeroIngresado = parseInt(
                prompt(
                    userName +
                    "! Digite un número entre " + rangoInicio + " y " + rangoFin + ". Tienes " +
                    intentosRestantes +
                    " intentos!"
                )
            );
            /*===: "comparación estricta" o "comparación fuerte"*/
            if (numeroIngresado === numeroSecreto) {
                alert(
                    "¡Enhorabuena! " +
                    userName +
                    " ¡Acertaste en " +
                    intentosRealizados +
                    " intentos!"
                );
                // Mostrar el mensaje sobre el número máximo de intentos
                alert(
                    userName +
                    "! El número máximo de intentos que te llevó adivinar el número fue: " +
                    intentosRealizados
                );
                break;
                /*===: "comparación estricta" o "comparación fuerte"*/
            } else if (intentosRealizados === maxIntentos) {
                alert(userName + "! ¡Se acabaron los " + maxIntentos + " intentos!");
            } else if (numeroIngresado > numeroSecreto) {
                // Desafio 3
                alert(
                    userName + "! El número secreto es menor que " + numeroIngresado + "."
                );
            } else {
                alert(
                    userName + "! El número secreto es mayor que " + numeroIngresado + "."
                );
            }
        }
    });

    botonNo.addEventListener("click", function() {
        mensaje.innerHTML = "¡Hasta luego, " + userName + "!";
    });
}
