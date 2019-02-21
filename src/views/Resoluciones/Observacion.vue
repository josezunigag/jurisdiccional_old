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

export default {
    
	name: 'Observacion',
    data() {
        return {
        areatext: '',
        }
    },   
    methods:{
            submit: function () {
                    // console.log(this.areatext);

                    const axios = require("axios");
                    axios.post(`http://localhost:3000/resolucioneSave`, {
                        texto: this.areatext
                    })
                    .then(response => {})
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
    } 
}
</script>
