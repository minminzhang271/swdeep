
<template>
    <div>
        <h3>List</h3>

         <div @click="gotoPage('LifecyclePage')">LifecyclePage</div>
    </div>
   
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
            console.log(this.$router)
            this.$router.push({name: name});
        }
    }
}
</script>