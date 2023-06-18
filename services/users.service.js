

// 2. Named Export

module.exports = {
    //1. P:V
    name:"users",

    actions:{},

    methods:{},

    events:{
        "user.purchased":{
            group:"user1",
            handler(ctx){
                console.log("user.purchased")
            }
        }
    },
    //2. MEthod
} //JS Object