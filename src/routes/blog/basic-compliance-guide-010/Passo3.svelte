<script lang="ts">
    import { modeCurrent } from '@skeletonlabs/skeleton';
    export let windowWidth: number;
</script>

<div>
    <h3 class="h3">
        <strong>3 - Instalando o VeraPDF</strong>
    </h3>
    <br />
    <p>
        Baixados e salvos os documentos localmente, para verificarmos os
        documentos é necessário instalarmos um utilitário chamado VeraPDF. O
        VeraPDF é capaz de avaliar a estrutura do PDF e verificar se o documento
        foi gerado de forma correta e ainda se não existem inconsistências com o
        mesmo; em poucas palavras o VeraPDF verifica se o documento em questão é
        adequado para preservação digital de longo termo.
    </p>
    <br />
    <p>
        Para instalar o VeraPDF, por gentileza, siga a sequência conforme os
        passos a seguir:
    </p>
    <br />
    <ol class="list-decimal list-inside space-y-4">
        <li>
            <strong>Instalando o Java: </strong>o VeraPDF demanda que seu
            compudador possua Java instalado para funcionar corretamente; logo,
            se o Java não estiver instalado, por favor, instale-o agora. Para
            instalar o Java, baixe seu instalador clicando
            <a
                href="https://www.java.com/pt-BR/download/"
                target="_blank"
                rel="noopener noreferrer"><u>neste link</u></a
            >. Caso o link não funcione, copie e cole a URL abaixo no seu
            navegador para fazer download.
            <br />
            <br />
            <code>https://www.java.com/pt-BR/download/</code>
            <br />
            <br />
            Uma vez baixado o instalador, execute-o com um clique duplo e siga suas
            instruções de instalação até a conclusão.
        </li>
        <li>
            <strong>Instalando o VeraPDF:</strong>
            com o Java devidamente instalado agora podemos prosseguir com o download
            do instalador do VeraPDF. Para isso, acesse
            <a
                href="https://software.verapdf.org/releases/verapdf-installer.zip"
                target="_blank"
                rel="noopener noreferrer"><u>este link</u></a>
            ou, caso o link não funcione, copie e cole a URL abaixo no seu navegador
            para baixar o VeraPDF; salve-o na pasta Downloads ou qualquer local de
            sua escolha.
            <br />
            <br />
            <code
                >https://software.verapdf.org/releases/verapdf-installer.zip</code>
            <br />
            <br />
            Para instalar o VeraPDF, extraia o arquivo ZIP do instalador, acesse
            a pasta extraida e abra a pasta "verapdf-greenfield" que está em seu
            interior. Em seguida, execute o arquivo "verapdf-install.bat" e siga
            as instruções do instalador clicando em "Next" até o botão "Done" aparecer
            conforme a figura 3-5 logo {windowWidth >= 768
                ? 'ao lado'
                : 'mais abaixo'}.
            <br />
            <br />
            Ainda na janela do instalador, observe e anote como referência o local
            onde o VeraPDF está instalado conforme o exemplo da figura 3-5 logo {windowWidth >=
            768
                ? 'ao lado'
                : 'mais abaixo'}. Este local variará de acordo com o nome do
            usuário do Windows, veja: no exemplo, note que o VeraPDF foi salvo
            em “C:\Users\conta\verapdf” porque o nome do usuário do exemplo é
            "conta". Dessa forma, para saber onde o VeraPDF está instalado no
            seu computador, substitua “conta” pelo nome do seu usuário do
            Windows, por exemplo, meu usuário do Windows é "ana", logo, o local
            de instalação do VeraPDF no meu computador será
            “C:\Users\ana\verapdf”. Uma vez anotado o local onde o VeraPDF está
            instalado clique em “Done” para finalizar a instalação.
        </li>
        <li>
            <strong
                >Criando um atalho para o VeraPDF na Área de Trabalho:</strong>
            Localize a pasta onde o VeraPDF está instalado conforme a referência
            que você anotou no item anterior; acesse a pasta e clique com o botão
            direito do mouse sobre o arquivo "verapdf-gui.bat"; no menu de contexto
            que abriu procure a opção "Enviar para" e escolha a opção "Área de trabalho
            (criar atalho)". Em seguida, note que o atalho para lançar o VeraPDF
            foi criado na sua Área de Trabalho.
        </li>
    </ol>
</div>
<figure>
    <img
        title="Figura 3-5: Print de tela do instalador do VeraPDF."
        alt="Figura 3-5: Print de tela do instalador do VeraPDF."
        src="/images/example-003.png"
        class="h-auto w-full brightness-100 rounded-lg"
        class:brightness-75="{!$modeCurrent}" />

    <figcaption>
        <small
            ><strong
                >Figura 3-5: Print de tela do instalador do VeraPDF.</strong>
        </small>
    </figcaption>
</figure>
