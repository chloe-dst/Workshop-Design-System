
<script>
  /**
   * @type {string}
  */
  export let link = '#';
  export let color = 'var(--color-text-dark)';
</script>

<a href="{link}"
  class="link" style:color={color}>          
    <slot/>
</a>

<style>
  .link{
    font-family: var(--font-family-primary);
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-semibold);
    text-decoration: none;
  }
</style>