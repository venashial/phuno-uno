<script>
	import Hand from './_Game/_Hand.svelte';
	import Piles from './_Game/_Piles.svelte';
	import Players from './_Game/_Players.svelte';
	import Menu from './_Game/_Menu.svelte';
	import { gamePage } from './_store.js';
	import Leave from './_Game/_Page/_Leave.svelte';
	import Help from './_Game/_Page/_Help.svelte';
  import History from './_Game/_Page/_History.svelte';
	import { fly } from 'svelte/transition';
  import { onMount } from 'svelte'

  let windowHeight = window.innerHeight

  onMount(() => {
    addEventListener('resize', () => {
      windowHeight = window.innerHeight
    })
  })
</script>

<div class="game" style="height: calc({windowHeight}px + 0.5rem);">
	{#if $gamePage.page}
		<div
			class="page"
			style="background-color: {$gamePage.color.replace('60%, 1)', '30%, 0.8)')}"
		>
    	<!-- transition:fly={{ y: -1000, duration: 1000 }} -->
			{#if $gamePage.page === 'leave'}
				<Leave />
			{:else if $gamePage.page === 'help'}
				<Help />
      {:else if $gamePage.page === 'history'}
        <History />
			{/if}
		</div>
	{/if}
	<div class="hand-table">
		<div class="table">
			<Players />
			<Piles />
		</div>
		<Hand />
	</div>
	<Menu />
</div>

<style lang="scss">
	.game {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100vw;
		overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
		margin-top: -0.5rem;
    background-color: hsl(20, 30%, 25%);

		.page {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;
			width: calc(100% - 2rem);
			height: calc(100% - 110px);
			display: flex;
			flex-direction: column;
			color: white;
			padding: 1rem;
			backdrop-filter: blur(10px);
      grid-gap: 0.5rem;
      overflow-y: auto;

			:global(button) {
        flex: 0 1;
			}

			@media screen and (min-width: 600px) {
        justify-content: flex-start;
				width: calc(100vw - (100vw - 600px));
				padding: 1rem calc((100vw - 600px) / 2);
			}
		}

		.hand-table {
			display: grid;
			grid-template-columns: 1fr 9rem;
			height: calc(100% - 80px);
			max-height: calc(100% - 80px);

			/*
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 15rem;
      width: 100vw
    }
    */

			.table {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 0.5rem 0;
				max-height: calc(100vh - 5rem);
				grid-gap: 2rem;
			}
		}
	}
</style>
