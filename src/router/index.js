import { createRouter, createWebHistory } from 'vue-router'
import AllPosts from "../views/AllPosts.vue";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import auth from '@/auth';



const routes = [{
        path: "/",
        name: "AllPosts",
        component: AllPosts,
        // checks if user is autheticated
        // otherwise redirects to login
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                console.log('access not granted');
                next('/login')
            } else {
                console.log('access granted');
                next();
            }
        }
        
    },
    {
        path: '/api/posts/:id',
        name: "APost",
        component: APost,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                console.log('access not granted');
                next('/login')
            } else {
                console.log('access granted');
                next();
            }
        }
    },
    {
        path: "/addpost",
        name: "AddPost",
        component: AddPost,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                console.log('access not granted');
                next('/login')
            } else {
                console.log('access granted');
                next();
            }
        }
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/login",
        name: "LogIn",
        component: LogIn,
    },
    // {
    //     path: "/contacts",
    //     name: "Contacts",
    //     component: Contacts,
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



export default router