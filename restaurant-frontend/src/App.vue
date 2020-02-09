
<template>
  <v-app>
    <v-carousel circle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
   
      <div class="text-center">
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ on }">
        <v-btn
          color="purple"
          dark
          v-on="on"
        >
          menu
        </v-btn>
      </template>
      <v-list>
        <v-subheader>Open in</v-subheader>
        <v-list-item
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
        >
          <v-list-item-avatar>
            <v-avatar size="32px" tile>
              
              <router-link :to='tile.href'>
                <img
                :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                :alt="tile.title"
                
              >
              </router-link>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-title>{{ tile.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
  </div>
 
    </v-carousel-item>
    
  </v-carousel>

    <v-content>
    
       <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
  
  },

  data: () => ({
      
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', href:'/Restolist'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', href:'/Restolist'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', href:'/Restolist'
          },
        ],
         sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Restaurant list', href:'/Restolist' },
        { img: 'inbox.png', title: 'Inbox', href:'/Restolist'  },
        { img: 'hangouts.png', title: 'Hangouts', href:'/Restolist'  },
        { img: 'messenger.png', title: 'Messenger', href:'/Restolist'  },
        { img: 'google.png', title: 'Google+' , href:'/Restolist' },
      ],
  
  }),
};
</script>
