import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'

import App from './App.vue'
import TableComponent from './components/TableComponent.vue'
import AddProduct from './components/AddProduct.vue'
import EditProduct from './components/EditProduct.vue'

// rutas
const routes = [
    {path:'/', component : TableComponent},
    {path:'/editar-producto', component : EditProduct},
    {path:'/agregar-producto', component : AddProduct}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
