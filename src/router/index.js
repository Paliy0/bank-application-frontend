import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/UserLoginComponent.vue'
const userId = localStorage.getItem('id')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeView
    },
    { path: '/userLogin', name: 'login', component: Login },
    {
      path: '/employeeLogin',
      name: 'employeeLogin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EmployeeLoginView.vue')
    },
    {
      path: `/dashboard`,
      name: 'userHome',
      component: () => import('../views/UserHomeView.vue')
    },
    {
      path: `/atm`,
      name: 'userATM',
      component: () => import('../views/UserATMView.vue')
    },
    {
      path: `/user/:userId/transactions`,
      name: 'userTransactions',
      component: () => import('../views/UserTransactionsView.vue')
    },
    {
      path: `/user/${userId}/profile`,
      name: 'userProfile',
      component: () => import('../views/UserProfileView.vue')
    },
    {
      path: '/users',
      name: 'getAllUsers',
      component: () => import('../views/GetUsersView.vue')
    },
    {
      path: '/accounts',
      name: 'getAccounts',
      component: () => import('../views/accounts/GetAccountsView.vue')
    },
    {
      path: '/accounts/getIbanByCustomerName',
      name: 'searchAccounts',
      component: () => import('../views/accounts/FindAccountsView.vue'),
      props: (route) => {
        {
          firstName: route.query.firstName
        }
      }
    },
    {
      path: '/accountsCreate',
      name: 'createAccount',
      component: () => import('../views/accounts/PostAccountView.vue')
    },
    {
      path: '/accounts/accountStatus',
      name: 'updateAccount',
      component: () => import('../views/accounts/PutAccountView.vue')
    },
    {
      path: '/accounts/absoluteLimit',
      name: 'updateAbsoluteLimit',
      component: () => import('../views/accounts/PutAccountView.vue')
    },
    {
      path: '/accounts/myAccount',
      name: 'overviewAccount',
      component: () => import('../views/accounts/OverviewAccountsView.vue')
    }
  ]
})

export default router
