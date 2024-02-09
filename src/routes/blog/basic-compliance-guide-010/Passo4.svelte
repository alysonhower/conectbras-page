<script lang="ts">
    import { modeCurrent } from '@skeletonlabs/skeleton';
    export let windowWidth: number;
</script>

<div>
    <h3 class="h3 text-left">
        <strong
            >4 - Verificando a conformidade dos documentos com o VeraPDF</strong>
    </h3>
    <br />
    <p>
        Com o VeraPDF instalado, abra o aplicativo com um clique duplo no atalho
        da Área de Trabalho que criamos no tópico anterior, seu nome
        provavelmentede estará como "verapdf-gui - Atalho". Em seguida a janela
        do aplicativo vai abrir. Com a janela aberta, observe a figura 4-5 {windowWidth >=
        1024
            ? 'ao lado'
            : 'um pouco mais abaixo'}, que ilustra os pontos de interesse
        detalhados a seguir:
    </p>
    <br />
    <ol class="list-decimal list-inside space-y-4">
        <li>
            <strong>Selecionar documentos:</strong>
            O botão <em>Choose PDF</em> permite que o usuário escolha um ou mais
            arquivos ou pastas para serem analisados. Por gentileza, clique no botão;
            então, na janela que se abrir selecione a(s) pasta(s) onde foram salvos
            os documentos que foram baixados e em seguida extraidos conforme o "Passo
            2 - Baixando os documentos localmente" deste mesmo guia.
        </li>
        <li>
            <strong>Iniciar análise:</strong>
            Após selecionada(s) a(s) pasta(s), clique no botão "Execute"; em seguida,
            o aplicativo vai analisar todos os documentos contidos e mostrar o resultado.
            Note que o processo de análise pode levar alguns minutos para ser concluído
            dependendo da quantidade de arquivos sendo analisados.
        </li>
        <li>
            <strong>Resultado parcial:</strong>
            Concluída a análise, agora podemos verificar em
            <em>Items processed: 30, Valid: 30, Invalid: 0, Error: 0</em>,
            conforme o exemplo da figura 4-5, que o resultado parcial indica que
            foram analisados 30 documentos e que todos estão em perfeito estado
            e integridade, sem erros e em conformidade; ou seja, são adequados
            para o armazenamento de longo termo. Caso exista qualquer problema,
            em quaisquer documentos, é possível identificar quantos documentos
            estão com problema no campos
            <em>Invalid</em>
            e <em>Error</em>. Para ter mais detalhes dos documentos
            individualmente, saber os nomes dos documentos e onde se localizam
            em seu computador, ou ainda, verificar qual documento está fora de
            conformidade, por favor, verifique o "Resultado completo" conforme o
            próximo item deste tópico.
        </li>
        <li>
            <strong>Resultado completo:</strong>
            Para visualizar o resultado completo, por gentileza clique no botão
            <em>View HTML</em> conforme o exemplo da figura 4-5. Note que uma
            janela do navegador intitulada <em>Valitation Report</em> se abrirá.
            Perceba que, na janela que se abriu, existem tabelas que nos permitem
            visualizar os detalhes e os resultados de conformidade de cada documento
            individualmente.
        </li>
    </ol>
</div>
<figure>
    <img
        title="Figura 4-5: Print de tela da interface de usuário do VeraPDF"
        alt="Figura 4-5: Print de tela da interface de usuário do VeraPDF"
        src="/images/example-004.png"
        class="h-auto w-full brightness-100 rounded-lg"
        class:brightness-75="{!$modeCurrent}" />

    <figcaption>
        <small
            ><strong
                >Figura 4-5: Print de tela da interface de usuário do VeraPDF</strong>
        </small>
    </figcaption>
</figure>
