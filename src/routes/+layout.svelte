<script>
	let { children } = $props();
</script>

<nav><a href="/">home</a> <a href="/inline">inline</a> <a href="/other">other</a> <a href="/next">next</a></nav>
<main>{@render children()}</main>
