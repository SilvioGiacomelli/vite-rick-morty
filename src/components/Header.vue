<script>
import {store} from '../data/store'
  export default {

    data(){
      return{
        store,
        nameToSearch:'',
        statusToSearch:'',
        speciesToSearch:'',
      }
    },

    methods:{
      startSearch(){
        this.store.queryParams = {
          name: this.nameToSearch,
          status: this.statusToSearch,
          species: this.speciesToSearch
        }
        this.$emit('startSearch')
      },
      resetRicerca(){
        this.nameToSearch = '';
        this.statusToSearch = '';
        this.speciesToSearch = '';
        this.startSearch();
      }
    }

  }
</script>


<template>
  <div class="container text-center my-5">
    <div class="row row-cols-1">
      <h1>{{ store.mainTitle }}</h1>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col">

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
          v-for="(nome, index) in this.store.nameList" 
          :key="index" 
          :value="nome">
        </option>
        </datalist>
      </div>
      
      <div class="col">
        <select 
        v-model="statusToSearch" 
        @change="startSearch" 
        class="form-select">
          <option value="" disabled selected>Select status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>


      <div class="col">
        <select 
        v-model="speciesToSearch" 
        @change="startSearch" 
        class="form-select">
          <option value= "" disabled selected>Select species</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>

      <div class="col">
        <button 
        @click="resetRicerca" 
        class="btn btn-danger">Reset
        </button>
      </div>

    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>