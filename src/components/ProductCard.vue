<template>
    <div :id="id" class="product">
        <img class="img" :src="link" />
        <div class="main">
            <div class="header-text">
                {{ formattedName }}
            </div>
            <div class="desc-text">
                {{ formattedDesc }}
            </div>
            <div class="price">
                {{ price + " руб." }}
                <a @click="del" class="delete-btn"></a>
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
    },
    methods:{
        del(){
            document.getElementById(this.id).classList.add("drop")
            setTimeout(()=>{
                this.$emit('delete', this.id)
            },900)
        }
    },
    computed: {
        formattedName() {
            if (this.name.length > 26) {
                return this.name.slice(0, 26) + "..."
            }
            return this.name
        },
        formattedDesc() {
            if (this.desc.length > 300) {
                return this.desc.slice(0, 300) + "..."
            }
            return this.desc
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
    margin: 0 0 16px 16px;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);

    .img {
        width: 100%;
        max-height: 50%;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    .main {
        height: 100%;
        width: calc(100% - 32px);
        padding: 16px;
        padding-bottom: 24px;
        color: $black-text;
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
            display: flex;
            justify-content: space-between;

            .delete-btn {
                position: relative;
                width: 32px;
                height: 32px;
                left: 24px;
                top: -375px;
                background: $danger;
                background-size: 16px;
                background-repeat: no-repeat;
                background-position: center;
                border-radius: 10px;
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
                background-image: url('@/assets/trash.png');

                &:hover {
                    cursor: pointer;
                    top: -376px;
                }
            }
        }
    }
}

.drop {
    animation: drop 1s forwards;
}

@keyframes drop {
    0% {}

    20% {
        transform:
            translate3d(0, 20px, 0);

        opacity: 1;
    }

    40%,
    45% {
        transform:
            translate3d(0, -120px, 0);

        opacity: 1;
    }

    to {
        opacity: 0;
        transform:
            translate3d(0, 2000px, 0);

    }
}
</style>
