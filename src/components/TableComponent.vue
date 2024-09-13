<template>

	<div class="container mt-4">
		<h2 class="text-center mb-4">Lista de Productos</h2>

		<div class="table-responsive">
			<table class="table table-striped table-hover">
				<thead>
					<tr>
						<th v-for="header in tableHeaders" :key="header" class="bg-dark text-white text-center">
							{{ header }}
						</th>
					</tr>
				</thead>
				<tbody id="table-body">
					<!-- datos -->
				</tbody>
			</table>
		</div>

	</div>
</template>

<script>
import { inject } from 'vue';

export default {
	mounted() {
		this.obtenerProductos()
	},
	setup(){
        const api = inject('urlApi')
        return { api }
    },
	data() {
		return {
			tableHeaders : [
				'Id','Nombre','Precio','Cantidad','Acciones'
			]
		}
	},	
	methods: {
		async obtenerProductos() {
			console.log(this.api)
			try {
				const response = await fetch(`${this.api}/productos`)
				if (!response.ok) {
					throw new Error(response.statusText)
				}
				const data = await response.json()

				const tableBody = document.getElementById('table-body')
				tableBody.innerHTML = ''

				data.forEach(producto => {
					const tr = document.createElement('tr')

					const id = document.createElement('td')
					id.innerText = producto.id
					tr.appendChild(id)

					const nombre = document.createElement('td')
					nombre.innerText = producto.nombre
					nombre.classList.add('text-center')
					tr.appendChild(nombre)

					const precio = document.createElement('td')
					precio.innerText = producto.precio
					precio.classList.add('text-center')
					tr.appendChild(precio)

					const cantidad = document.createElement('td')
					cantidad.innerText = producto.cantidad
					cantidad.classList.add('text-center')
					tr.appendChild(cantidad)

					const acciones = document.createElement('td')
					acciones.classList.add('text-center','d-flex','justify-content-around')

					const botonEditar = document.createElement('button')
					botonEditar.innerText = 'Editar producto'
					botonEditar.classList.add('btn','btn-warning')
					botonEditar.addEventListener('click', () => this.redirigir(producto.id))
					acciones.appendChild(botonEditar)

					const botonEliminar = document.createElement('button')
					botonEliminar.innerText = 'Eliminar producto'
					botonEliminar.classList.add('btn','btn-danger')
					botonEliminar.addEventListener('click',() => this.eliminar(producto.id))
					acciones.appendChild(botonEliminar)

					tr.appendChild(acciones)

					tableBody.appendChild(tr)
				})

			} catch (error) {
				console.error(error)
			}
		},
		async eliminar(id) {
			console.log(id)

			try{
				const response = await fetch(`${this.api}/productos/${id}`,{
					method:'DELETE'
				})

				if(!response.ok){
					throw new Error(response.statusText)
				}

				const data = await response.json()

				alert(data.message)

				this.obtenerProductos()

			}catch(error){
				console.error(error)
			}

		},
		redirigir (id) {
			this.$router.push(`/editar-producto?id=${id}`)
		}

	}

}

</script>
