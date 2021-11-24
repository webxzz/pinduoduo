<template>
    <div class="wrap">
         <Header />
         <main class="main">
               <NavTab />
         </main>
    </div>
</template>

<script>
import Header from '@/components/header.vue'
import NavTab from '@/components/navTab.vue'
export default {
    name:'seckill',
    components:{
        Header,
        NavTab
    }

}
</script>

<style lang="scss" scoped>
.wrap{
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>