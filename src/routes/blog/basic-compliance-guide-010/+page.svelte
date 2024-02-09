<script lang="ts">
    import { getImageLink } from '$lib/images';
    import anaCaroline from '$lib/assets/ana-caroline-avatar.png';
    import { Avatar } from '@skeletonlabs/skeleton';
    import IcRoundConstruction from 'virtual:icons/ic/round-construction';
    import IcRoundDone from 'virtual:icons/ic/round-done';
    import { modeCurrent } from '@skeletonlabs/skeleton';
    import LightSwitcher from '../../LightSwitcher.svelte';
    import Passo1 from './Passo1.svelte';
    import Passo2 from './Passo2.svelte';
    import Passo3 from './Passo3.svelte';
    import Passo4 from './Passo4.svelte';
    import Passo5 from './Passo5.svelte';
    import Finalizacao from './Finalizacao.svelte';

    let windowWidth: number;
</script>

<svelte:window bind:innerWidth="{windowWidth}" />

<div class="lg:container lg:mx-auto lg:pt-4 lg:pb-4">
    <div class="card text-token overflow-hidden">
        <header
            class="card-header flex-auto flex flex-col justify-start items-center space-x-4 font-bold">
            <h2 class="h2 text-center">
                Guia básico de verificação de documentos juridicamente válidos -
                Versão 0.1.0
            </h2>
        </header>

        <section class="p-4">
            <article class="p-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <p class="col-span-1 lg:col-span-2">
                    A Conectbras, em função de sua política de 72 horas,
                    disponibiliza este guia a seus clientes para os auxiliar
                    quanto à verificação de documentos digitalizados com
                    robustez jurídica agregada. Dessa forma, garantimos aos
                    interessados a possibilidade de uma verificação extra quanto
                    ao estado das vias digitais, seguida da aplicação das
                    eventuais correções necessárias à conformidade, o que por
                    sua vez agrega mais segurança, confiabilidade e robustez
                    comprobatória a partir da aplicação das melhores práticas no
                    que concerne a preservação digital, sempre de acordo com
                    estabelecido pela lei brasileira.
                </p>
                <p class="col-span-1 lg:col-span-2">
                    Este guia deve ser seguido pelo usuário do início ao fim,
                    porém, também pode ser utilizado como consulta. As
                    instruções aqui contidas assumem que o usuário possui
                    conhecimentos básicos de informática, noções de inglês e
                    está utilizando o sistema operacional Windows; não é
                    necessário qualquer especialização. O guia será atualizado
                    periodicamente de acordo com as politicas e com a frequência
                    estipulada pela Conectbras.
                </p>

                <hr class="col-span-1 lg:col-span-2" />

                <Passo1 {windowWidth} />

                <hr class="col-span-1 lg:col-span-2" />

                <Passo2 {windowWidth} />

                <hr class="col-span-1 lg:col-span-2" />

                <Passo3 {windowWidth} />

                <hr class="col-span-1 lg:col-span-2" />

                <Passo4 {windowWidth} />

                <hr class="col-span-1 lg:col-span-2" />

                <Passo5 {windowWidth} />

                <hr class="col-span-1 lg:col-span-2" />

                <Finalizacao />

                <hr class="col-span-1 lg:col-span-2" />

                <p class="col-span-1 lg:col-span-2">
                    Com isso, por hora, finalizamos. Como anunciado
                    anteriormente, agregaremos mais conteúdo para ajudar nossos
                    clientes conforme necessidades surjam. Em caso de dúvidas,
                    inconsistências ou até mesmo erros neste guia, por
                    gentileza, entre em contato conosco a partir de qualquer
                    canal oficial e retornaremos o quão breve possível.
                </p>

                <p class="col-span-1 lg:col-span-2">
                    Obrigado pela sua atenção e confiança.
                </p>
            </article>
        </section>

        <hr class="opacity-50" />

        <footer class="flex justify-start items-center space-x-4 p-4">
            <Avatar src="{anaCaroline}" width="w-8" />
            <div class="flex-auto flex justify-between items-center">
                <h6 class="font-bold" data-toc-ignore>Ana Caroline</h6>
                <small>Em {new Date().toLocaleDateString()}</small>
            </div>
        </footer>
    </div>
</div>
