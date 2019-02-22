import Vue from 'vue'
import Router from 'vue-router'

// import DashboardModern from './views/Dashboard/Modern'
import Ingresos from './views/Ingresos/Ingreso'
import DashboardClean from './views/Dashboard/Clean'
import DashboardAnalytical from './views/Dashboard/Analytical'
import IngresosMateria from './views/Ingresos/Materia'
import Resoluciones from './views/Resoluciones/Juez'

Vue.use(Router)

export default new Router({
	mode: 'history',
	//base: '/sub-path/',
	routes: [
		{
			path: '/',
			alias: '/ingresos/ingreso',
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
		}			
		// ,


		// {
		// 	path: '/ecommerce/dashboard',
		// 	name: 'EcommerceDashboard',
		// 	component: EcommerceDashboard
		// },
		// {
		// 	path: '/ecommerce/products',
		// 	name: 'EcommerceProducts',
		// 	component: EcommerceProducts
		// },
		// {
		// 	path: '/ecommerce/product-detail',
		// 	name: 'EcommerceProductDetail',
		// 	component: EcommerceProductDetail
		// },
		// {
		// 	path: '/ecommerce/product-edit',
		// 	name: 'EcommerceProductEdit',
		// 	component: EcommerceProductEdit
		// },
		// {
		// 	path: '/ecommerce/product-orders',
		// 	name: 'EcommerceProductOrders',
		// 	component: EcommerceProductOrders
		// },
		// {
		// 	path: '/ecommerce/product-cart',
		// 	name: 'EcommerceProductCart',
		// 	component: EcommerceProductCart
		// },
		// {
		// 	path: '/ecommerce/product-checkout',
		// 	name: 'EcommerceProductCheckout',
		// 	component: EcommerceProductCheckout
		// },


		// {
		// 	path: '/inbox/mail-box',
		// 	name: 'InboxMailBox',
		// 	component: InboxMailBox
		// },
		// {
		// 	path: '/inbox/mail-details',
		// 	name: 'InboxMailDetails',
		// 	component: InboxMailDetails
		// },
		// {
		// 	path: '/inbox/mail-compose',
		// 	name: 'InboxMailCompose',
		// 	component: InboxMailCompose
		// },
		// {
		// 	path: '/inbox/contact',
		// 	name: 'InboxContact',
		// 	component: InboxContact
		// },
		// {
		// 	path: '/inbox/contact-detail',
		// 	name: 'InboxContactDetail',
		// 	component: InboxContactDetail
		// },


		// {
		// 	path: '/ui/panels-wells',
		// 	name: 'UIPanelsWells',
		// 	component: UIPanelsWells
		// },
		// {
		// 	path: '/ui/panel-ui-block',
		// 	name: 'UIPanelBlock',
		// 	component: UIPanelBlock
		// },
		// {
		// 	path: '/ui/portlet-draggable',
		// 	name: 'UIPortletDraggable',
		// 	component: UIPortletDraggable
		// },
		// {
		// 	path: '/ui/buttons',
		// 	name: 'UIButtons',
		// 	component: UIButtons
		// },
		// {
		// 	path: '/ui/tabs',
		// 	name: 'UITabs',
		// 	component: UITabs
		// },
		// {
		// 	path: '/ui/modals',
		// 	name: 'UIModals',
		// 	component: UIModals
		// },
		// {
		// 	path: '/ui/progressbars',
		// 	name: 'UIProgressbars',
		// 	component: UIProgressbars
		// },
		// {
		// 	path: '/ui/notification',
		// 	name: 'UINotification',
		// 	component: UINotification
		// },
		// {
		// 	path: '/ui/carousel',
		// 	name: 'UICarousel',
		// 	component: UICarousel
		// },
		// {
		// 	path: '/ui/user-cards',
		// 	name: 'UIUserCards',
		// 	component: UIUserCards
		// },
		// {
		// 	path: '/ui/timeline',
		// 	name: 'UITimeline',
		// 	component: UITimeline
		// },
		// {
		// 	path: '/ui/timeline-horizontal',
		// 	name: 'UITimelineHorizontal',
		// 	component: UITimelineHorizontal
		// },
		// {
		// 	path: '/ui/range-slider',
		// 	name: 'UIRangeSlider',
		// 	component: UIRangeSlider
		// },
		// {
		// 	path: '/ui/ribbons',
		// 	name: 'UIRibbons',
		// 	component: UIRibbons
		// },
		// {
		// 	path: '/ui/steps',
		// 	name: 'UISteps',
		// 	component: UISteps
		// },
		// {
		// 	path: '/ui/session-idle-timeout',
		// 	name: 'UISessionIdleTimeout',
		// 	component: UISessionIdleTimeout
		// },
		// {
		// 	path: '/ui/session-timeout',
		// 	name: 'UISessionTimeout',
		// 	component: UISessionTimeout
		// },
		// {
		// 	path: '/ui/bootstrap',
		// 	name: 'UIBootstrap',
		// 	component: UIBootstrap
		// },


		// {
		// 	path: '/forms/basic',
		// 	name: 'FormsBasic',
		// 	component: FormsBasic
		// },
		// {
		// 	path: '/forms/layout',
		// 	name: 'FormsLayout',
		// 	component: FormsLayout
		// },
		// {
		// 	path: '/forms/icheck-control',
		// 	name: 'FormsIcheckControl',
		// 	component: FormsIcheckControl
		// },
		// {
		// 	path: '/forms/advanced',
		// 	name: 'FormsAdvanced',
		// 	component: FormsAdvanced
		// },
		// {
		// 	path: '/forms/upload',
		// 	name: 'FormsUpload',
		// 	component: FormsUpload
		// },
		// {
		// 	path: '/forms/dropzone',
		// 	name: 'FormsDropzone',
		// 	component: FormsDropzone
		// },
		// {
		// 	path: '/forms/pickers',
		// 	name: 'FormsPickers',
		// 	component: FormsPickers
		// },


		// {
		// 	path: '/tables/basic',
		// 	name: 'TablesBasic',
		// 	component: TablesBasic
		// },
		// {
		// 	path: '/tables/layouts',
		// 	name: 'TablesLayouts',
		// 	component: TablesLayouts
		// },
		// {
		// 	path: '/tables/bootstrap',
		// 	name: 'TablesBootstrap',
		// 	component: TablesBootstrap
		// },
		// {
		// 	path: '/tables/responsive',
		// 	name: 'TablesResponsive',
		// 	component: TablesResponsive
		// },
		// {
		// 	path: '/tables/editable',
		// 	name: 'TablesEditable',
		// 	component: TablesEditable
		// },


		// {
		// 	path: '/charts/morris',
		// 	name: 'ChartsMorris',
		// 	component: ChartsMorris
		// },
		// {
		// 	path: '/charts/peity',
		// 	name: 'ChartsPeity',
		// 	component: ChartsPeity
		// },
		// {
		// 	path: '/charts/knob',
		// 	name: 'ChartsKnob',
		// 	component: ChartsKnob
		// },
		// {
		// 	path: '/charts/sparkline',
		// 	name: 'ChartsSparkline',
		// 	component: ChartsSparkline
		// },


		// {
		// 	path: '/widgets',
		// 	name: 'Widgets',
		// 	component: Widgets
		// },


		// {
		// 	path: '/icons/simple-line',
		// 	name: 'IconsSimpleLine',
		// 	component: IconsSimpleLine
		// },
		// {
		// 	path: '/icons/fontawesome',
		// 	name: 'IconsFontawesome',
		// 	component: IconsFontawesome
		// },


		// {
		// 	path: '/maps/google',
		// 	name: 'MapsGoogle',
		// 	component: MapsGoogle
		// },
		// {
		// 	path: '/maps/vector',
		// 	name: 'MapsVector',
		// 	component: MapsVector
		// },

		// {
		// 	path: '/pages/errors/400',
		// 	name: 'PagesErrors400',
		// 	component: PagesErrors400,
		// 	meta: {
		// 		contentOnly: true
		// 	}
		// },
		// {
		// 	path: '/pages/errors/403',
		// 	name: 'PagesErrors403',
		// 	component: PagesErrors403,
		// 	meta: {
		// 		contentOnly: true
		// 	}
		// },
		// {
		// 	path: '/pages/errors/404',
		// 	name: 'PagesErrors404',
		// 	component: PagesErrors404,
		// 	meta: {
		// 		contentOnly: true
		// 	}
		// },
		// {
		// 	path: '/pages/errors/500',
		// 	name: 'PagesErrors500',
		// 	component: PagesErrors500,
		// 	meta: {
		// 		contentOnly: true
		// 	}
		// },
		// {
		// 	path: '/pages/errors/503',
		// 	name: 'PagesErrors503',
		// 	component: PagesErrors503,
		// 	meta: {
		// 		contentOnly: true
		// 	}
		// },
		// {
		// 	path: '/pages/starter-page',
		// 	name: 'PagesStarterPage',
		// 	component: PagesStarterPage
		// },
		// {
		// 	path: '/pages/blank',
		// 	name: 'PagesBlank',
		// 	component: PagesBlank
		// },
		// {
		// 	path: '/pages/search-result',
		// 	name: 'PagesSearchResult',
		// 	component: PagesSearchResult
		// },
		// {
		// 	path: '/pages/custom-scroll',
		// 	name: 'PagesCustomScroll',
		// 	component: PagesCustomScroll
		// },
		// {
		// 	path: '/pages/login',
		// 	name: 'PagesLogin',
		// 	component: PagesLogin,
		// 	meta: {
		// 		contentOnly: true
		// 	}
		// },
		// {
		// 	path: '/pages/lock-screen',
		// 	name: 'PagesLockScreen',
		// 	component: PagesLockScreen,
		// 	meta: {
		// 		contentOnly: true
		// 	}
		// },
		// {
		// 	path: '/pages/recoverpw',
		// 	name: 'PagesRecoverpw',
		// 	component: PagesRecoverpw,
		// 	meta: {
		// 		contentOnly: true
		// 	}
		// },
		// {
		// 	path: '/pages/animation',
		// 	name: 'PagesAnimation',
		// 	component: PagesAnimation
		// },
		// {
		// 	path: '/pages/profile',
		// 	name: 'PagesProfile',
		// 	component: PagesProfile
		// },
		// {
		// 	path: '/pages/invoice',
		// 	name: 'PagesInvoice',
		// 	component: PagesInvoice
		// },
		// {
		// 	path: '/pages/gallery',
		// 	name: 'PagesGallery',
		// 	component: PagesGallery
		// },
		// {
		// 	path: '/pages/pricing',
		// 	name: 'PagesPricing',
		// 	component: PagesPricing
		// },
		// {
		// 	path: '/pages/register',
		// 	name: 'PagesRegister',
		// 	component: PagesRegister,
		// 	meta: {
		// 		contentOnly: true
		// 	}
		// },


		// {
		// 	path: '/calendar',
		// 	name: 'Calendar',
		// 	component: Calendar
		// },
	]
})
