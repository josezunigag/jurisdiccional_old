<template>
    <div class="col-md-3 col-sm-12">
        <div class="white-box">
            <h3 class="box-title t-a-c">Nivel de Visualización</h3>
            <div class="task-widget t-a-c">
                <div class="task-content font-16 t-a-c">
                    <div class="col-sm-12">
                        <ul class="nav tabs-vertical">
                            <li class="tab active">
                                <router-link to="/ingresos/ingreso">
                                    <a data-toggle="tab" href="#home3" aria-expanded="true"> <span class="visible-xs"></span> <span class="hidden-xs">Ingresos</span> </a>
                                </router-link>
                            </li>
                            <li class="tab">
                                <router-link to="/ingresos/materia">
                                <a data-toggle="tab" href="#profile3" aria-expanded="false"> <span class="visible-xs"></span> <span class="hidden-xs">Ingresos Materia</span></a>
                                </router-link>
                            </li>
                            <!-- <li class="tab">
                                <a aria-expanded="false" data-toggle="tab" href="#messages3"> <span class="visible-xs"></span> <span class="hidden-xs">Ingresos ROL</span> </a>
                            </li> -->
                        </ul>
                    </div>                        
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
	name: 'Visualizacion',
}
</script>
