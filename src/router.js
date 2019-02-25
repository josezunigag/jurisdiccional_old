import Vue from 'vue'
import Router from 'vue-router'

import UsuariosLogin from './views/Usuarios/Login'
import Generales from './views/Antecedentes/Generales'
import Ingresos from './views/Ingresos/Ingreso'
import IngresosMateria from './views/Ingresos/Materia'
import Resoluciones from './views/Resoluciones/Juez'
import DotacionesTribunales from './views/Dotaciones/Tribunales'
import DotacionesConcursos from './views/Dotaciones/Concursos'
import Home from './Home.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			children: [
				{
					path: '/',
					redirect: '/login'
				},
				{
					path: '/antecedentes/generales',
					name: 'Generales',
					component: Generales
				},		
				{
					path: '/ingresos/ingreso',
					name: 'Ingresos',
					component: Ingresos
				},
				{
					path: '/ingresos/materia',
					name: 'IngresosMateria',
					component: IngresosMateria
				},
				{
					path: '/resoluciones/juez',
					name: 'Resoluciones',
					component: Resoluciones
				},
				{
					path: '/dotaciones/tribunales',
					name: 'DotacionesTribunales',
					component: DotacionesTribunales
				},
				{
					path: '/dotaciones/concursos',
					name: 'DotacionesConcursos',
					component: DotacionesConcursos
				}
			]
		},
		{
			path: '/login',
			name: 'UsuariosLogin',
			component: UsuariosLogin
		}
	]
})
