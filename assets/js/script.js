(function () {
    //Chave de api do site OpenWeather
    alert("Para garantir o funcionamento da busca, as cidades devem ser escritas com letras maiúsculas e cidades fora do Brasil devem ser digitadas com o nome correto em inglês.")

    const startPrevisãoDoTempo = {
        start() {
            //isso ira pegar o valor do input quando o btn for clicado, e ira enviar essa informação para uma outra função
            const btn = document.querySelector("#btn")
            btn.addEventListener("click", () => {
                const input = document.querySelector("#input-city").value
                this.buscarCidade(input)
            })

        },
        //esse async e para avisar que esssa função esta acessando um servidor
        async buscarCidade(city) {
            try {
                const resposta = await fetch(
                    `http://localhost:3000/api/clima?cidade=${encodeURIComponent(city)}`
                );

                const dados = await resposta.json();

                if (!resposta.ok) {
                    alert(dados.erro || "Não foi possível buscar o clima.");
                    return;
                }

                this.colocarDadosNaTela(dados);

            } catch (erro) {
                console.error("Erro ao buscar o clima:", erro);
                alert("Não foi possível conectar ao servidor.");
            }
        },

        colocarDadosNaTela(dados) {
            console.log(dados)
            document.querySelector("#tempo").innerHTML = `Tempo em ${dados.name}`
            document.querySelector("#temperatura").innerHTML = `${parseInt(dados.main.temp)}°C`
            document.querySelector("#previsão").innerHTML = dados.weather[0].description
            document.querySelector("#umidade").innerHTML = `Umidade: ${dados.main.humidity}%`
            document.querySelector(".nuvens img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
        }
    }
    startPrevisãoDoTempo.start()

})()
