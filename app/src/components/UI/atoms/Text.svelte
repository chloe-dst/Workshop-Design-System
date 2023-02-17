<script>
  /**
   * @type {string}
  */
  export let textTag = 'p';
  export let textColor = 'var(--color-text-dark)';
  export let textStyle = 'text-body';
</script>

<svelte:element this={textTag}
  style:color={textColor}
  class={textStyle} 
>
  <slot/>
</svelte:element>


