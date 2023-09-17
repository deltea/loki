<script lang="ts">
  import { onMount } from "svelte";

  const fonts = [
    "Anton",
    "Black Ops One",
    "Croissant One",
    "Fuggles",
    "Gloria Hallelujah",
    "Lilita One",
    "Lobster",
    "Playfair Display",
    "Shadows Into Light",
    "Yellowtail",
    "Bungee",
    "Leckerli One",
    "Gochi Hand",
    "Holtwood One SC",
    "Fredericka the Great",
    "Kablammo",
    "Creepster",
    "Arizonia",
    "Rubik Moonrocks",
    "Wallpoet",
    "Rye",
    "Henny Penny",
    "Pirata One",
    "Limelight",
    "Aladin",
    "Nova Mono",
  ];

  function random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  let music: HTMLAudioElement;

  onMount(() => {
    const container = document.getElementById("effect");
    if (!container) return;

    const letters = container.innerText.split("") ?? [];
    const characters: HTMLSpanElement[] = [];
    const delay = 60000 / 108;
    container.innerText = "";

    letters.forEach(letter => {
      const newElement = document.createElement("span");
      newElement.innerText = letter;
      newElement.style.position = "relative";
      container?.appendChild(newElement);
      characters.push(newElement);
    });

    function tick() {
      characters.forEach(character => {
        character.style.fontFamily = `'${fonts[Math.floor(Math.random() * fonts.length)]}', cursive`;
        character.style.textShadow = "#fff 0 0 20px, #fff 0 0 50px";
        character.style.top = `${random(-15, 15)}px`;
        character.style.left = `${random(-10, 10)}px`;
      });
    }

    tick();

    const loop = setInterval(tick, delay);
    document.addEventListener("click", () => music.play());

    () => {
      clearInterval(loop);
      document.removeEventListener("click", () => music.play());
    }
  });
</script>

<main class="h-full bg-black text-white flex justify-center items-center">
  <div id="effect" class="text-[12rem] gap-[180px] flex justify-center">Loki</div>
</main>

<audio loop src="/loki.mp3" bind:this={music}></audio>
