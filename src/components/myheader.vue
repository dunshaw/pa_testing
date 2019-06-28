<template>
  <header>
    <el-row type="flex" justify="space-between">
        <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"><div class="left">
            <a href="/" class='logo'>平安移测</a></div>
        </el-col>
        <el-col :sm="12" :md="12" :lg="12" :xl="12" class="hidden-xs-only">
            <ul>
                <li><el-link type="primary" :underline="false" @click='clicks(0)' :class='{actived:activeIndex==0}'>首页</el-link></li>
                <li><el-link type="primary" :underline="false" @click='clicks(1)' :class='{actived:activeIndex==1}'>教程</el-link></li>
                <li><el-link type="primary" :underline="false" @click='clicks(2)' :class='{actived:activeIndex==2}'>联系我们</el-link></li>
                <li><a href="#"><span>登 录</span></a></li>
            </ul>
        </el-col>
    </el-row>
  </header>
</template>


<script>
import {mapState} from 'vuex'
import 'element-ui/lib/theme-chalk/display.css';

export default {
    name:'myheader',
    data () {
        return {
            activeIndex:0,
        }
    },
    methods: {
        clicks(index){
            this.activeIndex = index;
            // this.$api.tester({name:'thcpc',password:'123456'}).then(res=>{
            //     console.log(res)
            // })
        },
    },
};
</script>

<style lang="scss" scoped>
$color:#fff;
$color-darken:darken($color,20%);
a{
    text-decoration: none;
}
a.actived{
    color:$color !important;
}
header{
    // height: 60px;
    // background-color: red;
    width: 100%;
    .el-row{
        margin:15px;
    }
    .el-col{
        height: 60px;
        text-align: center;
        line-height: 60px;
        ul{
            height: 60px;
            display: flex;
            padding: 0;
            margin: 0;
            justify-content:center;
            align-items:center;
            li{
                list-style: none;
                margin-left: 2em;
                .el-link{
                    color: $color-darken;
                    font-size:1rem;
                    &:hover{
                        color: $color;
                    }
                }
                span{
                    font-size:1rem;
                    color: $color;
                    background: rgba(255, 255, 255, 0.2);
                    padding: 4px 10px;
                    border-radius: 100px;
                    transition: 0.3s;
                    &:hover{
                        box-shadow: 0 2px 4px rgba(0, 0, 0, .2), 0 0 8px rgba(0, 0, 0, .4);
                        transition: 0.3s;
                    }
                }
            }
        }
    }
    .logo{
        text-decoration: none;
        color: $color;
        font-weight: bold;
        letter-spacing: .2rem;
        font-size:1.5rem;
        @media screen and (max-width: 600px){
            font-size:1rem;
            letter-spacing: 0; 
        }
    }
    
}



</style>