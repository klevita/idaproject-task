<template>
    <div class="wrapper">
        <div class="header">
            <div class="header-text">Добавление товара</div>
            <select class="products-selector">
                <option selected value="default">По умолчанию</option>
                <option value="min">По цене min</option>
                <option value="max">По цене max</option>
                <option value="name"> По наименованию</option>
            </select>
        </div>
        <div class="main">
            <ProductCreateForm></ProductCreateForm>
        </div>
    </div>
</template>

<script>
import ProductCreateForm from "@/components/ProductCreateForm.vue"

export default {
    name: "ProductView",
    components: { ProductCreateForm }
};
</script>
<style scoped lang="scss">
.wrapper {
    padding: 32px;

    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        .header-text {
            font-style: normal;
            font-weight: 600;
            font-size: 28px;
            line-height: 35px;
            color: #3F3F3F;
        }

        .products-selector {
            border-radius: 4px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border: none;
            background: #FFFEFB;
        }
    }

    .main {}
}
</style>
