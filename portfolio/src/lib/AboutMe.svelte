<script>
	import { base } from '$app/paths';
</script>

<div class="container h-full mx-auto flex flex-col xl:flex-row items-center justify-around">
	<div class="card p-4 justify-center items-center flex md:flex-row flex-col md:w-[600px] w-80">
		<div>
			<img alt="Picture of me" src="{base}/edizportrait.jpg" class="pointer-events-none select-none min-w-[240px]" />
		</div>
		<div class="mt-2 md:mt-0">
			<p class="px-10">
				Hello!<br /><br /> I'm Ediz and I was born in 1997 in Germany. Aiming to become a skilled full-stack
				developer, I started my journey in 2022 and have developed a passion for it ever since. Other
				than that, I like spending time with friends and playing video games in my free time.
			</p>
		</div>
	</div>
	<div class="md:w-[600px] md:visible invisible absolute md:relative">
		<div class="flex flex-row justify-evenly my-10">
			<div
				class="flex flex-col w-40 items-center border-4 rounded-2xl border-primary-200 transition hover:scale-110"
			>
				<img class="w-16 h-16 pt-2" alt="JavaScript" src="{base}/Unofficial_JavaScript_logo_2.svg" />
				<p class="pb-2">JavaScript</p>
			</div>
			<div
				class="flex flex-col w-40 items-center border-4 rounded-2xl border-primary-200 transition hover:scale-110"
			>
				<img class="w-16 h-16 pt-2" alt="Java" src="{base}/Java_cup.svg" />
				<p class="pb-2">Java</p>
			</div>
		</div>
		<div class="flex flex-row justify-between my-10">
			<div
				class="flex flex-col w-40 items-center border-4 rounded-2xl border-primary-200 transition hover:scale-110"
			>
				<img class="w-16 h-16 pt-2" alt="Svelte" src="{base}/Svelte_Logo.svg" />
				<p class="pb-2">Svelte</p>
			</div>
			<div
				class="flex flex-col w-40 items-center border-4 rounded-2xl border-primary-200 transition hover:scale-110"
			>
				<img class="w-16 h-16 pt-2" alt="CSS" src="{base}/Angular_full_color_logo.svg" />
				<p class="pb-2">Angular</p>
			</div>
		</div>
		<div class="flex flex-row justify-evenly my-10">
			<div
				class="flex flex-col w-40 items-center border-4 rounded-2xl border-primary-200 transition hover:scale-110"
			>
				<img class="w-16 h-16 pt-2" alt="HTML" src="{base}/HTML5_logo_and_wordmark.svg" />
				<p class="pb-2">HTML/CSS</p>
			</div>
			<div
				class="flex flex-col w-40 items-center border-4 rounded-2xl border-primary-200 transition hover:scale-110"
			>
				<img class="w-16 h-16 pt-2" alt="Git" src="{base}/Git_icon.svg" />
				<p class="pb-2">Git</p>
			</div>
		</div>
	</div>
</div>
