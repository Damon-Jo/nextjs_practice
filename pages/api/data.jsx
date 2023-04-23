export default function handler(req, res){
   let a = new Date()
   return res.status(200).json(a)
}