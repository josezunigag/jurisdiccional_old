import Vue from 'vue'
import Router from 'vue-router'
import store from 'store'

import UsuariosLogin from './views/Usuarios/Login'
import Generales from './views/Antecedentes/Generales'
import Ingresos from './views/Ingresos/Ingreso'
import IngresosMateria from './views/Ingresos/Materia'
import Resoluciones from './views/Resoluciones/Juez'
import DotacionesTribunales from './views/Dotaciones/Tribunales'
import DotacionesConcursos from './views/Dotaciones/Concursos'
import TerminosMaterias from './views/Terminos/Materia'
import Home from './Home.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
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
				},
				{
					path: '/terminos/materia',
					name: 'TerminosMaterias',
					component: TerminosMaterias
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

router.beforeEach((to, from, next) => {
	const userExist = typeof store.get('user') !== 'undefined'
	if (to.name === 'UsuariosLogin' && userExist) {
	  next('/terminos/materia')
	} else if (to.name !== 'UsuariosLogin' && !userExist) {
	  next('/login')
	} else {
	  next()
	}
  })

  export default router