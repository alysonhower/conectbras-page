<script lang="ts">
    import { modeCurrent } from '@skeletonlabs/skeleton';
    export let windowWidth: number;
</script>

<div>
    <h3 class="h3">
        <strong>2 - Baixando os documentos localmente</strong>
    </h3>
    <br />
    <p>
        Ao acessar o link você terá acesso aos documentos na plataforma Google
        Drive. Note que os documentos já estarão organizados em pastas de
        maneira a se aproximar ao esperado pelo solicitante dentro do que é
        viável no momento. A figura 2-5 logo {windowWidth >= 1024
            ? 'ao lado'
            : 'um pouco mais abaixo'} ilustra os pontos de interesse que serão detalhados
        a seguir:
    </p>
    <br />
    <ol class="list-decimal list-inside space-y-4">
        <li>
            <strong>Selecionar pasta:</strong>
            No nosso exemplo, os documentos são do departamento de Contabilidade,
            portanto, neste caso iremos clicar em “Contabilidade”. No seu caso específico,
            clique sobre o nome do setor que desejar.
        </li>
        <li>
            <strong>Baixar arquivos:</strong>
            Após selecionar a pasta desejada, no menu que se abre clique no botão
            "Fazer download" e aguarde a solicitação ser processada pelo sistema.
            Para acompanhar o processo de solicitação de download, observe no canto
            inferior direito da mesma tela a caixa "Preparando o download". Perceba
            que, dependendo da quantidade de documentos e do tamanho de cada um,
            é possível que o processo leve vários minutos para ser concluído pois
            os documentos serão compactados no formato ZIP e em seguida podem ser
            divididos em vários arquivos ZIP. Concluído o processamento do download,
            na caixa de diálogo que se abrir clique em "Salvar como", ou equivalente,
            e em seguida escolha a pasta do seu computador onde o(s) arquivo(s) devem
            ser salvo(s).
        </li>
        <li>
            <strong>Extrair documentos:</strong>
            Abra o Explorador de Arquivos e siga para a pasta onde os arquivos foram
            baixados. Para extrair os documentos baixados clique com o botão direito
            no arquivo ZIP e selecione a opção "Extrair tudo..."; em seguida, na
            janela que se abrir escolha uma pasta do seu computador para salvar os
            documentos que vão ser extraídos. Caso os documentos estejam divididos
            em mais de um arquivo ZIP, repita o processo para cada um deles e extraia
            todos os arquivos na mesma pasta para mantermos os documentos salvos
            no mesmo local
        </li>
    </ol>
</div>
<figure>
    <img
        title="Figura 2-5: Print de tela do repositorio do Google Drive que contém os documentos organizados."
        alt="Figura 2-5: Print de tela do repositorio do Google Drive que contém os documentos organizados."
        src="/images/example-002.png"
        class="h-auto w-full brightness-100 rounded-lg"
        class:brightness-75="{!$modeCurrent}" />
    <figcaption>
        <small
            ><strong
                >Figura 2-5: Print de tela do repositorio do Google Drive que
                contém os documentos organizados.</strong>
        </small>
    </figcaption>
</figure>
