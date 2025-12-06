const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.render(`users/list`, {users: users});
});
router.get('/new', (req,res)=>{
    res.render('users/new', {firstName: "", lastName: "" });
});
router.post('/',(req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const gender = req.body.gender;

    const isValid = firstName !=="" && lastName!=="";
    if(isValid){

    console.log(`Adding User: ${firstName}`);
    users.push({
        firstName:firstName,
        lastName: lastName,
        gender: gender,
        age: age,
    });
    console.log(`New Set of Users: ${users}`);
    res.send("User Created!");
    }
    else{
        console.log("Error adding user!");
        res.render("users/new", {firstName: firstName, lastName: lastName});
    }
});
// router.get('/:id', (req,res)=>{
//     res.send(`Getting User data: ${req.params.id}`);
// });

router.route("/:id").get((req,res)=>{
    res.send(`Getting User Data: ${req.params.id}`);
}).delete((req,res)=>{
    res.send(`Deleting User with id: ${req.params.id}`);
}).put((req,res)=>{
    res.send(`Updating user with id: ${req.params.id}`);
});
const users = [{name: "Gerorge"}, {name: "Justyna"}];






router.param("id", (req,res,next,id)=>{
    console.log(`Accessing user #${id}`);
    next();
});
module.exports = router;