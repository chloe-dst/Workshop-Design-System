<script>
    /**
   * @type {string}
   */
     export let tag = 'p';
     export let color = 'primary--color';
     export let style = 'body--1';
</script>

<svelte:element this={tag}
  class={color, style} 
><slot/></svelte:element>