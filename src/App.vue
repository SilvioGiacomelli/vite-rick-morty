<script>
import axios from 'axios';
import {store} from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
  export default {
    components:{
      Header,
      Main,
    },
    data(){
      return{
        store,

      }
    },
    methods:{
      getApi(){
        axios.get(this.store.apiUrl, {
          params:store.queryParams
        })
        .then(result => {
          this.store.cardList = result.data.results
          console.log(this.store.cardList);
        })
        .catch(error => {
          console.log(error);
        })
      },
      getAllnames(){
        axios.get(this.store.nameUrl)
        .then(result => {
          console.log(result.data.results);
          this.store.nameList = result.data.results.map(item => item.name);
          console.log(this.store.nameList);
        })
      },
    },
    mounted(){
      this.getApi(),
      this.getAllnames(),
      this.getAllstatus(),
      this.getAllspecies()
    }
  }
</script>

<template>
  <Header @startSearch="getApi" />
  <Main />
</template>



<style lang="scss">
@use './assets/scss/main.scss';
</style>