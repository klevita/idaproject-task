<template>
    <div class="product">
        <img class="img" :src="link" />
        <div class="main">
            <div class="header-text">
                {{ name }}
            </div>
            <div class="desc-text">
                {{ desc }}
            </div>
            <div class="price">
                {{ price + " руб." }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        name: {
            required: true,
            type: String
        },
        desc: {
            required: false,
            type: String,
            default: ''
        },
        link: {
            required: true,
            type: String
        },
        price: {
            required: true,
            type: String
        },
        id: {
            required: true,
            type: Number
        }
    }
};
</script>
<style scoped lang="scss">
@import '@/scss/variables';

.product {
    width: 332px;
    height: 423px;
    display: flex;
    flex-direction: column;
    background: $card-back;
    border-radius: 4px;

    .img {
        width: 100%;
        max-height: 50%;
    }

    .main {
        height: 100%;
        width: calc(100% - 32px);
        padding: 16px;
        padding-bottom: 24px;
        color: #3F3F3F;
        font-style: normal;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .header-text {
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
        }

        .desc-text {
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
        }

        .price {

            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
        }
    }
}
</style>
