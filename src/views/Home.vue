<template>
  <div id="main">
      <myHeader />
      <Banner />    


      <!-- <transition enter-active-class="fadeInUp" leave-active-class="fadeOutDown">
        <div v-show="Flag" class="animated" />
      </transition> -->
  </div>
</template>


<script>
import {mapState} from 'vuex'
import myHeader from '@/components/myheader'
import Banner from '@/components/banner'

export default {
    name:'home',
    data () {
        return {
            hello:'welcome test',
            Flag:false,
        }
    },
    components:{
      myHeader,Banner
    },
    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
#main{
    Header{
        position: absolute;
        z-index:50;
    }
}
</style>