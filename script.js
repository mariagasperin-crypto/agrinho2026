// ========== SCRIPT DO PROJETO RAIZ E FUTURO ==========
// Funcionalidade: Calculadora da Pegada Verde + Acessibilidade

// 1. ELEMENTOS DA CALCULADORA
const botaoCalcular = document.getElementById('calcularBtn');
const resultadoDiv = document.getElementById('resultado');

// Fatores de impacto (simulação educativa)
// Cada kg de alimento convencional de longa distância emite cerca de 0.5kg CO2 por km
// Aqui simulamos que a compra local reduz 80% das emissões
const reducaoPorKg = 0.4; // 0.4 kg de CO2 economizados por kg de produto local

// Relação simbólica: 10 kg de CO2 economizados = 1 árvore salva
const co2PorArvore = 10;

// Função principal da calculadora
function calcularPegadaVerde() {
    // Obter valores
    const alimento = document.getElementById('alimento').value;
    const quantidade = parseFloat(document.getElementById('quantidade').value);
    const localizacao = document.getElementById('localizacao').value.trim();
    
    // Validação de entrada
    if (isNaN(quantidade) || quantidade <= 0) {
        resultadoDiv.innerHTML = '❌ Por favor, digite uma quantidade válida (ex: 1, 2.5).';
        return;
    }
    
    if (localizacao === "") {
        resultadoDiv.innerHTML = '📍 Por favor, informe sua cidade ou CEP para simular o impacto local.';
        return;
    }
    
    // Cálculo da redução de CO₂
    const co2Economizado = quantidade * reducaoPorKg;
    
    // Cálculo de árvores "salvas" simbolicamente
    let arvoresSalvas = co2Economizado / co2PorArvore;
    arvoresSalvas = Math.max(0.1, arvoresSalvas); // mínimo simbólico
    arvoresSalvas = arvoresSalvas.toFixed(1);
    
    // Mensagem personalizada por alimento
    let mensagemAlimento = "";
    if (alimento === "alface") mensagemAlimento = "🌿 alface fresquinha do produtor local!";
    else if (alimento === "tomate") mensagemAlimento = "🍅 tomate com sabor de terra nutritiva.";
    else if (alimento === "laranja") mensagemAlimento = "🍊 laranja cheia de vitamina C e consciência ecológica.";
    else mensagemAlimento = "🌽 mandioca que fortalece a agricultura familiar.";
    
    // Montar resultado visual com metáfora
    resultadoDiv.innerHTML = `
        🌟 <strong>Impacto positivo da sua escolha!</strong> 🌟<br><br>
        ✅ Você optou por ${quantidade} kg de ${mensagemAlimento}<br>
        📍 Região: ${localizacao}<br><br>
        🌍 <strong>Redução de CO₂ no transporte:</strong> ${co2Economizado.toFixed(2)} kg<br>
        🌳 <strong>Equivalente a salvar ${arvoresSalvas} árvore(s)</strong> (emissões evitadas)<br><br>
        💚 <strong>Parabéns!</strong> Consumir da agricultura familiar local fortalece o campo, 
        reduz poluição e garante um futuro sustentável.
    `;
}

// Evento do botão calcular
if (botaoCalcular) {
    botaoCalcular.addEventListener('click', calcularPegadaVerde);
}

// ========== FUNCIONALIDADES DE ACESSIBILIDADE ==========
let tamanhoFonteAtual = 100; // em %

const body = document.body;
const btnAumentar = document.getElementById('aumentarFonte');
const btnDiminuir = document.getElementById('diminuirFonte');
const btnContraste = document.getElementById('altoContraste');

// Aumentar fonte (limite máximo 140%)
function aumentarFonte() {
    if (tamanhoFonteAtual < 140) {
        tamanhoFonteAtual += 10;
        body.style.fontSize = tamanhoFonteAtual + '%';
    }
}

// Diminuir fonte (limite mínimo 70%)
function diminuirFonte() {
    if (tamanhoFonteAtual > 70) {
        tamanhoFonteAtual -= 10;
        body.style.fontSize = tamanhoFonteAtual + '%';
    }
}

// Alto contraste
function alternarContraste() {
    body.classList.toggle('alto-contraste');
}

// Vincular botões de acessibilidade
if (btnAumentar) btnAumentar.addEventListener('click', aumentarFonte);
if (btnDiminuir) btnDiminuir.addEventListener('click', diminuirFonte);
if (btnContraste) btnContraste.addEventListener('click', alternarContraste);

// Mensagem no console para confirmar que o JS carregou
console.log("Projeto Raiz e Futuro - Calculadora de Pegada Verde carregada com sucesso!");
