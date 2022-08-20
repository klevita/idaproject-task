import { createStore } from "vuex";
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default createStore({
    state: {
        products: []
    },
    getters: {},
    mutations: {
        addProduct(state, product) {
            if (state.products.length) {
                state.products.push({ ...product, id: state.products[state.products.length - 1].id + 1 })
            } else {
                state.products.push({ ...product, id: 0 })
            }
        },
        removeProduct(state, id) {
            state.products = state.products.filter((prod) => {
                return prod.id == id
            })
        }
    },
    actions: {},
    modules: {},
    plugins: [vuexLocal.plugin]
});
