<template>
    <div class="page-wrapper">
        <div class="container-fluid">
            <!-- ===== Page-Container ===== -->
            <div class="white-box">
                <!-- <h3 class="box-title m-b-0">CONCURSOS POR CARGO</h3> -->
                <!-- <p class="text-muted m-b-30 font-13"> Validation styles for error, warning, and success states on form controls.</p> -->
                <div class="row">
                    <div class="col-xs-12">
                        <form class="form-horizontal" role="form">
                            <div class="table-responsive">
                                <table class="table color-table info-table">
                                    <thead>
                                        <tr>
                                            <th>Cargo</th>
                                            <th>FECHA PUBLICACIÓN</th>
                                            <th>RESULTADO</th>
                                            <th>FECHA ASUNCIÓN 2018</th>
                                            <th>DEMORA EN ASUNCIÓN</th>                       
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="index in 10" :key="index">
                                            <td >
                                                <div class="form-group">
                                                    <!-- <label class="col-md-3 control-label" for="state-success">Success</label> -->
                                                    <!-- <div class="col-md-6"> -->
                                                    <input type="text" id="state-success" :name="index" class="form-control" placeholder="">
                                                    <!-- </div> -->
                                                </div>                                                            
                                            </td>
                                            <td class="input-group">
                                                <input type="text" class="form-control" id="datepicker-autoclose" placeholder=""> <span class="input-group-addon"><i class="icon-calender"></i></span> 
                                            </td >
                                            <td>
                                                <select class="form-group col-md-12">
                                                    <option>Seleccione</option>
                                                    <option>Resuelto</option>
                                                    <option>Pendiente</option>
                                                    <option>Declaracion Desierto</option>
                                                    <option>Concurso Anulado</option>
                                                </select>
                                            </td>
                                            <td class="input-group">
                                                <input type="text" class="form-control" id="datepicker-autoclose" placeholder=""> <span class="input-group-addon"><i class="icon-calender"></i></span> 
                                            </td> 
                                            <td >
                                                <div class="form-group">
                                                    <!-- <label class="col-md-3 control-label" for="state-success">Success</label> -->
                                                    <!-- <div class="col-md-6"> -->
                                                    <input type="text" id="state-success" :name="index" class="form-control" placeholder="">
                                                    <!-- </div> -->
                                                </div>                                                            
                                            </td>                                                                                                                                                                        
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- ===== Page-Container-End ===== -->
        <footer class="footer t-a-c">
            Poder Judicial
        </footer> 
    </div>           
</template>
<script>
export default {
    name: 'DotacionesConcursos'
}
</script>
