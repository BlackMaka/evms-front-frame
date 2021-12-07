<template>
  <h1>Loginpage</h1>
  아이디 : <input type="text" v-model="mem_id">
  비번 : <input type="text" v-model="mem_pw">
  <button @click="Login">버튼</button>
  <!-- <RouterLink to="/header">fsdsd</RouterLink> -->

</template>

<script>
export default {
  data(){
    return{
      mem_id:'',
      mem_pw:'',
    }
  },
  methods:{
    Login(){
      this.$store.dispatch('login/fetchOauth',{
        mem_id : this.mem_id ,
        mem_pw : this.mem_pw
      });
      console.log(`this.$store.state.login.TOKEN ${JSON.stringify(this.$store.state.login.TOKEN)}`);
    }
  }
}
</script>

<style>

</style>