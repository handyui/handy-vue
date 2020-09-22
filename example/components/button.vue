<template>
    <div>
        <PageHeader title="按钮 Button" />
        <!-- <Demo></Demo> -->
        <Button></Button>
    </div>
</template>

<script>
// import Demo from 'docs/button.md';
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import Button from '../../release/lib/button'
    export default {
        components: {
            PageHeader,
            Container,
            Button
        }
    }
</script>

<style lang="scss" scoped>

</style>