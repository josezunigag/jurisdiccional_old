<template>
        <div class="white-box">
            <div class="panel panel-info">    
                <form class="form-horizontal" @submit.prevent="submit()">
                    <div class="form-group">
                        <label class="col-md-12">Observacion</label>
                        <div class="col-md-12">
                            <textarea class="form-control" rows="5" v-model="areatext"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-12">Observacion General</label>
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
                    // const axios = require("axios");
                    // axios.post(`http://localhost:3000/resolucioneSave`, {
                    //     texto: this.areatext
                    // })
                    // .then(response => {})
                    // .catch(e => {
                    //     this.errors.push(e)
                    // })
            }
    } 
}
</script>
