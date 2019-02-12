<template>
	<!-- ===== Left-Sidebar ===== -->
	<aside class="sidebar">
		<div class="scroll-sidebar">
			<nav class="sidebar-nav">
				<ul id="side-menu">
					<li :class="{'active':checkPath('/dashboard/')}">
						<a class="waves-effect" :class="{'active':checkPath('/dashboard/')}" href="javascript:void(0);" aria-expanded="false"><i class="icon-screen-desktop fa-fw"></i> <span class="hide-menu"> Dashboard </span></a>
						<ul aria-expanded="false" class="collapse">
							<li> <router-link to="/dashboard/modern" active-class="active">Modern Version</router-link> </li>
							<li> <router-link to="/dashboard/clean" active-class="active">Clean Version</router-link> </li>
							<li> <router-link to="/dashboard/analytical" active-class="active">Analytical Version</router-link> </li>
							<li>
								<a class="waves-effect" :class="{'active':checkPath('/ecommerce/')}" href="javascript:void(0);" aria-expanded="false"><span class="hide-menu"> eCommerce </span></a>
								<ul aria-expanded="false" class="collapse">
									<li> <router-link to="/ecommerce/dashboard" active-class="active">Dashboard</router-link> </li>
									<li> <router-link to="/ecommerce/products" active-class="active">Products</router-link> </li>
									<li> <router-link to="/ecommerce/product-detail" active-class="active">Product Detail</router-link> </li>
									<li> <router-link to="/ecommerce/product-edit" active-class="active">Product Edit</router-link> </li>
									<li> <router-link to="/ecommerce/product-orders" active-class="active">Product Orders</router-link> </li>
									<li> <router-link to="/ecommerce/product-cart" active-class="active">Product Cart</router-link> </li>
									<li> <router-link to="/ecommerce/product-checkout" active-class="active">Product Checkout</router-link> </li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="two-column" :class="{'active':checkPath('/ui/')}">
						<a class="waves-effect" :class="{'active':checkPath('/ui/')}" href="javascript:void(0);" aria-expanded="false"><i class="icon-equalizer fa-fw"></i> <span class="hide-menu"> UI Elements</span></a>
						<ul aria-expanded="false" class="collapse">
							<li> <router-link to="/ui/panels-wells" active-class="active">Panels and Wells</router-link> </li>
							<li> <router-link to="/ui/panel-ui-block" active-class="active">Panels With BlockUI</router-link> </li>
							<li> <router-link to="/ui/portlet-draggable" active-class="active">Draggable Portlet</router-link> </li>
							<li> <router-link to="/ui/buttons" active-class="active">Buttons</router-link> </li>
							<li> <router-link to="/ui/tabs" active-class="active">Tabs</router-link> </li>
							<li> <router-link to="/ui/modals" active-class="active">Modals</router-link> </li>
							<li> <router-link to="/ui/progressbars" active-class="active">Progress Bars</router-link> </li>
							<li> <router-link to="/ui/notification" active-class="active">Notifications</router-link> </li>
							<li> <router-link to="/ui/carousel" active-class="active">Carousel</router-link> </li>
							<li> <router-link to="/ui/user-cards" active-class="active">User Cards</router-link> </li>
							<li> <router-link to="/ui/timeline" active-class="active">Timeline</router-link> </li>
							<li> <router-link to="/ui/timeline-horizontal" active-class="active">Horizontal Timeline</router-link> </li>
							<li> <router-link to="/ui/range-slider" active-class="active">Range Slider</router-link> </li>
							<li> <router-link to="/ui/ribbons" active-class="active">Ribbons</router-link> </li>
							<li> <router-link to="/ui/steps" active-class="active">Steps</router-link> </li>
							<li> <router-link to="/ui/session-idle-timeout" active-class="active">Session Idle Timeout</router-link> </li>
							<li> <router-link to="/ui/session-timeout" active-class="active">Session Timeout</router-link> </li>
							<li> <router-link to="/ui/bootstrap" active-class="active">Bootstrap UI</router-link> </li>
						</ul>
					</li>
					<li class="two-column" :class="{'active':checkPath('/pages/')}">
						<a class="waves-effect" :class="{'active':checkPath('/pages/')}" href="javascript:void(0);" aria-expanded="false"><i class="icon-docs fa-fw"></i> <span class="hide-menu"> Pages</span></a>
						<ul aria-expanded="false" class="collapse">
							<li> <router-link to="/pages/starter-page" active-class="active">Starter Page</router-link> </li>
							<li> <router-link to="/pages/blank" active-class="active">Blank Page</router-link> </li>
							<li> <router-link to="/pages/search-result" active-class="active">Search Result</router-link> </li>
							<li> <router-link to="/pages/custom-scroll" active-class="active">Custom Scrolls</router-link> </li>
							<li> <router-link to="/pages/login" active-class="active">Login Page</router-link> </li>
							<li> <router-link to="/pages/lock-screen" active-class="active">Lock Screen</router-link> </li>
							<li> <router-link to="/pages/recoverpw" active-class="active">Recover Password</router-link> </li>
							<li> <router-link to="/pages/animation" active-class="active">Animations</router-link> </li>
							<li> <router-link to="/pages/profile" active-class="active">Profile</router-link> </li>
							<li> <router-link to="/pages/invoice" active-class="active">Invoice</router-link> </li>
							<li> <router-link to="/pages/gallery" active-class="active">Gallery</router-link> </li>
							<li> <router-link to="/pages/pricing" active-class="active">Pricing</router-link> </li>
							<li> <router-link to="/pages/register" active-class="active">Register</router-link> </li>
							<li> <router-link to="/pages/errors/400" active-class="active">400</router-link> </li>
							<li> <router-link to="/pages/errors/403" active-class="active">403</router-link> </li>
							<li> <router-link to="/pages/errors/404" active-class="active">404</router-link> </li>
							<li> <router-link to="/pages/errors/500" active-class="active">500</router-link> </li>
							<li> <router-link to="/pages/errors/503" active-class="active">503</router-link> </li>
						</ul>
					</li>
					<li :class="{'active':checkPath('/forms/')}">
						<a class="waves-effect" :class="{'active':checkPath('/forms/')}" href="javascript:void(0);" aria-expanded="false"><i class="icon-notebook fa-fw"></i> <span class="hide-menu"> Forms </span></a>
						<ul aria-expanded="false" class="collapse">
							<li> <router-link to="/forms/basic" active-class="active">Basic Forms</router-link> </li>
							<li> <router-link to="/forms/layout" active-class="active">Form Layout</router-link> </li>
							<li> <router-link to="/forms/icheck-control" active-class="active">Icheck Control</router-link> </li>
							<li> <router-link to="/forms/advanced" active-class="active">Form Addons</router-link> </li>
							<li> <router-link to="/forms/upload" active-class="active">File Upload</router-link> </li>
							<li> <router-link to="/forms/dropzone" active-class="active">File Dropzone</router-link> </li>
							<li> <router-link to="/forms/pickers" active-class="active">Form-pickers</router-link> </li>
						</ul>
					</li>
					<li :class="{'active':checkPath('/tables/')}">
						<a class="waves-effect" :class="{'active':checkPath('/tables/')}" href="javascript:void(0);" aria-expanded="false"><i class="icon-grid fa-fw"></i> <span class="hide-menu"> Tables</span></a>
						<ul aria-expanded="false" class="collapse">
							<li> <router-link to="/tables/basic" active-class="active">Basic Tables</router-link> </li>
							<li> <router-link to="/tables/layouts" active-class="active">Table Layouts</router-link> </li>
							<li> <router-link to="/tables/data-table" active-class="active">Data Table</router-link> </li>
							<li> <router-link to="/tables/bootstrap" active-class="active">Bootstrap Tables</router-link> </li>
							<li> <router-link to="/tables/responsive" active-class="active">Responsive Tables</router-link> </li>
							<li> <router-link to="/tables/editable" active-class="active">Editable Tables</router-link> </li>
						</ul>
					</li>
					<li :class="{'active':checkPath('/inbox/') || checkPath('/calendar') || checkPath('/widgets') || checkPath('/charts/') || checkPath('/icons/') || checkPath('/maps/')}">
						<a class="waves-effect" :class="{'active':checkPath('/inbox/') || checkPath('/calendar') || checkPath('/widgets') || checkPath('/charts/') || checkPath('/icons/') || checkPath('/maps/')}" href="javascript:void(0);" aria-expanded="false"><i class="icon-layers fa-fw"></i> <span class="hide-menu"> Extra</span></a>
						<ul aria-expanded="false" class="collapse">
							<li>
								<a class="waves-effect" :class="{'active':checkPath('/inbox/')}" href="javascript:void(0);" aria-expanded="false"><span class="hide-menu"> Inbox </span></a>
								<ul aria-expanded="false" class="collapse">
									<li> <router-link to="/inbox/mail-box" active-class="active">Mail Box</router-link> </li>
									<li> <router-link to="/inbox/mail-details" active-class="active">Mail Details</router-link> </li>
									<li> <router-link to="/inbox/mail-compose" active-class="active">Compose Mail</router-link> </li>
									<li> <router-link to="/inbox/contact" active-class="active">Contact</router-link> </li>
									<li> <router-link to="/inbox/contact-detail" active-class="active">Contact Detail</router-link> </li>
								</ul>
							</li>
							<li>
								<router-link to="/calendar" active-class="active"><span class="hide-menu">Calendar</span></router-link>
							</li>
							<li>
								<router-link to="/widgets" active-class="active"><span class="hide-menu"> Widgets </span></router-link>
							</li>
							<li>
								<a class="waves-effect" :class="{'active':checkPath('/charts/')}" href="javascript:void(0);" aria-expanded="false"><span class="hide-menu"> Charts</span></a>
								<ul aria-expanded="false" class="collapse">
									<li> <router-link to="/charts/morris" active-class="active">Morris Chart</router-link> </li>
									<li> <router-link to="/charts/peity" active-class="active">Peity Chart</router-link> </li>
									<li> <router-link to="/charts/knob" active-class="active">Knob Chart</router-link> </li>
									<li> <router-link to="/charts/sparkline" active-class="active">Sparkline Chart</router-link> </li>
								</ul>
							</li>
							<li>
								<a class="waves-effect" :class="{'active':checkPath('/icons/')}" href="javascript:void(0);" aria-expanded="false"><span class="hide-menu"> Icons</span></a>
								<ul aria-expanded="false" class="collapse">
									<li> <router-link to="/icons/simple-line" active-class="active">Simple Line</router-link> </li>
									<li> <router-link to="/icons/fontawesome" active-class="active">Fontawesome</router-link> </li>
								</ul>
							</li>
							<li>
								<a class="waves-effect" :class="{'active':checkPath('/maps/')}" href="javascript:void(0);" aria-expanded="false"><span class="hide-menu"> Maps</span></a>
								<ul aria-expanded="false" class="collapse">
									<li> <router-link to="/maps/google" active-class="active">Google Map</router-link> </li>
									<li> <router-link to="/maps/vector" active-class="active">Vector Map</router-link> </li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	</aside>
	<!-- ===== Left-Sidebar-End ===== -->
</template>

<script>
export default {
	name: 'Sidebar',
	data() {
		return {
			activeLink: null
		}
	},
	methods: {
		goto(index, indexPath) {
			if(index.charAt(0) === '/') {
				this.$router.push(index)
				this.$emit('push-page', {page:index})
			}

		},
		setLink(path) {
			this.activeLink = path
		},
		checkPath(path) {
			return this.activeLink.indexOf(path) !== -1
		}
	},
	created() {
		this.setLink(this.$router.currentRoute.path)
		this.$router.afterEach((to, from) => {
			this.setLink(this.$router.currentRoute.path)
			//console.log('afterEach', to, from)
		})
		//console.log('this.$router.currentRoute.path', this.$router.currentRoute.path)
	},
	mounted() {
		//console.log('nav component mounted')				
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
