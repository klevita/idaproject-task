<template>
    <div class="product">
        <img class="img" :src="link"/>

    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props:{
        name:{
            required:true,
            type:String
        },
        desc:{
            required:false,
            type:String,
            default:''
        },
        link:{
            required:true,
            type:String
        },
        price:{
            required:true,
            type:String
        },
    }
};
</script>
<style scoped lang="scss">
.product{
    width:332px;
    height:423px;
    .img{
        width: 100%;
        
    }
}
</style>
