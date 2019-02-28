<template>
        <div class="white-box">
            <div class="panel panel-info">    
                <form class="form-horizontal" @submit.prevent="submit()">
                    <div class="form-group">
                        <label class="col-md-12"><span class="help">Funcionario</span></label>
                        <div class="col-md-12">
                            <input type="text" class="form-control" value="Sebastian Silva" disabled="disabled"> </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-12" for="example-email">Email <span class="help">ejemplo@pjud.cl</span></label>
                        <div class="col-md-12">
                            <input type="email" id="example-email" name="example-email" class="form-control" placeholder="Email" value="SSILVA@PJUD.CL" disabled="disabled"> </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-12">Observacion</label>
                        <div class="col-md-12">
                            <textarea class="form-control" rows="5" v-model="areatext"></textarea>
                        </div>
                    </div>
                    <div class="form-actions">
                        <!-- <input type="submit" value="Submit"  /> -->
                        <button class="btn btn-info"><i class="fa fa-check"></i> Guardar</button>
                        <!-- <input type="button" class="btn btn-default"> <i class="fa fa-envelope fa-fw"></i>Enviar -->
                   </div>                    
                </form>
            </div>
        </div>
</template>
<script>

import store from 'store'   
export default {
	name: 'Observacion',
    data() {
        return {
        areatext: '',
        local: store.get('user')     
        }
    },
    mounted(){

        const cod_tribunal = this.local.cod_tribunal;
        const axios = require("axios");   
        const url = "http://localhost:3000/observaciones";

        const getData = async url => {
            
            try {

                const response = await axios.get(url);

                if(Object.keys(response.data.data.observaciones).length === 1){
                    const data = response.data;

                    Object.values(data.data.observaciones).map((type) => {
                        Object.values(type.observacion).map((obs) => {
                            this.areatext = obs.descripcion;
                        })
                    })

                }         
              
            } catch (error) {
                console.log(error);
            }            
        } 
        getData(url);
    },
    methods:{
            submit: function () {
                    // console.log(this.areatext);

                    const axios = require("axios");
                    axios.post(`http://localhost:3000/obsresoluciones`, {
                        formulario_id: 3,
                        competencia_id: 3,
                        cod_corte: 46, 
                        cod_tribunal: 1282,
                        ano: 2018,
                        observacion: [{id: 1, descripcion: this.areatext, estado_obervacion_id: 1}, 
                                      {id: 2, descripcion: this.areatext, estado_obervacion_id: 1}
                        ]
                    })
                    .then(response => {})
                    .catch(e => {
                        console.log(e);
                    })
            }
    } 
}
</script>
