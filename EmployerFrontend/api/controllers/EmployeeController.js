/**
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  results:function(req,res){
    res.view('pages/EmployeeSignIn',{empID:req.query.empID});
 },
 authenticate:function(req,res){
   console.log(req.query.authenticated)
   if(req.query.authenticated==='true')
   {
    res.view('pages/MortgageInfoSupply',{empID:req.query.empID});
   }
   else{
     res.view('pages/mismatch');
     //res.end("Password Mismatch")
   }
},
// sendInformation:function(req,res){
//   var empID=req.body.empID;

//   // res.redirect("http://localhost:1338/employer/supplyMBRinfo?empID"+empID)
//   res.view('pages/EmployeeSignIn',{empID:req.query.empID});
// }
};

