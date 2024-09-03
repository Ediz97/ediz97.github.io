<script>
	import AboutMe from '$lib/AboutMe.svelte';
	import Minesweeper from '$lib/Minesweeper.svelte';
	import TuffPass from '$lib/TuffPass.svelte';
	import DigitalMacroPad from '$lib/DigitalMacroPad.svelte';
	import Socials from '$lib/Socials.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { Fullpage, FullpageSection } from 'svelte-fullpage';

	let greetVisitor = false;

	onMount(() => {
		greetVisitor = true;
	});
</script>

<Fullpage scrollDuration={500}>
	<FullpageSection>
		<div class="container h-full mx-auto flex justify-center items-center">
			{#if greetVisitor}
				<div transition:fade={{ duration: 2000 }} class="space-y-5 text-center justify-center">
					<h1 class="h1">Hey, I'm Ediz!</h1>
					<p>Scroll down to learn more about me.</p>
					<br />
					<div class="flex justify-center">
						<svg
							class="animate-bounce hover:fill-primary-300"
							fill="currentColor"
							width="60"
							height="60"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							fill-rule="evenodd"
							clip-rule="evenodd"
							><path
								d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z"
							/></svg
						>
					</div>
				</div>
			{/if}
		</div>
	</FullpageSection>

	<FullpageSection>
		<AboutMe />
	</FullpageSection>

	<FullpageSection>
		<Minesweeper />
	</FullpageSection>

	<FullpageSection>
		<TuffPass />
	</FullpageSection>

	<FullpageSection>
		<DigitalMacroPad />
	</FullpageSection>

	<FullpageSection>
		<Socials />
	</FullpageSection>
</Fullpage>
