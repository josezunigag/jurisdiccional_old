import Vue from 'vue'
import Router from 'vue-router'

import Generales from './views/Antecedentes/Generales'
import Ingresos from './views/Ingresos/Ingreso'
import DashboardClean from './views/Dashboard/Clean'
import DashboardAnalytical from './views/Dashboard/Analytical'
import IngresosMateria from './views/Ingresos/Materia'
import Resoluciones from './views/Resoluciones/Juez'
import DotacionesTribunales from './views/Dotaciones/Tribunales'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Generales',
			component: Generales
		},		
		{
			path: '/ingresos/ingreso',
			name: 'Ingresos',
			component: Ingresos
		},
		{
			path: '/dashboard/clean',
			name: 'DashboardClean',
			component: DashboardClean
		},
		{
			path: '/dashboard/analytical',
			name: 'DashboardAnalytical',
			component: DashboardAnalytical
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
		}		
	]
})
