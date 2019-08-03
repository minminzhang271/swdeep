
<template>
    <div @click="gotoPage('LifecyclePage')">list</div>
</template>
<script>
export default {
    name: 'Listpage',
    data() {
        return {
            msg: "list",
            list: [
                {
                    tag: "生命周期",
                    name: ""
                }
            ]
        }
    },
    components:{},
    create(){},
    mounted(){},
    methods:{
        
        gotoPage(name){
            this.$router.push({name: name});
        }
    }
}
</script>