<template >
    <div class="cookie_detail"></div>
</template>
<script lang="ts">
import { reactive, ref } from 'vue'
import { useRoute, RouteParams } from 'vue-router'
export default {
    setup() {
        const route = useRoute();
        let data: any = ref(route.params)
        return {
            data
        }
    }
}
</script>
<style lang="less" scoped>
</style>