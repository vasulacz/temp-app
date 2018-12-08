<template>
	<div>
		<div class="dashboard">
			<h1>{{title}}</h1>
<!-- 			<div v-for='photo in images'>
				<p>{{loadPhoto(photo)}}</p>
			</div> -->
		</div>
		<gallery :images="images" :index="index" @close="index = null"></gallery>
	    <div
	      class="image"
	      v-for="(image, imageIndex) in images"
	      :key="imageIndex"
	      @click="index = imageIndex"
	      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
	    ></div>
	</div>
  </div>
</template>

<script>
	import VueGallery from 'vue-gallery'
	import logo from "/media/vaclav/Data/Pictures/tisk/IMG_20171206_190919.jpg"
	import photoList from "./photo_list.json"

	export default {
		name: 'test',
		components: {
  		},
		props: {
		},
		data() {
			return {
				title: 'Photo',
				images: [
				  logo,
		          'https://dummyimage.com/800/ffffff/000000',
		          'https://dummyimage.com/1600/ffffff/000000',
		          'https://dummyimage.com/1280/000000/ffffff',
		          'https://dummyimage.com/400/000000/ffffff',
		        ],
		        // images: photoList,
        		index: null,
			}
		},
		methods: {
			loadPhoto: function(photoPath) {
				console.log(photoPath);
				import(photoPath)
			}
		},
		computed: {
			
		},
		components: {
			'gallery': VueGallery
		},
	}
</script>

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style> 