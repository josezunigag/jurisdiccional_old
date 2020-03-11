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
					<li>
						<br>
						<div class="checkbox checkbox-danger">
							<button class="btn btn-info col-md-12" @click="final()"><i class="icon-check fa-fw"></i>Enviar a ICA
							</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- ===== Right-Sidebar-End ===== -->
</template>

<script>
import { url } from '@/config/api'
import store from 'store'
import {mapState} from 'vuex'

export default {
  name: 'RightSidebar',
  data () {
    return {
      url,
      local: store.get('user'),
      cod_corte: 0,
      cod_tribunal: 0,
      email: ''
    }
  },
  computed:{
    ...mapState([
      'year'
    ])
  },  
  methods: {
    submit: function () {
    	store.remove('user')
      this.$router.push('/login')
    },
    final () {
      this.cod_corte = this.local.cod_corte
      this.cod_tribunal = this.local.cod_tribunal
      this.email = this.local.email

      const url_fin = url + '/finalizar'
      const url_sub = url + '/sendemail'
      const axios = require('axios')

      axios.post(url_fin, {
        cod_corte: this.cod_corte,
        cod_tribunal: this.cod_tribunal,
        ano: this.year
      })
      .then(response => {})
        .catch(e => {
          console.log(e)
      })   

      axios({
        url: url_sub,
        method: 'get',
        params: {
          email: this.email
        }
      })
      .then(response => {})
        .catch(e => {
          console.log(e)
      })      

      // this.$router.push('/antecedentes/generales')


    }
  },
  mounted () {
    $('.right-side-toggler').on('click', function () {
      $('.right-sidebar').slideDown(50)
      $('.right-sidebar').toggleClass('shw-rside')

      // Fix header

      $('.fxhdr').on('click', function () {
        $('body').toggleClass('fix-header')
      })

      // Fix sidebar

      $('.fxsdr').on('click', function () {
        $('body').toggleClass('fix-sidebar')
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
