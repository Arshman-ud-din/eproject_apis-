

const mongoose = require("mongoose");






async function connectionDB(){
    try{
        const connection = await mongoose.connect(process.env.DB);
        if(connection) console.log(`MONGODB ATLAS CONNECTED WITH SERVER ${process.env.PORT}`)
    }catch(error){
        console.log(error)
    }


}


module.exports = {connectionDB}




