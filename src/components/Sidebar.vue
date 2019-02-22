<template>
	<!-- ===== Left-Sidebar ===== -->
	<aside class="sidebar">
		<div class="scroll-sidebar">
			<div class="user-profile">
				<div class="dropdown user-pro-body">
					<div class="profile-image">
						<img src="../plugins/images/users/user-icon.png" alt="user-img" class="img-circle">
						<a href="javascript:void(0);" class="dropdown-toggle u-dropdown text-blue" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							<span class="badge badge-danger">
								<i class="fa fa-angle-down"></i>
							</span>
						</a>
						<ul class="dropdown-menu animated flipInY">
							<!-- <li v-for="a in menu" :key="a.name"><a href="javascript:void(0);"><i class="fa fa-user"></i>{{a.name}}</a></li> -->
							<!-- <li><a href="javascript:void(0);"><i class="fa fa-inbox"></i> Inbox</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="javascript:void(0);"><i class="fa fa-cog"></i> Account Settings</a></li>
							<li role="separator" class="divider"></li>
							<li><a href=""><i class="fa fa-power-off"></i> Logout</a></li> -->
						</ul>
					</div>
					<p class="profile-text m-t-15 font-16"><a href="javascript:void(0);">Sebastian Silva </a></p>
				</div>
			</div>
			<nav class="sidebar-nav">
				<ul id="side-menu" v-if="open">
					<li :class="{'active':checkPath('/antecedentes/')}">
						<a class="waves-effect" href="javascript:void(0);" aria-expanded="false"><i class="icon-info fa-fw"></i> <span class="hide-menu">Ant. Generales <span class="label label-rounded label-info pull-right">5</span></span></a>
						<ul :aria-expanded="checkPath('/antecedentes/')" class="collapse" :class="{'in':checkPath('/antecedentes/')}" :style="{ height: checkPath('/antecedentes/') ? 'auto' : 0 }">
							<li v-for="menu in menus" :key="menu.nombre"> <router-link :to="menu.link" active-class="active" >{{menu.nombre}}</router-link></li>
						</ul>
					</li>					
					<li :class="{'active':checkPath('/ingresos/ingreso')}">
						<a class="waves-effect" href="javascript:void(0);" aria-expanded="false"><i class="icon-screen-desktop fa-fw"></i> <span class="hide-menu"> Gest. Juridiccional <span class="label label-rounded label-info pull-right">5</span></span></a>
						<ul :aria-expanded="checkPath('/ingresos/ingreso')" class="collapse" :class="{'in':checkPath('/ingresos/ingreso')}" :style="{ height: checkPath('/ingresos/ingreso') ? 'auto' : 0 }">
							<li v-for="menu in menus" :key="menu.nombre"> <router-link :to="menu.link" active-class="active" >{{menu.nombre}}</router-link></li>
						</ul>
					</li>
					<li :class="{'active':checkPath('/resoluciones/juez')}">
						<a class="waves-effect" href="javascript:void(0);" aria-expanded="false"><i class="icon-people fa-fw"></i><span class="hide-menu">Información RR.HH <span class="label label-rounded label-info pull-right">1</span></span></a>
						<ul :aria-expanded="checkPath('/resoluciones/juez')" class="collapse" :class="{'in':checkPath('/resoluciones/juez')}" :style="{ height: checkPath('/resoluciones/juez') ? 'auto' : 0 }">
							<li v-for="menu in rrhh" :key="menu.nombre"> <router-link :to="menu.link" active-class="active" >{{menu.nombre}}</router-link></li>
						</ul>
					</li>					
				</ul>
			</nav>
			<!-- <div class="p-30">
				<span class="hide-menu">
					<a href="javascript:void(0);" target="_blank" class="btn btn-success">Buy Cubic Admin</a>
					<a href="javascript:void(0);" target="_blank" class="btn btn-default m-t-15">Check Documentation</a>
				</span>
			</div> -->
		</div>
	</aside>
	<!-- ===== Left-Sidebar-End ===== -->
</template>
 
<script>

// const {Ingreso} = require('./Ingresos/IngresoModel'); 
// const {Ingreso}  = require('./components/Ingresos');
// const Ingreso = require('Ingresos');

export default {
	name: 'Sidebar',
	data() {
		return {
			activeLink: null,
			menus: [{nombre: 'Ingresos', link: '/ingresos/ingreso'},
					{nombre: 'Resoluciones', link: '/resoluciones/juez'},
					{nombre: 'Audiencias', link: '/'},
					{nombre: 'Terminos', link:  '/'},
					{nombre: 'Sentencias', link: '/'
			}],
			rrhh:  [{nombre: 'Dotacion', link: '/resoluciones/juez'},
					{nombre: 'Requerimientos', link: '/resoluciones/juez'},
					{nombre: 'Concursos', link: '/'},
					{nombre: 'Comite', link:  '/'
			}],
			open: false			
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
		this.open = true
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
