import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/HelloWorld'
const Index = r => require.ensure([], () => r(require('../views/index.vue')), 'index')
// const Foo = resolve => require(['../components/foo/index.vue'], resolve)
// const Bar = resolve => require(['../components/bar/index.vue'], resolve)
// import Foo from '@/components/foo/index'
// import Bar from '@/components/bar/index'

const Foo = r => require.ensure([], () => r(require('../components/foo/index.vue')), 'group-foo')
const Bar = r => require.ensure([], () => r(require('../components/bar/index.vue')), 'group')

Vue.use(Router)

export default new Router({
  routes: [
	{
		path: '/',
		redirect: '/index'
	},
    {
    	path: '/index',
      	name: 'index',
		component: Index,
		children: [
			{
				path: 'foo',
				name: 'index/foo',
				component: Foo
			},
			{
				path: 'bar',
				name: 'index/bar',
				component: Bar
			}
		]
    },
    {
		path: '/foo',
		name: 'foo',
		component: Foo
	},
	{
		path: '/bar',
		name: 'bar',
		component: Bar
	}
  ]
})
