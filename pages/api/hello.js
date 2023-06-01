// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if(req.method === 'POST'){
    const { email } = req.body;
    res.status(200).json({message: 'form submission successfully'})  
  }else{

    res.status(405).json({ error: 'method not allowed' })
  }
}
