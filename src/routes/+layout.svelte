<script lang="ts">
  import "../global.css";

  const fontUrl = "https://fonts.googleapis.com/css2?family=Aladin&family=Anton&family=Arizonia&family=Black+Ops+One&family=Bungee&family=Creepster&family=Croissant+One&family=Fredericka+the+Great&family=Fuggles&family=Gloria+Hallelujah&family=Gochi+Hand&family=Henny+Penny&family=Holtwood+One+SC&family=Kablammo&family=Leckerli+One&family=Lilita+One&family=Limelight&family=Lobster&family=Nova+Mono&family=Pirata+One&family=Playfair+Display:wght@400;700&family=Rubik+Moonrocks&family=Rye&family=Shadows+Into+Light&family=Wallpoet&family=Yellowtail&display=swap";
</script>

<svelte:head>
  <title>Loki</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😈</text></svg>">

  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link rel="preload" as="style" href={fontUrl}>
  <link rel="stylesheet" href={fontUrl}>
</svelte:head>

<div class="h-screen">
  <slot />
</div>
