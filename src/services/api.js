import axios from 'axios';

export default {
  contents : ()=>
    axios.get('/src/data/content.json')
}
