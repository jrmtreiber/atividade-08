function iniciarLuta() {
    const roundTime = parseInt(document.getElementById("round-time").value) * 60; 
    const intervalTime = parseInt(document.getElementById("interval-time").value) * 60;
    const rounds = parseInt(document.getElementById("rounds").value); 

    let currentRound = 1;
    const começarElement = document.getElementById("começar");

    if (isNaN(roundTime) || isNaN(intervalTime) || isNaN(rounds)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    começarElement.textContent = "3";
    let countdown = 3;
    const countdownInterval = setInterval(function() {
        countdown--;
        começarElement.textContent = countdown;
        if (countdown === 0) {
            clearInterval(countdownInterval);
            começarElement.textContent = "Iniciar luta!";
            iniciarRound();
        }
    }, 1000);

    function iniciarRound() {
        let roundTimeRemaining = roundTime;
        let intervalTimeRemaining = intervalTime;

        let roundInterval = setInterval(function() {
            const minutes = Math.floor(roundTimeRemaining / 60);
            const seconds = roundTimeRemaining % 60;
            começarElement.textContent = `Round ${currentRound}: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

            if (roundTimeRemaining <= 0) {
                clearInterval(roundInterval);
                if (currentRound < rounds) {
                    começarElement.textContent = `Round ${currentRound} concluído.`;
                    intervalo();
                } else {
                    começarElement.textContent = `Fim da luta!`;
                }
            } else {
                roundTimeRemaining--;
            }
        }, 1000);

        function intervalo() {
            let intervalInterval = setInterval(function() {
                const minutes = Math.floor(intervalTimeRemaining / 60);
                const seconds = intervalTimeRemaining % 60;
                começarElement.textContent = `Intervalo: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

                if (intervalTimeRemaining <= 0) {
                    clearInterval(intervalInterval);
                    currentRound++;
                    if (currentRound <= rounds) {
                        começarElement.textContent = `Round ${currentRound}`;
                        iniciarRound();
                    }
                } else {
                    intervalTimeRemaining--;
                }
            }, 1000);
        }
    }
}
