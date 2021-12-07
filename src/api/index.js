import axios from 'axios';

export const outhApi = {
  fetchOauth(payload){
    const { mem_id, mem_pw} = payload;
    const form = new FormData();
      form.append('grant_type','password');
      form.append('scope','client');
      form.append('username', mem_id);
      form.append('password', mem_pw);
    return axios.post('/oauth/oauth/token',form,{
      params: {
        otpcode: 1234
      },
      auth: {
        username: 'evms_web',
        password: 'evms!QAZ'
      },
    })
    .then(({data})=>data)
    .catch(err=> console.log(err))
    .finally(console.log('OAUT_TOKEN'))
  }
}

export const productsApi = {
  productList(){
    return axios.post('',{})
    .then(({data})=> data)
    .catch(err=>console.log(err))
    .finally(console.log('get productList api'));
    
  }
}
