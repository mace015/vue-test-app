<template>
	<div>
		<ul>
			<li v-for="task in tasks">
				{{ task }}
			</li>
		</ul>

		<input v-model="newTask" />
		<button @click="addTask()">Add task</button>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				tasks: [],
				newTask: ''
			}
		},
		methods: {
			addTask() {
				this.tasks.push(this.newTask);
				this.newTask = '';
			}
		}
	}
</script>