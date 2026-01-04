(function(){
//Chave de api do site OpenWeather
const key = "43c132203ddf36c5755299cfdbbac55f"
alert("Para garantir o funcionamento da busca, as cidades devem ser escritas com letras maiúsculas e cidades fora do Brasil devem ser digitadas com o nome correto em inglês.")
const startPrevisãoDoTempo = {
    start(){
        //isso ira pegar o valor do input quando o btn for clicado
        const btn = document.querySelector("#btn")
        btn.addEventListener("click", () =>{
            const input = document.querySelector("#input-city").value
            this.buscarCidade(input)
        })
        
    },
    //esse async e para avisar que esssa função esta acessando um servidor
    async buscarCidade(city){
        const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
        this.colocarDadosNaTela(dados)
    },
    colocarDadosNaTela(dados){
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





//Chave de api do site OpenWeather
// const key = "43c132203ddf36c5755299cfdbbac55f"

// function colocarDadosNaTela(dados){
//     console.log(dados)
//     document.querySelector("#tempo").innerHTML = `Tempo em ${dados.name}`
//     document.querySelector("#temperatura").innerHTML = `${parseInt(dados.main.temp)}°C`
//     document.querySelector("#previsão").innerHTML = dados.weather[0].description
//     document.querySelector("#umidade").innerHTML = `Umidade: ${dados.main.humidity}%`
//     document.querySelector(".nuvens img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
// }

//esse async e para avisar que esssa função esta acessando um servidor
// async function buscarCidade(city){
//     const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
//     colocarDadosNaTela(dados)
// }

// function clickBTN(){
//     const input = document.querySelector("#input-city").value
//     buscarCidade(input)
// }