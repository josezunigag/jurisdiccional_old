import Vue from 'vue'
import Router from 'vue-router'
import store from 'store'

import DotacionesTribunales from './views/Dotaciones/Tribunales'
import DotacionesConcursos from './views/Dotaciones/Concursos'
import Generales from './views/Antecedentes/Generales'
import Ingresos from './views/Ingresos/Ingreso'
import IngresosMateria from './views/Ingresos/Materia'
import Presentaciones from './views/Antecedentes/Presentaciones'
import PresupuestosAdministrativa from './views/Presupuestos/Administrativa'
import PresupuestosTribunales from './views/Presupuestos/Tribunales'
import PresupuestosAcademica from './views/Presupuestos/Academica'
import Resoluciones from './views/Resoluciones/Juez'
import TerminosMaterias from './views/Terminos/Materia'
import UsuariosLogin from './views/Usuarios/Login'
import CosolidadosTribunales from './views/Consolidados/Tribunales'

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
					path: '/antecedentes/presentaciones',
					name: 'Presentaciones',
					component: Presentaciones
				},							
				{
					path: '/ingresos/ingreso/:competencia?',
					name: 'Ingresos',
					component: Ingresos
				},
				{
					path: '/ingresos/materia/:competencia?',
					name: 'IngresosMateria',
					component: IngresosMateria
				},
				{
					path: '/resoluciones/juez/:competencia?',
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
					path: '/terminos/materia/:competencia?',
					name: 'TerminosMaterias',
					component: TerminosMaterias
				},
				{
					path: '/presupuestos/tribunales',
					name: 'PresupuestosTribunales',
					component: PresupuestosTribunales
				},	
				{
					path: '/presupuestos/administrativa',
					name: 'PresupuestosAdministrativa',
					component: PresupuestosAdministrativa
				},	
				{
					path: '/presupuestos/academica',
					name: 'PresupuestosAcademica',
					component: PresupuestosAcademica
				},	
				{
					path: '/consolidados/tribunales',
					name: 'CosolidadosTribunales',
					component: CosolidadosTribunales
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