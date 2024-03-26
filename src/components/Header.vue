<script>
import {store} from '../data/store'
  export default {
    data(){
      return{
        store
      }
    }

  }
</script>


<template>
  <div class="container text-center my-5">
    <h1>{{ store.mainTitle }}</h1>
    <!-- <label for="exampleDataList" class="form-label">Datalist example</label> -->
    <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
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