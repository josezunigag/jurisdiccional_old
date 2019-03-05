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
					<p class="profile-text m-t-15 font-16"><a href="javascript:void(0);">{{local.usuario}}</a></p>
				</div>
			</div>
			<nav class="sidebar-nav">
				<ul id="side-menu" v-if="open">
					<li :class="{'active':checkPath('/antecedentes/')}">
						<a class="waves-effect" href="javascript:void(0);" aria-expanded="false"><i class="icon-info fa-fw"></i> <span class="hide-menu">Antecedentes <span class="label label-rounded label-info pull-right">{{antc.length}}</span></span></a>
						<ul :aria-expanded="checkPath('/antecedentes/')" class="collapse" :class="{'in':checkPath('/antecedentes/')}" :style="{ height: checkPath('/antecedentes/') ? 'auto' : 0 }">
							<li v-for="menu in antc" :key="menu.nombre"> <router-link :to="menu.link" active-class="active" >{{menu.nombre}}</router-link></li>
						</ul>
					</li>					
					<li :class="{'active':checkPath('/ingresos/ingreso')}">
						<a class="waves-effect" href="javascript:void(0);" aria-expanded="false"><i class="icon-chart fa-fw"></i> <span class="hide-menu">Gest. Jurisdiccional <span class="label label-rounded label-info pull-right">{{menus.length}}</span></span></a>
						<ul :aria-expanded="checkPath('/ingresos/ingreso')" class="collapse" :class="{'in':checkPath('/ingresos/ingreso')}" :style="{ height: checkPath('/ingresos/ingreso') ? 'auto' : 0 }">
							<li v-for="menu in menus" :key="menu.nombre"> <router-link :to="menu.link" active-class="active" >{{menu.nombre}}</router-link></li>
						</ul>
					</li>
					<li :class="{'active':checkPath('/dotaciones/')}">
						<a class="waves-effect" href="javascript:void(0);" aria-expanded="false"><i class="icon-people fa-fw"></i><span class="hide-menu">Información RR.HH <span class="label label-rounded label-info pull-right">{{rrhh.length}}</span></span></a>
						<ul :aria-expanded="checkPath('/dotaciones/')" class="collapse" :class="{'in':checkPath('/dotaciones/')}" :style="{ height: checkPath('/dotaciones/') ? 'auto' : 0 }">
							<li v-for="menu in rrhh" :key="menu.nombre"> <router-link :to="menu.link" active-class="active" >{{menu.nombre}}</router-link></li>
						</ul>
					</li>	
					<li :class="{'active':checkPath('/presupuestos/')}">
						<a class="waves-effect" href="javascript:void(0);" aria-expanded="false"><i class="icon-credit-card fa-fw"></i><span class="hide-menu">Gestion<span class="label label-rounded label-info pull-right">{{finanzas.length}}</span></span></a>
						<ul :aria-expanded="checkPath('/presupuestos/')" class="collapse" :class="{'in':checkPath('/presupuestos/')}" :style="{ height: checkPath('/dotaciones/') ? 'auto' : 0 }">
							<li v-for="menu in finanzas" :key="menu.nombre"> <router-link :to="menu.link" active-class="active" >{{menu.nombre}}</router-link></li>
						</ul>
					</li>									
				</ul>
			</nav>
		</div>
	</aside>
	<!-- ===== Left-Sidebar-End ===== -->
</template>
 
<script>

import store from 'store'

export default {
	name: 'Sidebar',
	data() {
		return {
			activeLink: null,
			menus: [{nombre: 'Ingresos', link: '/ingresos/ingreso'},
					{nombre: 'Resoluciones', link: '/resoluciones/juez'},
					// {nombre: 'Audiencias', link: '/'},
					{nombre: 'Terminos', link:  '/terminos/materia'}
					// {nombre: 'Sentencias', link: '/'}
			],
			rrhh:  [{nombre: 'Dotacion', link: '/dotaciones/tribunales'},
					// {nombre: 'Requerimientos', link: '/resoluciones/juez'},
					{nombre: 'Concursos', link: '/dotaciones/concursos'},
					// {nombre: 'Comite', link:  '/'}
			],
			antc:  [{nombre: 'Generales', link: '/antecedentes/generales'},
					{nombre: 'Presentacion', link: '/antecedentes/presentaciones'}
			],
			finanzas:  [{nombre: 'Presupuestaría', link: '/presupuestos/tribunales'},
						{nombre: 'Administrativa', link: '/presupuestos/administrativa'}
			],			
			open: false,
			local: store.get('user')		
		}
	},
	methods: {
		goto(index, indexPath) {
			if(index.charAt(0) === '/') {
				this.$router.push(index)
				this.$emit('push-page', {page:index})
			}
			console.log(this.local);
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
		setTimeout(() => {
			$('#side-menu').metisMenu();
		}, 400);
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
