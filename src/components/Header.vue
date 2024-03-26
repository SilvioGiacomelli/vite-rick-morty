<script>
import {store} from '../data/store'
  export default {
    data(){
      return{
        store,
        nameToSearch:''
      }
    },

    methods:{
      startSearch(){
        console.log('ricerca');
        this.store.queryParams = {
          num: 20,
          offset: 0,
          language:'en',
          name: this.nameToSearch
        }
        this.$emit('startSearch')
      }
    }

  }
</script>


<template>
  <div class="container text-center my-5">
    <h1>{{ store.mainTitle }}</h1>

    <input 
    class="form-control" 
    list="datalistOptions" 
    id="exampleDataList" 
    placeholder="Type to search..."
    v-model.trim="nameToSearch"
    @keyup.enter="startSearch"
    >
    <datalist id="datalistOptions">
      <option
      v-for="(nome,index) in this.store.nameList"
      :key="index" 
      :value="nome">
    </option>
    </datalist>
  </div>
</template>



<style lang="scss" scoped>

</style>