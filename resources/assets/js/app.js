require('./bootstrap');

Vue.component('example', require('./components/Example.vue'));
Vue.component('todo', require('./components/Todo.vue'));

const app = new Vue({
    el: '#app'
});
