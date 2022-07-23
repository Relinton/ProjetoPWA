// Este é o trabalhador do serviço "Cópia off-line de páginas"

const CACHE = "pwabuilder-offline_1.0";//Toda vez que fizer alteraçãoes e quiser que seja atualizado para todos que usam o aplicativo só mudae o nome ou versão do cache ex: "pwabuilder-offline_1.1"

// TODO: substitua o seguinte pela página de fallback offline correta, ou seja: const offlineFallbackPage = "Home/Contact";
const offlineFallbackPage = [
    '/',
    '/Home/About'
];

// O estágio de instalação configura a página de índice (página inicial) no cache e abre um novo cache
self.addEventListener("install", function (event) {
    console.log("[PWA Builder] Instalar processamento de eventos");

    ///Adicionando páginas para acesso offline
    event.waitUntil(
        caches.open(CACHE).then(function (cache) {
            console.log("[PWA Builder] Página offline em cache durante a instalação");
            return cache.addAll(offlineFallbackPage);
        })
    );

    // Remove cache antigos do app ao mudar a versão ou nome.
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE) {
                    console.log('[ServiceWorker] Removendo cache antigos ', key);
                    return caches.delete(key);
                }
            }));
        })
    );
});

//// Se alguma busca falhar, ela procurará a solicitação no cache e a servirá a partir daí primeiro
self.addEventListener("fetch", function (event) {
    if (event.request.method !== "GET") return;
    event.respondWith(
        fetch(event.request)
            .then(function (response) {
                console.log("[PWA Builder] adicione página ao cache offline: " + response.url);

                // Se a solicitação foi bem-sucedida, adicione ou atualize-a no cache
                event.waitUntil(updateCache(event.request, response.clone()));

                return response;
            })
            .catch(function (error) {
                console.log("[PWA Builder] Falha na solicitação de rede. Servindo conteúdo do cache: " + error);
                return fromCache(event.request);
            })
    );
});


function fromCache(request) {
    // Verifique se você o possui no cache
    // Retornar resposta
    // Se não estiver no cache, retorne a página de erro
    return caches.open(CACHE).then(function (cache) {
        return cache.match(request).then(function (matching) {
            if (!matching || matching.status === 404) {
                return Promise.reject("no-match");
            }

            return matching;
        });
    });
}

function updateCache(request, response) {
    return caches.open(CACHE).then(function (cache) {
        return cache.put(request, response);
    });
}
