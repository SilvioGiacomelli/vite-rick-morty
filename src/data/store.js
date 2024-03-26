import { reactive } from 'vue'

export const store = reactive({
  // counter: 0,
  mainTitle: 'Vite Rick & Morty',
  apiUrl: 'https://rickandmortyapi.com/api/character',
  nameUrl: 'https://rickandmortyapi.com/api/character/?name',
  cardList: [],
  nameList:[],
  queryParams:{
  }
})