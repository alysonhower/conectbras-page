<script lang="ts">
    import { modeCurrent } from '@skeletonlabs/skeleton';
    export let windowWidth: number;
</script>

<div>
    <h3 class="h3 text-left">
        <strong
            >5 - Verificando a conformidade da assinatura e do carimbo dos
            documentos através do Verificador de Conformidade do ITI</strong>
    </h3>
    <br />
    <p>
        Outro ponto importante para a produção de documentos juridicamente
        validos e que portanto agrega robustez ao às vias digitais é a
        assinatura e o carimbo do tempo; preferencialmente da entidade
        responsável pela guarda do documento, ou melhor, o setor responsável por
        ele.
    </p>
    <br />
    <p>
        Note que geralmente um documento assinado e carimbado possui um
        representação visual desse carimbo, porém, existem cenários onde esta
        representação visual não estará presente; por tanto, a melhor forma de
        analizar se ela consta ou ainda se a que consta é válida, é utilizar o
        verificador do ITI. Para avaliar se determinado documento contém uma
        assinatura digital com carimbo do tempo, por gentileza, siga a sequência
        a seguir:
    </p>
    <br />
    <ol class="list-decimal list-inside space-y-4">
        <li>
            <strong>Acessando o verificador do ITI:</strong>
            Para acessar o verificador do ITI, clique
            <a
                href="https://verificador.iti.br/"
                target="_blank"
                rel="noopener noreferrer"><u>neste link</u></a
            >, ou, caso o link não funcione, copie e cole a URL abaixo no seu
            navegador.
            <br />
            <br />
            <code>https://verificador.iti.br/</code>
        </li>
        <li>
            <strong>Aceitando os termos de uso:</strong>
            Ao acessar o portal do verificador, um *banner contendo os termos de
            uso deste site deve aparecer automaticamente. Por gentileza, leia o "Termo
            de Responsabilidade e de Uso do Verificador de Conformidade" contido
            no banner. Em seguida, se concordar com as condições, aceite o termo
            marcando a caixa de diálogo correspondente; em seguida, clique no botão
            "Fechar".
            <br />
            <small
                ><strong
                    >*Caso o banner não apareça automaticamente, no menu ao
                    centro, logo abaixo da logo do Instituto Nacional de
                    Tecnologia da Informação, clique em "TERMOS DE USO" e
                    prossiga com as instruções.</strong
                ></small>
        </li>
        <li>
            <strong>Iniciando a verificação:</strong>
            Após aceitar os termos, em "VERIFICADOR DE CONFORMIDADE" clique no botão
            "SELECIONAR ASSINATURA" e sem seguida, na janela que se abrir, escolha
            até 4 documentos em PDF que deseja verificar e clique em "Abrir". Selecionados
            o(s) documento(s), clique no botão "VERIFICAR CONFORMIDADE" e aguarde
            o(s) retorno(s) do(s) relatório(s). Caso deseje verificar mais documentos
            basta repetir o processo selecionando novamente os documentos e clicando
            em "VERIFICAR CONFORMIDADE".
        </li>
        <li>
            <strong>Resultado:</strong>
            Iniciada a verificação, na tela que se segue, na seção intitulada "RELATÓRIO",
            é possível verificar que existe 1 relatório para cada documento selecionado
            e por sua vez cada relatório contém vários itens colapsáveis que podem
            ser expandidos ao serem clicados para exibir as informações neles contidas.
            A figura 5-5 logo
            {windowWidth >= 1024 ? 'ao lado' : 'um pouco mais abaixo'} mostra um
            exemplo de relatório de conformidade que atesta positivamente para a
            presença da assinatura com certificado digital e carimbo do tempo. Por
            gentileza, verifique se existem, e, caso existam, expanda os seguintes
            colapsáveis para confirmar as informações: Informações da LPA, Informações
            de política, Assinatura por ... > Carimbos de tempo. Após expandir os
            colapsaveis, acompanhe os pontos de interesse logo abaixo conforme o
            exemplo.
            <br />
            <br />
            <ul class="list-disc list-inside">
                <li>
                    <strong>Em conformidade:</strong>
                    um documento digitalizado com robustez jurídica estará em conformidade
                    com a Resolução CG ICP-Brasil nº 182/2021.
                </li>
                <li>
                    <strong>LPA PAdES ou CAdES com RT aprovadas:</strong>
                    também é necessário que o documento esteja assinado com o padrão
                    de assinatura CAdES ou PAdES com Referência de Tempo.
                </li>
                <li>
                    <strong>Carimbo do Tempo aprovado:</strong>
                    para finalizar, é necessário que o relatório aponte a presença
                    de carimbos do tempo.
                </li>
            </ul>
            <br />
            A ausência de quaisquer itens aqui identificados pode significar que
            o documento apresenta alguma pendência, por tanto, deve ser revisado.
        </li>
    </ol>
</div>
<figure>
    <img
        title="Figura 5-5: Print de tela de relatório de conformidade"
        alt="Figura 5-5: Print de tela de relatório de conformidade"
        src="/images/example-005.png"
        class="h-auto w-full brightness-100 rounded-lg"
        class:brightness-75="{!$modeCurrent}" />

    <figcaption>
        <small
            ><strong
                >Figura 5-5: Print de tela de relatório de conformidade</strong>
        </small>
    </figcaption>
</figure>
