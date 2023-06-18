

// 2. Named Export

module.exports = {
    //1. P:V
    name:"mail",



    events:{
        "user.mail":{
            group:"user2",
            handler(ctx){
                console.log("user.mail")
            }
        }
    },

    //2. MEthod
} //JS Object