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
					<li  v-if="this.local.perfil_id == 3" :class="{'active':checkPath('/usuarios/agregar')}">
						<a class="waves-effect" href="javascript:void(0);" aria-expanded="false"><i class="icon-credit-card fa-fw"></i><span class="hide-menu">Administración<span class="label label-rounded label-info pull-right">{{menus.length}}</span></span></a>
						<ul :style="{ height: checkPath('/agregar/') ? 'auto' : 0 }">
							<li v-for="menu in menus" :key="menu.nombre"> <router-link :to="menu.link" active-class="active" >{{menu.nombre}}</router-link></li>
						</ul>
					</li>           
					<li v-if="this.local.perfil_id == 2" :class="{'active':checkPath('/ingresos/ingreso')}">
						<a class="waves-effect" href="javascript:void(0);" aria-expanded="false"><i class="icon-info fa-fw"></i> <span class="hide-menu">Corte Apelaciones<span class="label label-rounded label-info pull-right">{{menus.length}}</span></span></a>
						<ul  :aria-expanded="checkPath('/ingresos/ingreso')" class="collapse" :class="{'in':checkPath('/ingresos/ingreso')}" :style="{ height: checkPath('/ingresos/ingreso') ? 'auto' : 0 }">
							<li v-for="menu in menus" :key="menu.nombre" style="color:green"> <router-link :to="menu.link"  active-class="active" ><font size="1">{{menu.nombre+' '}}</font><i v-if="menu.check === 'true' " class="icon-check fa-fw"></i></router-link>
              </li>
						</ul>
					</li>
					<li v-if="this.local.perfil_id == 1" :class="{'active':checkPath('/antecedentes/')}">
						<a class="waves-effect" href="javascript:void(0);" aria-expanded="false"><i class="icon-info fa-fw"></i> <span class="hide-menu">Antecedentes <span class="label label-rounded label-info pull-right">{{antc.length}}</span></span></a>
						<ul :aria-expanded="checkPath('/antecedentes/')" class="collapse" :class="{'in':checkPath('/antecedentes/')}" :style="{ height: checkPath('/antecedentes/') ? 'auto' : 0 }">
							<li v-for="menu in antc" :key="menu.nombre"> <router-link :to="menu.link" active-class="active" >{{menu.nombre}}</router-link></li>
						</ul>
					</li>
					<li v-if="this.local.perfil_id == 1" :class="{'active':checkPath('/ingresos/ingreso')}">
						<a class="waves-effect" href="javascript:void(0);" aria-expanded="false"><i class="icon-chart fa-fw"></i> <span class="hide-menu">Gest. Jurisdiccional <span class="label label-rounded label-info pull-right">{{menus.length}}</span></span></a>
						<ul  :aria-expanded="checkPath('/ingresos/ingreso')" class="collapse" :class="{'in':checkPath('/ingresos/ingreso')}" :style="{ height: checkPath('/ingresos/ingreso') ? 'auto' : 0 }">
							<li v-for="menu in menus" :key="menu.nombre"> <router-link :to="menu.link"  active-class="active" >{{menu.nombre}}</router-link></li>
						</ul>
					</li>
					<li v-if="this.local.perfil_id == 1" :class="{'active':checkPath('/dotaciones/')}">
						<a class="waves-effect" href="javascript:void(0);" aria-expanded="false"><i class="icon-people fa-fw"></i><span class="hide-menu">Información RR.HH <span class="label label-rounded label-info pull-right">{{rrhh.length}}</span></span></a>
						<ul :aria-expanded="checkPath('/dotaciones/')" class="collapse" :class="{'in':checkPath('/dotaciones/')}" :style="{ height: checkPath('/dotaciones/') ? 'auto' : 0 }">
							<li v-for="menu in rrhh" :key="menu.nombre"> <router-link :to="menu.link" active-class="active" >{{menu.nombre}}</router-link></li>
						</ul>
					</li>
					<li  v-if="this.local.perfil_id == 1" :class="{'active':checkPath('/presupuestos/')}">
						<a class="waves-effect" href="javascript:void(0);" aria-expanded="false"><i class="icon-credit-card fa-fw"></i><span class="hide-menu">Gestión<span class="label label-rounded label-info pull-right">{{finanzas.length}}</span></span></a>
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
import { url } from '@/config/api'

export default {
  name: 'Sidebar',
  data () {
    return {
      activeLink: null,
      menus: [],
      rrhh: [],
      antc: [],
      finanzas: [],
      competencias: {
        2: 'Cobranza',
        3: 'Familia',
        4: 'Laboral',
        5: 'Penal'
      },
      open: false,
      local: store.get('user')
    }
  },
  methods: {
    goto (index, indexPath) {
      if (index.charAt(0) === '/') {
        this.$router.push(index)
        this.$emit('push-page', { page: index })
      }
    },
    setLink (path) {
      this.activeLink = path
    },
    checkPath (path) {
      return this.activeLink.indexOf(path) !== -1
    }
  },
  created () {
    this.setLink(this.$router.currentRoute.path)
    this.$router.afterEach((to, from) => {
      this.setLink(this.$router.currentRoute.path)
    })
  },
  mounted () {
    if (this.local.perfil_id == 1) {
      this.antc.push({ nombre: 'Generales', link: '/antecedentes/generales' }, { nombre: 'Presentación', link: '/antecedentes/presentaciones' })
      this.rrhh.push({ nombre: 'Dotación', link: '/dotaciones/tribunales' }, { nombre: 'Concursos', link: '/dotaciones/concursos' })
      this.finanzas.push({ nombre: 'Presupuestaria', link: '/presupuestos/tribunales' },
							    { nombre: 'Administrativa', link: '/presupuestos/administrativa' },
        { nombre: 'Academia', link: '/presupuestos/academica' })

      if (!this.local.competencia_id[0].competencia_id) {
			  if(this.local.competencia_id != 2){ // Solo Competencias Que tienen Audiencias
			   this.menus.push(
					{ nombre: 'Audiencias ', link: '/audiencias/audiencia/' }
			   )
        }        
        this.menus.push(
          { nombre: 'Ingresos', link: '/ingresos/ingreso/' + this.competencias[this.local.competencia_id].toLowerCase() },
          { nombre: 'Resoluciones', link: '/resoluciones/juez' },
          { nombre: 'Términos', link: '/terminos/materia' }
        )
      } else {
        Object.values(this.local.competencia_id).map((type) => {
			  if(type.competencia_id != 2){ // Solo Competencias Que tienen Audiencias
			   this.menus.push(
					{ nombre: 'Audiencias ' + this.competencias[type.competencia_id], link: '/audiencias/audiencia/' + this.competencias[type.competencia_id].toLowerCase() },
			   )
			}
			this.menus.push(
				{ nombre: 'Ingresos ' + this.competencias[type.competencia_id], link: '/ingresos/ingreso/' + this.competencias[type.competencia_id].toLowerCase() },
				{ nombre: 'Resoluciones ' + this.competencias[type.competencia_id], link: '/resoluciones/juez/' + this.competencias[type.competencia_id].toLowerCase() },
				{ nombre: 'Términos ' + this.competencias[type.competencia_id], link: '/terminos/materia/' + this.competencias[type.competencia_id].toLowerCase() }
			)
        })
      }
    } else if (this.local.perfil_id == 2) {
      // this.competencia_id = this.setCompetencia()

      this.cod_corte = this.local.cod_corte
      // this.cod_tribunal   = this.local.cod_tribunal;

      const axios = require('axios')
      const url_aca = url + '/group'
      const getData = async url_aca => {
        try {
          const response = await axios.get(url_aca, {
            params: {
              // competencia_id: this.competencia_id,
              cod_corte: this.cod_corte
              // cod_tribunal: this.cod_tribunal,
              // ano: 2018,
            }
          })

          const data = response.data

          Object.values(data.data.tribunal).map((type) => {
            var check = 'false';
            if(type.Observacion[0] !== undefined){
              check = 'true'
            }
            this.menus.push({ nombre: type.gls_tribunal, link: '/consolidados/consolidados/' + type.cod_tribunal, check: check})
          })
        } catch (error) {
          console.log(error)
        }
      }
      getData(url_aca)
    } else if (this.local.perfil_id == 3) {
      this.menus.push({ nombre: 'Estados', link: '/reportes/inicio/'},
                      { nombre: 'Agregar Usuarios', link: '/usuarios/agregar/'})
    }
    this.open = true
    setTimeout(() => {
      $('#side-menu').metisMenu()
    }, 400)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
