import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { compile, createApp } from 'vue'
import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'

import App from './App.vue'
import TableComponent from './components/TableComponent.vue'
import AddProduct from './components/AddProduct.vue'
import EditProduct from './components/EditProduct.vue'
import LoginComponent from './components/LoginComponent.vue'

// rutas
const routes = [
    { path: '/', component: TableComponent },
    { path: '/editar-producto', component: EditProduct },
    { path: '/agregar-producto', component: AddProduct },
    { path: '/login', component: LoginComponent }
]

const urlApi = 'http://localhost:8080'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')
