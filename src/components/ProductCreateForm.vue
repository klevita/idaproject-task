<template>
    <div class="card">
        <form>
            <div class="text">Наименование товара</div>
            <input @input="formValidation(1)" v-model="name" type="text" :placeholder="namePlaceholder"
                :class="nameClasses" style="height: 36px">
            <div class="text">Описание товара</div>
            <textarea v-model="desc" type="text" :placeholder="descPlaceholder" :class="descClasses"
                style="height: 108px;padding-top:10px"></textarea>
            <div class="text">Ссылка на изображение товара</div>
            <input @change="formValidation(3)" v-model="link" type="text" :placeholder="linkPlaceholder"
                :class="linkClasses" style="height: 36px;">
            <div class="text">Цена товара</div>
            <input @input="formValidation(4)" v-model="price" inputmode="numeric" type="text"
                :placeholder="pricePlaceholder" :class="priceClasses" style="height: 36px;">
            <button ref="btn" :class="btnClasses" :disabled="isDisabled" type="button" @click="buttonHandler">Добавить
                товар</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "ProductCreateForm",
    data() {
        return {
            name: '',
            desc: '',
            link: '',
            price: '',
            isDisabled: true,
            namePlaceholder: 'Введите наименование товара',
            descPlaceholder: 'Введите описание товара',
            linkPlaceholder: 'Введите ссылку',
            pricePlaceholder: 'Введите цену',
            nameClasses: "form-input",
            descClasses: "form-input",
            linkClasses: "form-input",
            priceClasses: "form-input"
        }
    },
    methods: {
        buttonHandler() {
            this.$emit('objectCreated', { name: this.name, desc: this.desc, link: this.link, price: this.price });
            this.name = ''
            this.desc = ''
            this.link = ''
            this.price = ''
        },
        isValidHttpUrl(string) {
            let url;
            try {
                url = new URL(string);
            } catch (_) {
                return false;
            }
            return url.protocol === "http:" || url.protocol === "https:";
        },
        formValidation(mode) {
            this.isDisabled = false
            if (!this.name) {
                this.isDisabled = true
                if (mode === 1) {
                    this.namePlaceholder = "Это обязательное поле"
                    this.nameClasses = "form-input form-input-invalid"
                }
            } else {
                this.nameClasses = "form-input"
            }
            if (!this.link) {
                this.isDisabled = true
                if (mode === 3) {
                    if (this.linkPlaceholder != "Неподходящая ссылка") {
                        this.linkPlaceholder = "Это обязательное поле"
                    }
                    this.linkClasses = "form-input form-input-invalid"
                }
            } else if (!this.isValidHttpUrl(this.link)) {
                if (mode === 3) {
                    this.linkPlaceholder = "Неподходящая ссылка"
                    this.linkClasses = "form-input form-input-invalid"
                }
            } else {
                this.linkClasses = "form-input"
            }
            if (!this.price) {
                this.isDisabled = true
                if (mode === 4) {
                    if (this.pricePlaceholder != "Цена это число") {
                        this.pricePlaceholder = "Это обязательное поле"
                    }
                    this.priceClasses = "form-input form-input-invalid"
                }
            } else if (/[a-zA-Z]/.test(this.price)) {
                this.isDisabled = true
                if (mode === 4) {
                    this.pricePlaceholder = "Цена это число"
                    this.priceClasses = "form-input form-input-invalid"
                }
            } else {
                this.priceClasses = "form-input"
            }
        }
    },
    computed: {
        btnClasses() {
            return this.isDisabled ? "form-btn" : "form-btn form-btn-success";
        }
    }
};
</script>
<style scoped lang="scss">
@import '@/scss/variables';



.card {
    .text {
        text-align: left;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 13px;
        letter-spacing: -0.02em;
        margin-bottom: 4px;
    }

    .form-input {
        padding-left: 16px;
        width: calc(100% - 18px);
        border: none;
        background: $card-back;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        margin-bottom: 16px;
        resize: none;

        &::placeholder {
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            text-align: left;
            color: #B4B4B4;
        }

        &:focus {
            outline: 1px solid black;
        }
    }

    .form-input-invalid {
        outline: 1px solid red !important;

        &::placeholder {
            color: red;
        }

        &:focus {
            outline: 1px solid red !important;
        }
    }

    .form-btn {
        border: none;
        height: 36px;
        margin-top: 8px;
        width: calc(100% - 0px);
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        border-radius: 10px;
        padding: 0;
        line-height: 15px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #B4B4B4;
        background: #EEEEEE;
    }

    .form-btn-success {
        border: 2px solid $success;
        transition: all 0.34s ease;
        background: $card-back;
        color: $success;

        &:hover {
            cursor: pointer;
            background: $success;
            color: white;
        }
    }

    padding:24px;
    background: $card-back;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    width:332px - 48px;
}
</style>
