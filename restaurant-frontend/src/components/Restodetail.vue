
 <template>
  <v-container class="grey lighten-5">
    
    <v-card
    class="mx-auto"
    max-width="700"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
         {{resto.name}}
    </v-card-title>

    <v-card-subtitle>
     {{resto.borough}}
    </v-card-subtitle>
    <v-card-subtitle>
     cuisine {{resto.cuisine}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn text>Share</v-btn>

      <v-btn
        color="purple"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
                  {{resto.address.building}}
                {{resto.address.street}}
                 {{resto.address.zipcode}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
   
  </v-container>
  
</template>
<script>
import { getResto } from '../utils/reasonable-foodie.js'
  export default {
    name: 'Restaurantsdetail',
    data () {
    return {
      show: false,
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      resto: {},
      
          }
  },
  
   mounted () {
    
    const self = this
    //console.log(self.$route.params.restaurantsId)
     getResto(self.$route.params.restaurantsId).then((resto) => {
     
      self.resto = resto.body.restaurants
    
      
    })
   },
   computed: {
    
      },
   methods:{
     
    }

    
  }
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>