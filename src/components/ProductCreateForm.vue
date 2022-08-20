<template>
    <div class="card">
        <form>
            <div class="text">Наименование товара</div>
            <input @input="formValidation(1)" v-model="name" type="text" placeholder='Введите наименование товара'
                :class="nameClasses" style="height: 36px">
            <div class="input-errors">{{ nameErrors.join(", ") }}</div>
            <div class="text">Описание товара</div>
            <textarea v-model="desc" type="text" placeholder='Введите описание товара' :class="descClasses"
                style="height: 108px;padding-top:10px"></textarea>
            <div class="text">Ссылка на изображение товара</div>
            <input @change="formValidation(3)" v-model="link" type="text" placeholder='Введите ссылку'
                :class="linkClasses" style="height: 36px;">
            <div class="input-errors">{{ linkErrors.join(", ") }}</div>
            <div class="text">Цена товара</div>
            <input @input="formValidation(4)" v-model="price" inputmode="numeric" type="text" placeholder='Введите цену'
                :class="priceClasses" style="height: 36px;">
            <div class="input-errors">{{ priceErrors.join(", ") }}</div>
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
            isDisabled: true,
            name: '',
            desc: '',
            link: '',
            price: '',
            nameErrors: [],
            linkErrors: [],
            priceErrors: [],
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

            //name rules
            if (mode === 1) {
                this.nameErrors = []
                this.nameClasses = "form-input"
                if (!this.name) {
                    this.isDisabled = true
                    this.nameErrors.push("Это обязательное поле")
                    this.nameClasses = "form-input form-input-invalid"
                }
            }

            //link rules
            if (mode === 3) {
                this.linkErrors = []
                this.linkClasses = "form-input"
                if (!this.link) {
                    this.isDisabled = true
                    this.linkErrors.push("Это обязательное поле")
                    this.linkClasses = "form-input form-input-invalid"
                }
                if (!this.isValidHttpUrl(this.link)) {
                    this.isDisabled = true
                    this.linkErrors.push("Неподъодящая ссылка")
                    this.linkClasses = "form-input form-input-invalid"
                }
            }

            //price rules
            if (mode === 4) {
                this.priceErrors = []
                this.priceClasses = "form-input"
                if (!this.price) {
                    this.isDisabled = true
                    this.priceErrors.push("Это обязательное поле")
                    this.priceClasses = "form-input form-input-invalid"
                }
                if (/[a-zA-Z]/.test(this.price)) {
                    this.isDisabled = true
                    this.priceErrors.push("Цена должна быть числом")
                    this.priceClasses = "form-input form-input-invalid"
                }
                if (this.price.length > 12) {
                    this.isDisabled = true
                    this.priceErrors.push("Слишком высокая цена")
                    this.priceClasses = "form-input form-input-invalid"
                } 
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
        font-size: 10px;
        line-height: 13px;
        letter-spacing: -0.02em;
        margin-bottom: 4px;
    }

    .input-errors {
        color: $danger;
        text-align: left;
        font-size: 8px;
        line-height: 10px;
        letter-spacing: -0.02em;
        height: 10px;
        margin-bottom: 2px;
    }

    .form-input {
        padding-left: 16px;
        width: calc(100% - 18px);
        border: none;
        background: $card-back;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        margin-bottom: 2px;
        resize: none;

        &::placeholder {
            font-family: 'Source Sans Pro';
            font-style: normal;
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
        outline: 1px solid $danger  !important;

        &::placeholder {
            color: $danger;
        }

        &:focus {
            outline: 1px solid $danger  !important;
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
