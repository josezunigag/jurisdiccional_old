<template>
	<!-- ===== Top-Navigation ===== -->
	<nav class="navbar navbar-default navbar-static-top m-b-0">
		<div class="navbar-header">
			<a class="navbar-toggle font-20 hidden-sm hidden-md hidden-lg " href="javascript:void(0)" data-toggle="collapse" data-target=".navbar-collapse">
				<i class="fa fa-bars"></i>
			</a>
			<div class="top-left-part">
				<a class="logo" href="/">
				 	<b>
					</b>
				</a>
			</div>
			<ul class="nav navbar-top-links navbar-left hidden-xs">
				<li>
					<a href="javascript:void(0)" class="sidebartoggler font-20 waves-effect waves-light" @click="resize"><i class="icon-arrow-left-circle"></i></a>
				</li>
				<li class="nav navbar-top-links navbar-center">
					<h2 id="tribunal">{{gls_tribunal}}</h2>
				</li>
			</ul>
			<ul class="nav navbar-top-links navbar-right pull-right">
				<li class="dropdown open">
					<a class="dropdown-toggle waves-effect waves-light font-20" data-toggle="dropdown" href="javascript:void(0);">
						<i class="icon-list"></i>
						<span class="badge badge-xl badge-danger">{{year(year)}}</span>
					</a>
          <ul class="dropdown-menu animated slideInUp">
            <li @click="setYear(2020)" style="text-align:center;"><strong>2020</strong></li>
            <li @click="setYear(2019)" style="text-align:center;"><strong>2019</strong></li>
            <li @click="setYear(2018)" style="text-align:center;"><strong>2018</strong></li>
          </ul>
				</li>
				<li v-if="this.local.perfil_id == 1" class="dropdown open"  @click="loadData()">
					<a class="dropdown-toggle waves-effect waves-light font-20" data-toggle="dropdown" href="javascript:void(0);">
						<i class="icon-calender"></i>
						<span class="badge badge-xs badge-danger">{{complete.length}}</span>
					</a>
					<ul class="dropdown-menu dropdown-tasks animated slideInUp">
						<li v-for="form in complete" :key="form.index">
							<a href="javascript:void(0);">
								<div>
									<p>
										<strong>{{form.descript}}</strong>
										<span class="pull-right text-muted">{{form.completed}}% Completado</span>
									</p>
									<div class="progress progress-striped active">
										<div v-bind:class="form.completed == 100 ? 'progress-bar progress-bar-success':'' "  role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
											<span class="sr-only">{{form.completed}}% Completado (success)</span>
										</div>
									</div>
								</div>
							</a>
						</li>
						<li class="divider"></li>
					</ul>
				</li>
				<li class="right-side-toggle">
					<a class="right-side-toggler waves-effect waves-light b-r-0 font-20" href="javascript:void(0)">
						<i class="icon-settings"></i>
					</a>
				</li>
			</ul>
		</div>
	</nav>
	<!-- ===== Top-Navigation-End ===== -->
</template>

<script>
import { url } from '@/config/api'
import store from 'store'
import {mapMutations, mapState} from 'vuex'
export default {
  name: 'Navbar',
  data () {
    return {
      gls_tribunal: '',
      local: store.get('user'),
      complete: [],
      formulario: {
        1: 'Ingresos',
        3: 'Resoluciones',
        5: 'Terminos',
        6: 'Presupuestos',
        7: 'Presentaciones',
        8: 'Dotaciones',
        9: 'Administrativa',
        10: 'Academia',
        14: 'Concursos'
      }
    }
  },
  created(){
    this.loadData()
  },
  methods: {
    ...mapState([
      'year'
    ]),    
    ...mapMutations(['setYear']),
    resize () {
      if ($('body').hasClass('mini-sidebar')) {
        $('body').trigger('resize')
        $('.scroll-sidebar, .slimScrollDiv').css('overflow', 'hidden').parent().css('overflow', 'visible')
        $('body').removeClass('mini-sidebar')
        $('.top-left-part span').show()
        $('.sidebartoggler i').addClass('fa fa-bars')
      } else {
        $('body').trigger('resize')
        $('.scroll-sidebar, .slimScrollDiv').css('overflow-x', 'visible').parent().css('overflow', 'visible')
        $('body').addClass('mini-sidebar')
        $('.top-left-part span').hide()
        $('.sidebartoggler i').removeClass('fa fa-bars')
      }
    },
    findClass (el, domClass) {
      return el
        .classList
        .contains(domClass)
    },
    loadData(){
    const axios = require('axios')
    this.complete = [];
    let urlobs = url + '/formularios'
    this.competencia_id = this.local.competencia_id
    if (this.local.competencia_id[0].competencia_id) {
		   this.competencia_id = this.local.competencia_id[0].competencia_id
    }

    this.cod_corte = this.local.cod_corte
    this.cod_tribunal = this.local.cod_tribunal

    const getData = async urlobs => {
      try {
        const response = await axios.get(urlobs, {
          params: {
            // competencia_id: this.competencia_id,
            cod_corte: this.cod_corte,
            cod_tribunal: this.cod_tribunal,
            ano: this.year()
          }
        })

        const data = response.data
        
        Object.values(data.data.data).map((type) => {
          var descript = type.descripcion;
          var completed = (type.Observacion.length >= 1) ? 100 : 0;
          var aux = {descript,completed}
          this.complete.push(aux)
        })
      } catch (error) {
        console.log(error)
      }
    }

    getData(urlobs)
    }
  },
  mounted () {
    var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width
    var topOffset = 60
    if (width < 1170) {
      $('body').addClass('mini-sidebar')
      $('.top-left-part span').hide()
      $('.scroll-sidebar, .slimScrollDiv').css('overflow-x', 'visible').parent().css('overflow', 'visible')
      $('.sidebartoggler i').addClass('fa fa-bars')
    } else {
      $('body').removeClass('mini-sidebar')
      $('.top-left-part span').show()
      $('.sidebartoggler i').removeClass('fa fa-bars')
    }

    var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1
    height = height - topOffset
    if (height < 1) height = 1
    if (height > topOffset) {
      $('.page-wrapper').css('min-height', (height) + 'px')
    }
    const axios = require('axios')


    if (this.local.perfil_id == 1) {
      let url_ing = url + '/tribunales_glosa'
      this.competencia_id = this.local.competencia_id
      this.cod_corte = this.local.cod_corte
      this.cod_tribunal = this.local.cod_tribunal

      if (this.local.competencia_id[0].competencia_id) {
          this.competencia_id = this.local.competencia_id[0].competencia_id
      }

      const getData = async url_ing => {
        try {
          const response = await axios.get(url_ing, {
            params: {
              // competencia_id: this.competencia_id,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal
            }
          })

          const data = response.data

          Object.values(data.data.tribunal).map((type) => {
            this.gls_tribunal = type.gls_tribunal
            store.set('gls_tribunal',type.gls_tribunal)
          })
        } catch (error) {
          console.log(error)
        }
      }
      getData(url_ing)
    } else if (this.local.perfil_id == 2) {
      let url_cort = url + '/cortes_glosa'
      const getData = async url_cort => {
        try {
          const response = await axios.get(url_cort, {
            params: {
              competencia_id: this.competencia_id,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal
            }
          })

          const data = response.data

          Object.values(data.data.cortes).map((type) => {
            this.gls_tribunal = type.gls_corte
          })
        } catch (error) {
          console.log(error)
        }
      }
      getData(url_cort)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#tribunal{
	color: #e4ebef
}
</style>
