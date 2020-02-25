 const Skills = require('../models/skills');
 //  by convention Models are always capitalized
 
 module.exports = {
   index,
   show,
   new: newSkill,
   edit,
   create,
   delete: deleteSkill,
   update
 };

function edit(req,res){
  res.render('skills/edit', {
    skill: Skills.getOne(req.params.id),
    idx: req.params.id
  });
}

function update(req, res){
  req.body.done = !!req.body.done;
  Skills.update(req.body, req.params.id);
  res.redirect(`/skills/${req.params.id}`)
}


 function deleteSkill(req,res){
   console.log("WE ARE HERE!!!!")
   Skills.deleteOne(req.params.id);
   res.redirect('/skills');
 }

 function create(req, res){
     console.log("HELLO")
     req.body.done = false;
     Skills.create(req.body);
     res.redirect('skills')
 }

 function newSkill(req,res){
   res.render('skills/new');
 }


 function index(req, res) {
   res.render('skills/index', {  // views/todos/index.ejs
     skills: Skills.getAll()
   });
 }

 function show(req, res) {
//     //req.params.whateverTheParamIs, 
// 	// is how we access that variable
// 	// param defined in the router 
// 	// and looks like this router.get('/:name', todosCtrl.show);
   res.render('skills/show', {  //views/todos/show.ejs
     skill: Skills.getOne(req.params.id),
     skillsNum: parseInt(req.params.id) + 1
   });
 }

