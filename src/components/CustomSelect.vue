<template>
    <div>
        <button class="select" @click="moveArrow">
            <div>
                {{ model }}
            </div>
            <div style="width:10px"></div>
            <div class="arrow" id="rectT">
                &lt;
            </div>
        </button>
        <div class="drop-down">
            <div style="height:4px;background: #FFFEFB"></div>
            <div class="option" @click="handle(option)" v-for="option in options" :key="option">{{ option }}</div>
        </div>
    </div>
</template>

<script>

export default {
    name: "CustomSelect",
    components: {},
    data() {
        return {
            model:''
        }
    },
    props: {
        options: {
            type: Array,
            required: true
        }
    },
    mounted(){
        this.model = this.options[0];
    },
    methods: {
        handle(option){
            this.model = option
            this.$emit('optionChange',option)
        },
        moveArrow() {
            let el = document.getElementsByClassName("drop-down")[0];
            if (!el.style.height) {
                document.getElementById("rectT").style.transform = "rotate(90deg)";
                el.style.height = "100px"
                el.style.marginBottom = "-100px"

            } else {
                document.getElementById("rectT").style.transform = "rotate(-90deg)";
                el.style.height = ""
            }
        }
    },
};
</script>
<style scoped lang="scss">
@import '@/scss/variables';

.select {
    height: 36px;
    font-size: 12px;
    padding: 0 12px 0 16px;
    line-height: 15px;
    color: #B4B4B4;
    background: $card-back;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0;

    .arrow {
        transform: rotate(-90deg);
        font-weight: 600;
        transition: all 0.2s ease;
    }

    &:hover {
        cursor: pointer;
        background: #f1f1f1;
    }
}

.drop-down {
    z-index: 10;
    position: relative;
    height: 0;
    overflow: hidden;
    transition: all 0.6s ease;
    font-size: 13px;
    color: #969696;
    margin-top: -4px;
    .option {
        height: 22px;
        background-color: $card-back;
        &:hover {
            cursor: pointer;
            background: #f1f1f1;
        }
    }
}
</style>
