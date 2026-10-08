<script>
	const value = await new Promise((resolve) => setTimeout(() => resolve("ready"), 50));
</script>

<p id="child">inline child ({value})</p>
