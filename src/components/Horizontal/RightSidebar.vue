<template>
	<!-- ===== Right-Sidebar ===== -->
	<div class="right-sidebar">
		<div class="slimscrollright">
			<div class="rpanel-title"> Service Panel <span><i class="icon-close right-side-toggler"></i></span> </div>
			<div class="r-panel-body">
				<ul id="themecolors" class="m-t-20">
					<li><b>With Light sidebar</b></li>
					<li><a href="javascript:void(0)" data-theme="default" class="default-theme working">1</a></li>
					<li><a href="javascript:void(0)" data-theme="green" class="green-theme">2</a></li>
					<li><a href="javascript:void(0)" data-theme="yellow" class="yellow-theme">3</a></li>
					<li><a href="javascript:void(0)" data-theme="red" class="red-theme">4</a></li>
					<li><a href="javascript:void(0)" data-theme="purple" class="purple-theme">5</a></li>
					<li><a href="javascript:void(0)" data-theme="black" class="black-theme">6</a></li>
					<li class="db"><b>With Dark sidebar</b></li>
					<li><a href="javascript:void(0)" data-theme="default-dark" class="default-dark-theme">7</a></li>
					<li><a href="javascript:void(0)" data-theme="green-dark" class="green-dark-theme">8</a></li>
					<li><a href="javascript:void(0)" data-theme="yellow-dark" class="yellow-dark-theme">9</a></li>
					<li><a href="javascript:void(0)" data-theme="red-dark" class="red-dark-theme">10</a></li>
					<li><a href="javascript:void(0)" data-theme="purple-dark" class="purple-dark-theme">11</a></li>
					<li><a href="javascript:void(0)" data-theme="black-dark" class="black-dark-theme">12</a></li>
				</ul>
				<ul class="m-t-20 chatonline">
					<li><b>Chat option</b></li>
					<li>
						<a href="javascript:void(0)"><img src="/images/users/1.jpg" alt="user-img" class="img-circle"> <span>Varun Dhavan <small class="text-success">online</small></span></a>
					</li>
					<li>
						<a href="javascript:void(0)"><img src="/images/users/2.jpg" alt="user-img" class="img-circle"> <span>Genelia Deshmukh <small class="text-warning">Away</small></span></a>
					</li>
					<li>
						<a href="javascript:void(0)"><img src="/images/users/3.jpg" alt="user-img" class="img-circle"> <span>Ritesh Deshmukh <small class="text-danger">Busy</small></span></a>
					</li>
					<li>
						<a href="javascript:void(0)"><img src="/images/users/4.jpg" alt="user-img" class="img-circle"> <span>Arijit Sinh <small class="text-muted">Offline</small></span></a>
					</li>
					<li>
						<a href="javascript:void(0)"><img src="/images/users/5.jpg" alt="user-img" class="img-circle"> <span>Govinda Star <small class="text-success">online</small></span></a>
					</li>
					<li>
						<a href="javascript:void(0)"><img src="/images/users/6.jpg" alt="user-img" class="img-circle"> <span>John Abraham<small class="text-success">online</small></span></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- ===== Right-Sidebar-End ===== -->
</template>

<script>
export default {
	name: 'RightSidebar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
