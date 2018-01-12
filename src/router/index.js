import Vue from 'vue'
import Router from 'vue-router'

// es6 标准 不会路由懒加载
// import Index from '@/views/index'
// import Foo from '@/components/foo/index'
// import Bar from '@/components/bar/index'

// Webpack > 2.4
// const Index = () => import('@/views/index')
// const Foo = () => import('@/components/foo/index')
// const Bar = () => import('@/components/bar/index')

// AMD
// const Index = resolve => require(['../views/index.vue'], resolve)
// const Foo = resolve => require(['../components/foo/index.vue'], resolve)
// const Bar = resolve => require(['../components/bar/index.vue'], resolve)

// Webpack 的特殊语法 用来代码分块
const Index = r => require.ensure([], () => r(require('../views/index.vue')), 'index')
const Foo = r => require.ensure([], () => r(require('../components/foo/index.vue')), 'foo')
const Bar = r => require.ensure([], () => r(require('../components/bar/index.vue')), 'bar')

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
