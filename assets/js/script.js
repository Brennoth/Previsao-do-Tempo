(function(){
//Chave de api do site OpenWeather
const key = "43c132203ddf36c5755299cfdbbac55f"
const key2 = "NioOsw4fKBA34qZG3jSJQLV0pkfmXid2"
    alert("Para garantir o funcionamento da busca, as cidades devem ser escritas com letras maiúsculas e cidades fora do Brasil devem ser digitadas com o nome correto em inglês.")
    
const startPrevisãoDoTempo = {
    start(){
        //isso ira pegar o valor do input quando o btn for clicado, e ira enviar essa informação para uma outra função
        const btn = document.querySelector("#btn")
        btn.addEventListener("click", () =>{
            const input = document.querySelector("#input-city").value
            this.buscarCidade(input)
        })
        
    },
    //esse async e para avisar que esssa função esta acessando um servidor
    async buscarCidade(city){
        const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
        // const dados = await fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${key2}`).then(resposta => resposta.json())
        
        this.colocarDadosNaTela(dados)
    },
    colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector("#tempo").innerHTML = `Tempo em ${dados.name}`
    document.querySelector("#temperatura").innerHTML = `${parseInt(dados.main.temp)}°C`
    document.querySelector("#previsão").innerHTML = dados.weather[0].description
    document.querySelector("#umidade").innerHTML = `Umidade: ${dados.main.humidity}%`
    document.querySelector(".nuvens img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
        
    // document.querySelector("#tempo").innerHTML = `Tempo em ${dados.location.name.split(" ")[0, 1]}`
    // document.querySelector("#temperatura").innerHTML = `${parseInt(dados.data.values.temperature)}°C`
    // // document.querySelector("#previsão").innerHTML = dados.weather[0].description
    // document.querySelector("#previsão").innerHTML = dados.data.values.weatherCode
    // document.querySelector("#umidade").innerHTML = `Umidade: ${dados.main.humidity}%`
    // document.querySelector(".nuvens img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    } 
}
    startPrevisãoDoTempo.start()
    
})()
