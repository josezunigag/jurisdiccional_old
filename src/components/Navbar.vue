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
						<!-- <img src="../plugins/images/logo.png" alt="home" /> -->
					</b>
					<!--<span>
						<img src="../plugins/images/logo-text.png" alt="homepage" class="dark-logo" />
					</span> -->
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
				<li v-if="this.local.perfil_id == 1" class="dropdown open">
					<a class="dropdown-toggle waves-effect waves-light font-20" data-toggle="dropdown" href="javascript:void(0);">
						<i class="icon-calender"></i>
						<span class="badge badge-xs badge-danger">{{complete.length}}</span>
					</a>
					<ul class="dropdown-menu dropdown-tasks animated slideInUp">
						<li v-for="form in complete" :key="form.index">
							<a href="javascript:void(0);">
								<div>
									<p>
										<strong>{{form}}</strong>
										<span class="pull-right text-muted">100% Completado</span>
									</p>
									<div class="progress progress-striped active">
										<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
											<span class="sr-only">100% Completado (success)</span>
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
import {url} from '@/config/api'
import store from 'store'
export default {
	name: 'Navbar',
	data(){
		return{
			gls_tribunal : '',
			local: store.get('user'),
			complete: [],
			formulario : {
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


        const axios = require("axios");
        
        let  urlobs = url+"/obstotal";
		this.competencia_id = this.local.competencia_id;
		if(this.local.competencia_id[0].competencia_id){
		   this.competencia_id  = this.local.competencia_id[0].competencia_id;
		}		

        this.cod_corte      = this.local.cod_corte;
		this.cod_tribunal   = this.local.cod_tribunal;

		const getData = async urlobs => {
			try {

				const response = await axios.get(urlobs,{
					params: {
						competencia_id: this.competencia_id,
						cod_corte: this.cod_corte, 
						cod_tribunal: this.cod_tribunal,
						ano: 2018
					}  
				});

				const data  = response.data;

				Object.values(data.data.obsTotal).map((type) => {
					this.complete.push(this.formulario[type._id.formulario_id])
				})

			} catch (error) {
				console.log(error);
			}
		};
		
		getData(urlobs);	


	},
	methods: {
		resize(){
			if ($("body").hasClass("mini-sidebar")) {
				$("body").trigger("resize");
				$(".scroll-sidebar, .slimScrollDiv").css("overflow", "hidden").parent().css("overflow", "visible");
				$("body").removeClass("mini-sidebar");
				$('.top-left-part span').show();
				$(".sidebartoggler i").addClass("fa fa-bars");
			} else {
				$("body").trigger("resize");
				$(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
				$("body").addClass("mini-sidebar");
				$('.top-left-part span').hide();
				$(".sidebartoggler i").removeClass("fa fa-bars");
			}
		},
		findClass (el, domClass) {
			return el
				.classList
				.contains(domClass)

		}
	}, mounted () {
		var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
        var topOffset = 60;
        if (width < 1170) {
            $("body").addClass("mini-sidebar");
            $('.top-left-part span').hide();
            $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
            $(".sidebartoggler i").addClass("fa fa-bars");
        } else {
            $("body").removeClass("mini-sidebar");
            $('.top-left-part span').show();
            $(".sidebartoggler i").removeClass("fa fa-bars");
        }

        var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $(".page-wrapper").css("min-height", (height) + "px");
		}
        const axios = require("axios");
		
		if(this.local.perfil_id == 1){

			let  url_ing = url+"/tribunales_glosa";
			this.competencia_id = this.local.competencia_id;
			this.cod_corte      = this.local.cod_corte;
			this.cod_tribunal   = this.local.cod_tribunal;

			if(this.local.competencia_id[0].competencia_id){
			this.competencia_id  = this.local.competencia_id[0].competencia_id;
			}

			const getData = async url_ing => {
				try {
					
					const response = await axios.get(url_ing,{
						params: {
							competencia_id: this.competencia_id,
							cod_corte: this.cod_corte, 
							cod_tribunal: this.cod_tribunal
						}  
					});

					const data  = response.data;

					Object.values(data.data.tribunal).map((type) => {

							this.gls_tribunal =  type.gls_tribunal;

					})


				} catch (error) {
					console.log(error);
				}
			}
			getData(url_ing);	
		}
		// else if(this.local.perfil_id == 2){

		// }

			
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#tribunal{
	color: #e4ebef
}
</style>
