<template>
	<div>
		<div class="dashboard">
			<h1>{{title}}</h1>
		</div>
		<!-- <div>
            <div class="layoutJSON">
                Displayed as <code>[x, y, w, h]</code>:
                <div class="columns">
                    <div class="layoutItem" v-for="item in layout">
                        <b>{{item.i}}</b>: [{{item.x}}, {{item.y}}, {{item.w}}, {{item.h}}]
                    </div>
                </div>
            </div>
        </div> -->
		<div id="content">
			<input type="checkbox" class="toggle" v-model="gridProperties.draggable" v-on:click="print(gridProperties.draggable)"/> Draggable
			<input type="checkbox" class="toggle" v-model="gridProperties.resizable" v-on:click="print(gridProperties.resizable)"/> Resizable
			<input type="checkbox" class="toggle" v-model="gridProperties.responsive" v-on:click="print(gridProperties.responsive)"/> Responsive
			<br />
			<grid-layout :layout.sync="layout"
                         :col-num="12"
                         :row-height="30"
                         :is-draggable="gridProperties.draggable"
                         :is-resizable="gridProperties.resizable"
                         :vertical-compact="true"
                         :use-css-transforms="true"
                         :responsive="gridProperties.responsive"
            >
				<grid-item v-for="item in layout"
                           :x="item.x"
                           :y="item.y"
                           :w="item.w"
                           :h="item.h"
                           :i="item.i"
                        >
                    <span class="text">
                    	<SensorInfo v-bind:sensorIndex="item.i"></SensorInfo>
                	</span>
                </grid-item>
			</grid-layout>
		</div>
	</div>
</template>

<script>
	import SensorInfo from './sensor_info'

	var testLayout = [
    {"x":0,"y":0,"w":3,"h":4,"i":"0"},
    {"x":3,"y":0,"w":3,"h":4,"i":"1"},
    {"x":0,"y":4,"w":3,"h":4,"i":"2"},
    {"x":3,"y":4,"w":3,"h":4,"i":"3"},
	];
	export default {
		name: 'test',
		components: {
    		SensorInfo,
  		},
		props: {
		},
		data() {
			return {
				title: 'Dashboard',
				layout: testLayout,
				gridProperties: {
					draggable: true,
					resizable: true,
					responsive: true,
					width: 2,
					height: 4,
				},

			}
		},
		methods: {
			print: function(msg) {
				console.log(msg);
			}
		},
		computed: {
		}
	}
</script>

<style scoped>
	
</style>