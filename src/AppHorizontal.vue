<template>
	<div id="app">
		<div id="wrapper">
			<div class="preloader">
				<div class="cssload-speeding-wheel"></div>
			</div>

			<Navbar v-show="!contentOnly" />

			<Sidebar v-show="!contentOnly" />

			<router-view/>

			<RightSidebar v-show="!contentOnly" />
		</div>
	</div>
</template>

<script>
import './assets/horizontal/js/custom.js'
import './assets/horizontal/css/style.css'

import Navbar from '@/components/Horizontal/Navbar'
import Sidebar from '@/components/Horizontal/Sidebar'
import RightSidebar from '@/components/Horizontal/RightSidebar'
export default {
	name: 'app',
	data() {
		return {
			contentOnly: false
		}
	},
	methods: {
		checkLayout(route) {
			if(route && route.meta && route.meta.contentOnly)
				this.contentOnly = true
			else 
				this.contentOnly = false
		}
	},
	mounted() {
		$('.slimscrollright').slimScroll({
			height: '100%',
			position: 'right',
			size: "5px",
			color: '#dcdcdc',
		});

		$('.chat-list').slimScroll({
			height: '100%',
			position: 'right',
			size: "5px",
			color: '#dcdcdc',
		});
	},
	created() {
		this.checkLayout(this.$router.currentRoute)
		this.$router.beforeEach((to, from, next) => {
			this.checkLayout(to)
			next()
		})
	},
	components: {
		Navbar,
		Sidebar,
		RightSidebar
	}
}
</script>

<style lang="scss">

</style>