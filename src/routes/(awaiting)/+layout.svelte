<script>
	let { children } = $props();

	await new Promise((resolve) => setTimeout(resolve, 20));
</script>

{@render children()}
