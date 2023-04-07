<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import '../app.postcss';
	import logo from '$lib/assets/polysensus.png'

</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="{logo}"
      class="mr-3 h-6 sm:h-9"
      alt="Polysensus Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
     Polysensus 
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/web3auth" active={true}>Signup/Signin</NavLi>
  </NavUl>
</Navbar>

<slot />