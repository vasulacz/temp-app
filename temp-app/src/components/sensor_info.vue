<template>
	<div class="sensor">
		<h3>Sensor Info</h3>
		<p>IoT sensor No.: {{sensorIndex}}</p>
		<p>IoT sensor IP: {{sensorIp}}</p>

	</div>
</template>

<script>

	export default {
		name: 'sensor',
		props: {
			sensorIndex: {
				type: String,
				default: 'unknown value',
			},
			sensorIp: {
				type: String,
				default: 'unknown ip',
			}
		},
		data() {
			return {
			}
		},
		methods: {
		},
		computed: {
		}
	}
</script>

<style scoped>
	.sensor {
    /*font-size: 24px;*/
    text-align: left;
    margin: auto;
    height: 100%;
    width: 100%;
    background-color: #E5E7E9;
    border-radius: 5px 20px;
    border-style: solid;
    border-color: #AEB6BF;
    vertical-align: text-bottom;

    /*padding: -20px; */
	}
	p {
    	margin: 5px 0px 0px 0px;
	}
	h3 {
    	margin: 5px 0px 0px 5px;
	}

</style>