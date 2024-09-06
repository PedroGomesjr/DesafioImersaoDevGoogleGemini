// Função para obter a próxima missa com base no horário atual
function getProximaMissa(diaHorario) {
    const agora = new Date();
    const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    for (let i = 0; i < 7; i++) {
        const dia = diasSemana[(agora.getDay() + i) % 7];
        if (diaHorario[dia]) {
            for (const horario of diaHorario[dia]) {
                const [hora, minuto] = horario.split(':').map(Number);
                const missa = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() + i, hora, minuto);
                if (missa > agora) {
                    return { dia, horario };
                }
            }
        }
    }
    return { dia: 'Nenhum dia', horario: 'Nenhuma missa encontrada' };
}

// Função para buscar paróquias pelo nome do bairro
function buscarParoquias() {
    const bairroInput = document.getElementById('campo-pesquisa').value.trim().toLowerCase();
    const container = document.getElementById('paroquiasContainer');

    // se campoPesquisa for uma string sem nada
    if (!bairroInput) {
        container.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do bairro</p>"
        return 
    }
    container.innerHTML = ''; // Limpa o conteúdo anterior
    // Obtém o elemento body
    const body = document.body;

    // Muda a imagem de fundo
    body.style.backgroundImage = "url('imagem2.jfif')";

    const bairro = barriosMissas.find(barriosMissas => barriosMissas.bairro.toLowerCase() === bairroInput);
    if (bairro) {
        const paroquiasOrdenadas = bairro.paroquias.sort((a, b) => {
            const proximaMissaA  = getProximaMissa(a.diaHorario);
            const proximaMissaB  = getProximaMissa(b.diaHorario);
            return new Date(`1970-01-01T${proximaMissaA}:00Z`) - new Date(`1970-01-01T${proximaMissaB}:00Z`);
        });

        paroquiasOrdenadas.forEach(paroquia => {
            const proximaMissa = getProximaMissa(paroquia.diaHorario);
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-image">
                 <img src=${paroquia.imagem} alt="Paróquia Image" />
                </div>
                <div class= "card-text">
                    <h2>${paroquia.paroquia}</h2>
                    <p>${paroquia.descricao}</p>
                    <h2><strong>Horários de Missa:</strong></h2>
                    <ul>
                        ${Object.entries(paroquia.diaHorario).map(([dia, horarios]) => `
                            <li><strong>${dia}:</strong> ${horarios.join(', ')}</li>
                        `).join('')}
                    </ul>
                    <a href="${paroquia.link}" target="_blank">Site da Paróquia</a><br>
                    <a href="${paroquia.rotaGoogleMaps}" target="_blank">Rota no Google Maps</a>
                </div>
                <div class="card-stats">
                <h2><strong>Próxima missa:</strong> ${proximaMissa.dia} às ${proximaMissa.horario}</h2>
                </div>
            `;
            container.appendChild(card);
        });
    } else {
        container.innerHTML = '<p>Bairro não encontrado.</p>';
    }
}
