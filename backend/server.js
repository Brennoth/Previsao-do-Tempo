
require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());

app.get("/api", (req, res) => {
    res.json({
        mensagem: "Meu back-end está funcionando!"
    });
});

app.get("/api/clima", async (req, res) => {
    try {
        const cidade = req.query.cidade;

        if (!cidade) {
            return res.status(400).json({
                erro: "Informe o nome de uma cidade."
            });
        }

        const chave = process.env.OPENWEATHER_API_KEY;

        if (!chave) {
            return res.status(500).json({
                erro: "A chave da API não foi configurada."
            });
        }

        const url = new URL(
            "https://api.openweathermap.org/data/2.5/weather"
        );

        url.searchParams.set("q", cidade);
        url.searchParams.set("appid", chave);
        url.searchParams.set("lang", "pt_br");
        url.searchParams.set("units", "metric");

        const resposta = await fetch(url);
        const dados = await resposta.json();

        if (!resposta.ok) {
            return res.status(resposta.status).json({
                erro: dados.message || "Não foi possível consultar o clima."
            });
        }

        res.json(dados);

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            erro: "Ocorreu um erro ao consultar o clima."
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
