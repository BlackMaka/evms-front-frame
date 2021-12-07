<template>
  
    <template v-if="$route.path === '/login'">
    <Login/>
    </template>
    <template v-else>
      <Header/>
      <Menu/>
      <RouterView>
        <!-- Main -->
      </RouterView>
      <Footer/>
    </template>
  
</template>

<script>
import Login from '@/views/Login';
import Header from '@/views/Header';
import Menu from '@/views/Menu';
import Footer from '@/views/Footer';
//import axios from 'axios';
export default {
  components:{
    Login,
    Header,
    Menu,
    Footer
  },
  mounted(){
    
   
  }
}
</script>

<style>

</style>