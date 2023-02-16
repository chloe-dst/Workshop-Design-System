<script>
  import Text from '../components/UI/atoms/Text.svelte';
  import Button from '../components/UI/atoms/Button.svelte';
  import Link from '../components/UI/atoms/Link.svelte';
  import '../assets/global.css';
</script>

<Text 
tag='h2' style='title'>
Bienvenue
</Text>

<Button> Se connecter </Button>
<Link
link='/reset-password'> 
Mot de passe oublié ? 
</Link>