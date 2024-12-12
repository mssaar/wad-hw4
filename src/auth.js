export default {
    user: { authenticated: false },
    authenticated: async function() {
        await fetch("http://localhost:3000/auth/authenticate", {
                //console.log('in auth.js');
                credentials: 'include', //  Don't forget to specify this if you need cookies
            })
            .then((response) => response.json())
            .then((data) => {
                this.user.authenticated = data.authenticated;
                console.log("In auth.js, line 11", data);
            })
            .catch((e) => {
                console.log("In auth.js, line 14",e);
                console.log("error logout");
            });
        return this.user.authenticated;
    }

}