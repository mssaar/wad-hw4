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
        path: "/apost/:id",
        name: "APost",
        component: APost,
    },
    {
        path: "/addpost",
        name: "AddPost",
        component: AddPost,
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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



export default router