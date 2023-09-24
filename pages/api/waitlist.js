
const { log } = console;

export default function waitlist(req, res){
    if(req.method === "POST"){
        const reqPayLoad = req?.body;
        log("pay load", reqPayLoad);
     return  res.json({msg:"package recieved"});
    }
    return res.status(500).json({
        message:"this needs to be a POST request"
    })

}