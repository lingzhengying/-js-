<template>
    <div>
      <el-tree
        :data="menus"
        show-checkbox
        node-key="id"
        :props="defaultProps"
        ref="tree">
    </el-tree>
    <el-button type="primary" @click="getCheckedNodes">通过node获取</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menus:[],
            defaultProps:{
                label:'name',
                children: 'children'
            }
        }
    },
    created(){
       this.menus = [...this.$router.options.routes]

    },
    methods: {
        getCheckedNodes(){
            let arr = this.$refs.tree.getCheckedNodes()
            console.log(arr);
        }
    },
}
</script>

<style>

</style>