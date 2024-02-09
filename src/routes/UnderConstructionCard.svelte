<script lang="ts">
  import { getImageLink } from '$lib/images';
  import { Avatar } from '@skeletonlabs/skeleton';
  import IcRoundConstruction from 'virtual:icons/ic/round-construction';
</script>

<div class="card text-token m-4 overflow-hidden select-none">
  <header
    class="card-header flex-auto flex justify-start items-center space-x-4 font-bold">
    <span><IcRoundConstruction /></span>
    <h3 class="h3">Em construção</h3>
  </header>
  <section class="p-4 space-y-4">
    <article>
      <p>
        <!-- cspell:disable -->
        Esta página está em desenvolvimento. Obrigado pela paciência.
        <!-- cspell:enable -->
      </p>
    </article>
  </section>
  <hr class="opacity-50" />
  <footer class="flex justify-start items-center space-x-4 p-4">
    <Avatar
      src="{getImageLink({ id: 'github_alysonhower', w: 32, h: 32 })}"
      width="w-8" />
    <div class="flex-auto flex justify-between items-center">
      <h6 class="font-bold" data-toc-ignore>Alysonhower</h6>
      <small>Em {new Date().toLocaleDateString()}</small>
    </div>
  </footer>
</div>
