
//Server Side


module.exports.home=function(req,res){

    //request 
    console.log(req.cookies);
    //response
    res.cookie('vishnu',18);

    // return res.end('<h1> Express is for Codial</h1>')
    return res.render('home',{
        title:'Vishnu'
    });
}
