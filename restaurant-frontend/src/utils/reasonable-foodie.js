import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const getAllResto = async () => {
  const response = await Vue.http.get('http://localhost:3333/restaurants')
  return response
}


 export const getResto = async (restaurantsId) => {
  const response = await Vue.http.get(`http://localhost:3333/restaurants/${restaurantsId}` )
  
  return response
}
 
/* export const getNearResto = async (location, radius, type) => {
  const rawResponse = await Vue.http.post('http://localhost:3000/restaurants/nearbytype', {
    location: location,
    radius: radius

  })
  const response = JSON.parse(rawResponse.body)
  return response.results */

