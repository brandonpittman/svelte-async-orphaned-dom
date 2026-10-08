<script>
	import Child from "../lib/Child.svelte";

	const value = await new Promise((resolve) => setTimeout(() => resolve("ready"), 50));
</script>

<Child {value} />
