<template>
    <div class="wrapper">
        <div class="header">
            <div class="header-text">Добавление товара</div>
            <CustomSelect style="margin-right:84px " @optionChange="sort"
                :options="['По умолчанию', 'По цене min', 'По цене max', 'По наименованию']" />
        </div>
        <div class="main">
            <div class="inline-blocks form">
                <ProductCreateForm style="position:fixed;" @object-created="formHandler"></ProductCreateForm>
            </div>
            <div class="inline-blocks">
                <div class="products-section">
                    <div class="prod" v-for="product in productsArr" :key="product.id">
                        <ProductCard :name="product.name" :desc="product.desc" :link="product.link"
                            @delete="deleteProduct" :price="product.price" :id="product.id" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCreateForm from "@/components/ProductCreateForm.vue"
import ProductCard from "@/components/ProductCard.vue";
import CustomSelect from "@/components/CustomSelect.vue";

export default {
    name: "ProductView",
    components: { ProductCreateForm, ProductCard, CustomSelect },
    data() {
        return {
            productsArr: [],
            sortType: 'По умолчанию'
        }
    },
    mounted() {
        this.productsArr = this.$store.state.products
    },
    methods: {
        sort(type = this.sortType) {
            this.sortType = type
            console.log(this.sortType)
            if (type == 'По умолчанию') {
                this.productsArr = this.$store.state.products
            } else if (type == 'По цене min') {
                this.productsArr.sort((a, b) => (parseInt(a.price.replace(/ /g, '')) > parseInt(b.price.replace(/ /g, ''))) ? 1 : -1)
            } else if (type == 'По цене max') {
                this.productsArr.sort((a, b) => (parseInt(a.price.replace(/ /g, '')) < parseInt(b.price.replace(/ /g, ''))) ? 1 : -1)
            } else if (type == 'По наименованию') {
                this.productsArr.sort((a, b) => (a.name < b.name) ? 1 : -1)
            }
        },
        formHandler(product) {
            this.$store.commit("addProduct", product)
            this.productsArr = this.$store.state.products
            this.sort()
        },
        deleteProduct(id) {
            this.$store.commit("removeProduct", id)

            this.productsArr = this.$store.state.products
            this.sort()
        }
    },
};
</script>
<style scoped lang="scss">
@import '@/scss/variables';

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
            color: $black-text;
        }

        .products-selector {
            border-radius: 4px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border: none;
            background: #FFFEFB;
        }
    }

    .main {
        display: flex;

        .form {
            width: 380px;
            height: 100px;
            flex-shrink: 0
        }

        .products-section {
            max-width: 1404px;

            .prod {
                float: left;
            }
        }
    }

}
</style>
