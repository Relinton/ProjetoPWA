# Progressive Web App(PWA) no Asp Net Core
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Relinton/AspNetCorePaginacaoDataTable/blob/main/LICENSE) 

# Sobre o projeto

Este projeto visa demonstrar a utilização do Progressive Web App(PWA) em uma aplicação Asp Net Core.
Progressive Web App é um termo usado para denotar um conjunto de processos de desenvolvimento de software. Ao contrário dos tradicionais aplicativos, um Progressive Web App pode ser visto como uma evolução híbrida entre as páginas da web regulares e um aplicativo móvel. fonte "Wikipédia".
Surgido como um novo modelo de desenvolvimento de software, o Progressive Web App (PWA) transforma os navegadores (páginas web) em verdadeiras plataformas de apps! fonte "https://www.digitalhouse.com/br/blog/o-que-e-pwa/".

Vantagens
 

Custo de desenvolvimento mais baixo,
Tempo de desenvolvimento menor,
Utilização de componentes da Web (HTML, CSS, JS),
Aplicação consome pouco espaço em disco (Geralmente menos de 2MB),
Consegue enviar notificações,
Tem acesso a alguns elementos do celular como, microfone, câmera, localização,
Economia de bateria,
Não é preciso desenvolver para diferentes sistemas, o mesmo código roda em quase todos.
 
Desvantagens
 

Não suporta todos os navegadores,
Não oferece suporte ao uso de Bluetooth,
Sem suporte a alguns dos sensores do celular,
Impossibilidade de adicionar a Loja de aplicativos,
Não tem a segurança de um aplicativo mobile.

## Vídeo demonstrativo
[screen-capture.webm](https://user-images.githubusercontent.com/32855779/180622405-2f605ff2-8aaa-4b3f-88cc-d12041e389ff.webm)

## Criando um PWA utilizando ASP .NET Core
Crie um Projeto Asp net core e Com o projeto já criado, precisamos adicionar a biblioteca que ajuda a tornar nossa aplicação um PWA, no projeto, em gerenciador de pacotes do NuGet adicione o seguinte pacote:
WebEssentials.AspNetCore.PWA

Na raiz da pasta wwwroot adicione um arquivo manifest.json que se encontra no projeto que fiz de exemplo;
adicione também o arquivo pwabuilder-sw.js que também se encontra no projeto, lembre-se de alterar os campos desses arquivos com as informações do seu app;
adicione a pasta ico e imagens;
Depois de feito isto, abra a view _Layout.cshtml e a Index.cshtml, deixei comentado os códigos que irão precisar para fazer funcionar o pwa.  :) 
obrigado! 



# Tecnologias utilizadas
## Front end
- HTML / JSON / JS

## Linguagem utilizada
- C#

# Autor
Relinton Pinheiro

https://www.linkedin.com/in/relinton-pinheiro-9b443bb7/
