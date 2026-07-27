async function atualizarCotacoes() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL');
        const data = await response.json();

        const ticker = document.getElementById('ticker');
        ticker.innerHTML = `
            <span>USD/BRL: R$ ${parseFloat(data.USDBRL.bid).toFixed(2)}</span>
            <span>EUR/BRL: R$ ${parseFloat(data.EURBRL.bid).toFixed(2)}</span>
            <span>GBP/BRL: R$ ${parseFloat(data.GBPBRL.bid).toFixed(2)}</span>
            <span>BTC/BRL: R$ ${parseFloat(data.BTCBRL.bid).toFixed(2)}</span>
        `;
    } catch (error) {
        console.error('Erro ao buscar cotações:', error);
    }
}

atualizarCotacoes();
setInterval(atualizarCotacoes, 60000); // atualiza a cada 1 minuto