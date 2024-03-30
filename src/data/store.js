import { reactive } from 'vue'

export const store = reactive({
  // counter: 0,
  mainTitle: 'Vite Rick & Morty',
  apiUrl: 'https://rickandmortyapi.com/api/character',
  nameUrl: 'https://rickandmortyapi.com/api/character/?name',
  statusUrl: 'https://rickandmortyapi.com/api/character/?status',
  speciesUrl:'https://rickandmortyapi.com/api/character/?species',
  cardList: [],
  nameList:[],
  status:'',
  species:'',
  queryParams:{
  }
})