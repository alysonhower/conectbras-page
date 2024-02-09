<script lang="ts">
    import { modeCurrent } from '@skeletonlabs/skeleton';
    export let windowWidth: number;
</script>

<div>
    <h3 class="h3">
        <strong
            >1 - Verificando a conclusão de lote, analisando as informações do
            contato e acessando os documentos</strong>
    </h3>
    <br />
    <p>
        Após a conclusão e entrega de um conjunto de documentos processados pela
        Conectbras, é prática comum receber uma confirmação por e-mail a partir
        do domínio oficial da Conectbras (<a
            href="mailto:contato@conectbras.com"
            ><u>contato@conectbras.com</u></a
        >), geralmente intitulado "Notifição de Conclusão de Lote". Note que
        este e-mail contém informações cruciais sobre o serviço prestado durante
        esse período. A figura 1-5 {windowWidth >= 1024
            ? 'ao lado'
            : 'um pouco mais abaixo'} ilustra os pontos de interesse que serão detalhados
        a seguir:
    </p>
    <br />
    <ol class="list-decimal list-inside space-y-4">
        <li>
            <strong>Apresentação:</strong>
            Nos dois primeiros parágrafos do exemplo, a pessoa designada pela Conectbras
            cumprimenta os destinatários, apresenta-se e esclarece o propósito do
            contato.
        </li>
        <li>
            <strong>Informações:</strong>
            No exemplo, a seção intitulada “Cópias digitais autenticadas com assinatura
            e carimbo do tempo” indica que os documentos passaram por um ou mais
            processos que visam cumprir os requisitos legais para a produção de cópias
            digitais autênticas. Além disso, um pouco abaixo é possível inferir que
            esses documentos pertencem ao departamento de Contabilidade e se referem
            ao ano 2017.
        </li>
        <li>
            <strong>Links:</strong>
            Ainda no mesmo exemplo, os documentos podem ser acessados clicando nos
            links disponibilizados; neste caso, vamos clicar no primeiro link que
            aparece com o texto “este link²” para termos acesso ao conteúdo organizado.
            Caso o link não funcione você pode acessar o conteúdo copiando e colando
            a URL disponibilizada abaixo do título “Link para o conteúdo organizado¹”
            no seu navegador.
        </li>
    </ol>
    <br />
    <p>
        Para continuarmos, por gentileza, *acesse o link para o repositório que
        contém os documentos do e-mail de notificação de conclusão de lote.
    </p>
    <br />
    <small
        ><strong
            >*Note que é necessário estar autenticado com sua conta Google e ter
            a permissão para acessar os documentos.</strong
        ></small>
</div>
<figure>
    <img
        title="Figura 1-5: Print de tela de um típico e-mail de notificação de conclusão de lote."
        alt="Figura 1-5: Print de tela de um típico e-mail de notificação de conclusão de lote"
        src="/images/example-001.png"
        class="h-auto w-full brightness-100 rounded-lg"
        class:brightness-75="{!$modeCurrent}" />
    <figcaption>
        <small
            ><strong
                >Figura 1-5: Print de tela de um típico e-mail de notificação de
                conclusão de lote</strong>
        </small>
    </figcaption>
</figure>
