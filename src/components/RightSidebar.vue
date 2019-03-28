<template>
	<!-- ===== Right-Sidebar ===== -->
	<div class="right-sidebar">
		<div class="slimscrollright">
			<div class="rpanel-title">Configuracion<span><i class="icon-close right-side-toggler"></i></span> </div>
			<div class="r-panel-body">
				<ul class="hidden-xs">
					<li>
						<div class="checkbox checkbox-danger" >
							<button class="btn btn-info col-md-12" @click="submit()"><i class="icon-logout fa-fw"></i>Cerrar Sesión
							</button>
						</div>
					</li>
					<li>
						<br>
						<div class="checkbox checkbox-danger">	
							<a class="btn btn-info col-md-12" :href="`${url}/descargar`">Manual</a>
						</div>							
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- ===== Right-Sidebar-End ===== -->
</template>

<script>
import store from 'store'
import {url} from '@/config/api'

export default {
	name: 'RightSidebar',
	data(){
		return{
			url
		}
	},
    methods:{
            submit: function () {
    		 store.remove('user')
      		 this.$router.push('/login')
            }
	},	
	mounted(){
		$(".right-side-toggler").on('click', function() {
			$(".right-sidebar").slideDown(50);
			$(".right-sidebar").toggleClass("shw-rside");

			// Fix header

			$(".fxhdr").on('click', function() {
				$("body").toggleClass("fix-header");
			});

			// Fix sidebar

			$(".fxsdr").on('click', function() {
				$("body").toggleClass("fix-sidebar");
			});
		});
	} 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
