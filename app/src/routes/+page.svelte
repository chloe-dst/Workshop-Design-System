<script>
  import Text from '../components/UI/atoms/Text.svelte';
  import Button from '../components/UI/atoms/Button.svelte';
  import Input from '../components/UI/atoms/Input.svelte';
  import Link from '../components/UI/atoms/Link.svelte';
  import Image from '../components/UI/atoms/Image.svelte';
  import '../assets/global.css';
</script>

<Text 
textTag='h2' textStyle='title'>
Bienvenue
</Text>

<Input
  type='text'
  id='username'
  name='username'
  placeholder='Username'/>

<Button> Se connecter </Button>
<Link
linkUrl='/reset-password'> 
Mot de passe oublié ? 
</Link>

<Image imageSrc='https://media.istockphoto.com/id/479667835/fr/photo/fond-d%C3%A9l%C3%A9phant.jpg?s=612x612&w=0&k=20&c=9ITtu0uw442L1ZqendBip950z3tgWdkYu8F12B2hyWE='/>
