<script lang="ts">
  import '../app.postcss';
  import { onMount } from 'svelte';
  import { pageState } from '$lib';
  import {
    modeCurrent,
    modeUserPrefers,
    getModeOsPrefers,
    setModeUserPrefers,
    setModeCurrent,
  } from '@skeletonlabs/skeleton';
  import IcRoundDarkMode from 'virtual:icons/ic/round-dark-mode';
  import IcRoundLightMode from 'virtual:icons/ic/round-light-mode';
  import MaterialSymbolsNightSightAutoRounded from 'virtual:icons/material-symbols/night-sight-auto-rounded';
  import MaterialSymbolsNightSightAutoOffRounded from 'virtual:icons/material-symbols/night-sight-auto-off-rounded';
  import { slide } from 'svelte/transition';

  onMount(async () => {
    setModeCurrent(getModeOsPrefers());
    setModeUserPrefers(getModeOsPrefers());
  });

  let hoverTimeout: NodeJS.Timeout;
  let isMouseOver: boolean;
  let isExpanded: boolean;

  const handleToggleTimers = () => {
    clearTimeout(hoverTimeout);
    isMouseOver = true;
    hoverTimeout = setTimeout(() => isMouseOver && (isMouseOver = false), 1500);
  };

  const handleTogglePrefers = () => {
    isExpanded
      ? setModeCurrent(getModeOsPrefers())
      : setModeCurrent($modeUserPrefers as boolean);
    isExpanded = !isExpanded;
    isExpanded && handleToggleTimers();
  };

  const handleToggleCurrentMode = () => {
    setModeUserPrefers(!$modeCurrent);
    setModeCurrent(!$modeCurrent);
    handleToggleTimers();
  };

  const handleMouseOver = (isOver: boolean) => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => (isMouseOver = isOver), 300);
  };
</script>

<div
  role="group"
  class="btn-group [&>*+*]:border-0 shadow variant-glass z-99 fixed bottom-10 lg:bottom-3 right-3 hover:scale-110 transition-transform duration-300"
  on:mouseover="{() => handleMouseOver(true)}"
  on:mouseleave="{() => handleMouseOver(false)}"
  on:focus>
  <button
    type="button"
    class="aspect-square w-8"
    title="{isExpanded
      ? 'Alternar tema para preferência do sistema.'
      : 'Alternar tema para preferência do usuário.'}"
    on:click="{handleTogglePrefers}">
    <span class="inline-flex justify-center items-center">
      {#if isExpanded}
        <MaterialSymbolsNightSightAutoOffRounded />
      {:else}
        <MaterialSymbolsNightSightAutoRounded />
      {/if}
    </span>
  </button>
  {#if isExpanded && isMouseOver}
    <button
      type="button"
      class="aspect-square w-8"
      title="{$modeCurrent
        ? 'Alternar para modo escuro.'
        : 'Alternar para modo claro.'}"
      transition:slide="{{ axis: 'x', duration: 300 }}"
      on:click="{handleToggleCurrentMode}">
      <span class="inline-flex justify-center items-center">
        {#if $modeCurrent}
          <IcRoundLightMode />
        {:else}
          <IcRoundDarkMode />
        {/if}
      </span>
    </button>
  {/if}
</div>
