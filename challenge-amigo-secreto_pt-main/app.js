let amigos = [];

        function adicionarAmigo() {
            const campoEntrada = document.getElementById('amigo');
            const nomeAmigo = campoEntrada.value.trim();

            if (nomeAmigo === "") {
                alert("Por favor, insira um nome.");
                return;
            }

            // Adicionar o amigo à lista e ao array
            amigos.push(nomeAmigo);
            atualizarListaAmigos();

            // Limpar o campo de entrada
            campoEntrada.value = "";
        }

        function atualizarListaAmigos() {
            const listaAmigos = document.getElementById('listaAmigos');
            listaAmigos.innerHTML = ""; // Limpar a lista existente

            // Percorrer o array amigos e adicionar cada nome como um <li> na lista
            amigos.forEach(amigo => {
                const novoItem = document.createElement('li');
                novoItem.textContent = amigo;
                listaAmigos.appendChild(novoItem);
            });
        }

        function sortearAmigo() {
            if (amigos.length === 0) {
                alert("Nenhum amigo na lista para sortear.");
                return;
            }

            // Gerar um índice aleatório e obter o nome sorteado
            const indiceAleatorio = Math.floor(Math.random() * amigos.length);
            const amigoSorteado = amigos[indiceAleatorio];

            // Mostrar o resultado
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = `<li>${amigoSorteado}</li>`;
        }