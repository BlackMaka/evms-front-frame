import { outhApi } from "../../api";
export default{
  namespaced:true,
  state : ()=>({
    TOKEN:'',
  }),
  //getters,
  mutations:{
    SET_TOKEN(state, payload){
      state.TOKEN = payload;
    }
  },
  actions:{
    async fetchOauth(context, payload){
      const data = await outhApi.fetchOauth(payload);
      context.commit('SET_TOKEN',data);
      console.log(data);
      return ;
    }
  }
}