<script>
  /**
  * @type {string}
  */
  export let tag = 'p';
  export let color = 'var(--color-text-dark)';
  export let style = 'text-body';
</script>

<svelte:element this={tag}
  style:color={color}
  class={style} 
>
  <slot/>
</svelte:element>


