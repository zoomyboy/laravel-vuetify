<template>
    <div class="cp-wrap cp-dashboard-index">
    </div>
</template>

<style lang="less">
    .cp-wrap.cp-dashboard-index {

    }
</style>

<script>
    export default {
        created: function() {
            this.$store.commit('setapptitle', 'Dashboard');
        }
    }
</script>
