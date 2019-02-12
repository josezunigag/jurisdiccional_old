import Vue from 'vue'
import Router from 'vue-router'

import DashboardModern from './views/Dashboard/Modern'
import DashboardClean from './views/Dashboard/Clean'
import DashboardAnalytical from './views/Dashboard/Analytical'

import EcommerceDashboard from './views/Ecommerce/Dashboard'
import EcommerceProducts from './views/Ecommerce/Products'
import EcommerceProductDetail from './views/Ecommerce/ProductDetail'
import EcommerceProductEdit from './views/Ecommerce/ProductEdit'
import EcommerceProductOrders from './views/Ecommerce/ProductOrders'
import EcommerceProductCart from './views/Ecommerce/ProductCart'
import EcommerceProductCheckout from './views/Ecommerce/ProductCheckout'

import InboxMailBox from './views/Inbox/MailBox'
import InboxMailDetails from './views/Inbox/MailDetails'
import InboxMailCompose from './views/Inbox/MailCompose'
import InboxContact from './views/Inbox/Contact'
import InboxContactDetail from './views/Inbox/ContactDetail'

import UIPanelsWells from './views/UI/PanelsWells'
import UIPanelBlock from './views/UI/PanelBlock'
import UIPortletDraggable from './views/UI/PortletDraggable'
import UIButtons from './views/UI/Buttons'
import UITabs from './views/UI/Tabs'
import UIModals from './views/UI/Modals'
import UIProgressbars from './views/UI/Progressbars'
import UINotification from './views/UI/Notification'
import UICarousel from './views/UI/Carousel'
import UIUserCards from './views/UI/UserCards'
import UITimeline from './views/UI/Timeline'
import UITimelineHorizontal from './views/UI/TimelineHorizontal'
import UIRangeSlider from './views/UI/RangeSlider'
import UIRibbons from './views/UI/Ribbons'
import UISteps from './views/UI/Steps'
import UISessionIdleTimeout from './views/UI/SessionIdleTimeout'
import UISessionTimeout from './views/UI/SessionTimeout'
import UIBootstrap from './views/UI/Bootstrap'

import FormsBasic from './views/Forms/Basic'
import FormsLayout from './views/Forms/Layout'
import FormsIcheckControl from './views/Forms/IcheckControl'
import FormsAdvanced from './views/Forms/Advanced'
import FormsUpload from './views/Forms/Upload'
import FormsDropzone from './views/Forms/Dropzone'
import FormsPickers from './views/Forms/Pickers'

import TablesBasic from './views/Tables/Basic'
import TablesLayouts from './views/Tables/Layouts'
import TablesDatatable from './views/Tables/Datatable'
import TablesBootstrap from './views/Tables/Bootstrap'
import TablesResponsive from './views/Tables/Responsive'
import TablesEditable from './views/Tables/Editable'

import ChartsMorris from './views/Charts/Morris'
import ChartsPeity from './views/Charts/Peity'
import ChartsKnob from './views/Charts/Knob'
import ChartsSparkline from './views/Charts/Sparkline'

import Widgets from './views/Widgets'

import IconsSimpleLine from './views/Icons/SimpleLine'
import IconsFontawesome from './views/Icons/Fontawesome'

import MapsGoogle from './views/Maps/Google'
import MapsVector from './views/Maps/Vector'

import PagesErrors400 from './views/Pages/Errors/400'
import PagesErrors403 from './views/Pages/Errors/403'
import PagesErrors404 from './views/Pages/Errors/404'
import PagesErrors500 from './views/Pages/Errors/500'
import PagesErrors503 from './views/Pages/Errors/503'

import PagesStarterPage from './views/Pages/StarterPage'
import PagesBlank from './views/Pages/Blank'
import PagesSearchResult from './views/Pages/SearchResult'
import PagesCustomScroll from './views/Pages/CustomScroll'
import PagesLogin from './views/Pages/Login'
import PagesLockScreen from './views/Pages/LockScreen'
import PagesRecoverpw from './views/Pages/Recoverpw'
import PagesAnimation from './views/Pages/Animation'
import PagesProfile from './views/Pages/Profile'
import PagesInvoice from './views/Pages/Invoice'
import PagesGallery from './views/Pages/Gallery'
import PagesPricing from './views/Pages/Pricing'
import PagesRegister from './views/Pages/Register'

import Calendar from './views/Calendar'

Vue.use(Router)

export default new Router({
	mode: 'history',
	//base: '/sub-path/',
	routes: [
		{
			path: '/',
			alias: '/dashboard/modern',
			name: 'DashboardModern',
			component: DashboardModern
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
		// 	path: '/tables/data-table',
		// 	name: 'TablesDatatable',
		// 	component: TablesDatatable
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
