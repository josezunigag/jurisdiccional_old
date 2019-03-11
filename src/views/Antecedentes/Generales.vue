<template>
    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <div class="white-box col-md-12">
            <div class="ribbon-wrapper">
                <div class="ribbon ribbon-bookmark ribbon-info">Antecedentes</div>
                <p class="ribbon-content">
                    En cumplimiento con los establecido en el artículo 24 letra d, 
                    del Código de Tribunales, se presenta a continuación la cuenta anual de 
                    la gestión jurisdiccional y administrativa del Tribunal, para el periodo comprendido 
                    entre 01 de enero y el 31 de diciembre de 2018
                </p>
            </div>
        </div>
        <div class="container-fluid">
        <div class="row colorbox-group-widget">  
            <Totales 
                v-for="(indicator, index) in indicators"
                :key="index"
                :title="indicator.name"
                :ammount="indicator.value"
                :icon="indicator.icon"
                :link="indicator.link"
                :classtext="indicator.classtext"
                />
            </div>
        </div>
        <!-- ===== Page-Container-End ===== -->
        <footer class="footer t-a-c">
            Poder Judicial
        </footer>
    </div>
</template>
<script>
import {url} from '@/config/api'
import store from 'store'
import Totales from '@/components/Totales' 
export default {
    name: 'Generales',
    data(){
        return{
            local: store.get('user'),
            indicators: {
                ingresos: {
                name: 'Ingresos',
                value: 0,
                link: '/ingresos/ingreso',
                icon: 'icon-fingerprint',
                classtext: 'media bg-info'
                },
                resoluciones: {
                name: 'Resoluciones',
                value: 0,
                link: '/resoluciones/juez',
                icon: 'icon-report',
                classtext: 'media bg-success'                
                },
                terminos: {
                name: 'Terminos',
                value: 0,
                link: '/terminos/materia',
                icon: 'icon-access_alarms',
                classtext: 'media bg-danger',
                },
                // dotaciones: {
                // name: 'Dotacion',
                // value: 0,
                // link: '/dotaciones/tribunales',
                // icon: 'icon-access_alarms',
                // classtext: 'media bg-warning'                                   
                // }
            }            
        }
    },
    components:{
        Totales  
    },
    mounted() {
        const axios = require("axios");
        
        let  url_ing = url+'/resumenes';
        this.competencia_id = this.local.competencia_id;
        this.cod_corte      = this.local.cod_corte;
        this.cod_tribunal   = this.local.cod_tribunal;

		const getData = async url_ing => {
		try {
            const response = await axios.get(url_ing,{
                    params: {
                    competencia_id: this.competencia_id,
                    cod_corte: this.cod_corte, 
                    cod_tribunal: this.cod_tribunal,
                    }  
                }
            );
            const data = response.data;
           

            Object.values(data.data.count).map((type) => {
                this.indicators['ingresos'].value = type.ingresos;
                this.indicators['resoluciones'].value = type.resoluciones;
                this.indicators['terminos'].value = type.terminos;
                // graf.push({label: type._id, value: type.cantidad});

            })         


		} catch (error) {
			console.log(error);
		}
		};

		getData(url_ing);

                    

    }, 
}
</script>
