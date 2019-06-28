<template>
    <el-carousel height="800px" :interval="3000" arrow="never" indicator-position='none'>
        <el-carousel-item v-for="img in imgs" key="img">
            <el-image :src="img.src" fit='fill'></el-image>  
        </el-carousel-item>
    </el-carousel>
</template>


<script>
import {mapState} from 'vuex'


export default {
    name:'banner',
    data () {
        return {
            imgs:[
                {'src':require('../assets/banner/bg1.jpg')},
                {'src':require('../assets/banner/bg2.jpg')},
            ]
        }
    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>
.el-image{
    width: 100%;
    height: 100%;
}
</style>