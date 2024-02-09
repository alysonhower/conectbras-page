<script src="ts">
  import { getImageLink } from '$lib/images';
  import { Avatar } from '@skeletonlabs/skeleton';
  import UnderConstructionCard from '../UnderConstructionCard.svelte';
  let currentVariant = 'bg-initial';
</script>

<div class="p-4 w-full text-token grid grid-cols-1 md:grid-cols-2 gap-4">
  <a
    class="card {currentVariant} card-hover overflow-hidden select-none"
    href="/solutions/pc2d">
    <header>
      <img
        src="{getImageLink({ id: 'pilhas_de_documentos', w: 400, h: 175 })}"
        class="bg-black/50 w-full aspect-[21/9]"
        alt="Post" />
    </header>
    <div class="p-4 space-y-4">
      <h6 class="h6" data-toc-ignore>Em breve</h6>
      <h3 class="h3 font-bold" data-toc-ignore>
        PC2D - A Plataforma de Conformidade, Preservação e Compartilhamento
        Documental corporativa da Conectbras
      </h3>
      <article>
        <p>
          <!-- cspell:disable -->
          A solução definitiva para processamento, validação e compartilhamento de
          documentos de valor jurídico capaz de atribuir integridade, confiabilidade,
          rastreabilidade e auditabilidade a cópias simples em PDF de documentos
          físicos válidos de forma com que suas versões digitais sejam convertidas
          à especificação adequada para armazenamento de longo prazo, contenham metadados
          exigidos pela lei, sejam assinados com certificado padrão ICP-Brasil com
          garantias quanto às temporalidades por meio do carimbo do tempo, permanendo,
          então, juridicamente válidas por tempo indeterminado mantendo suas características,
          efeitos e autenticidade plenamente resguardados e reconhecidos pela lei
          brasileira através da implementação do tratamento documental conforme delineado
          pela Lei nº 13.874, de 2019 e pelo Decreto no 10.278, de 18 de março de
          2020 e atendendo aos quesitos estabelecidos pela PDF Association (PDF Association)
          e pela Open Preservation Foundation (Fundação de Preservação Aberta).
          <!-- cspell:disable -->
        </p>
      </article>
    </div>
    <hr class="opacity-50" />
    <footer class="p-4 flex justify-start items-center space-x-4">
      <Avatar
        src="{getImageLink({ id: 'github_alysonhower', w: 32, h: 32 })}"
        width="w-8" />
      <div class="flex-auto flex justify-between items-center">
        <h6 class="font-bold" data-toc-ignore>Alysonhower</h6>
        <small>Em {new Date().toLocaleDateString()}</small>
      </div>
    </footer>
  </a>
  <a
    class="card {currentVariant} card-hover overflow-hidden"
    href="/solutions/">
    <UnderConstructionCard />
  </a>
</div>
