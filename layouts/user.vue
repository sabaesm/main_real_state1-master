<template>
    <div>
   
    <navbar></navbar>
    <Nuxt />
    <custoMfooter></custoMfooter>
    </div>
</template>
<script>
import navbar from './navbar.vue'
import  custoMfooter from './footer.vue'
export default ({
    components: {
        navbar,
        custoMfooter
    },
})
</script>
