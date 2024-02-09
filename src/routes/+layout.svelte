<script lang="ts">
  import { page } from '$app/stores';
  import { pageState } from '$lib';
  import logoDarkMode from '$lib/assets/logo-dark-mode.png';
  import logoLightMode from '$lib/assets/logo-light-mode.png';
  import '../app.postcss';
  import {
    AppShell,
    AppBar,
    TabAnchor,
    TabGroup,
    modeCurrent,
    modeOsPrefers,
    modeUserPrefers,
  } from '@skeletonlabs/skeleton';
  import LightSwitcher from './LightSwitcher.svelte';
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  inject({ mode: dev ? 'development' : 'production' });
  injectSpeedInsights();

  let isNotBlog = $page.url.pathname !== '/blog/basic-compliance-guide-010';
</script>

{#if isNotBlog}
  <AppShell>
    <svelte:fragment slot="header">
      <AppBar class="select-none">
        <svelte:fragment slot="lead">
          <TabAnchor href="/" selected="{$page.url.pathname === '/'}">
            {#if $modeCurrent}
              <img
                alt="Conectbras"
                src="{logoLightMode}"
                class="h-7 w-auto select-none" />
            {:else}
              <img
                alt="Conectbras"
                src="{logoDarkMode}"
                class="h-7 w-auto select-none" />
            {/if}
          </TabAnchor>
        </svelte:fragment>
        <svelte:fragment slot="trail">
          <TabGroup>
            <TabAnchor href="/" selected="{$page.url.pathname === '/'}"
              >Início</TabAnchor>
            <TabAnchor
              href="/solutions"
              selected="{$page.url.pathname === '/solutions'}"
              >Soluções</TabAnchor>
            <TabAnchor
              href="/about"
              selected="{$page.url.pathname === '/about'}">Sobre</TabAnchor>
          </TabGroup>
        </svelte:fragment>
      </AppBar>
    </svelte:fragment>
    <slot />
  </AppShell>
{:else}
  <slot />
{/if}

<LightSwitcher />
