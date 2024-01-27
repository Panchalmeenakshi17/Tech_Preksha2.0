const express = require('express');
const router = express.Router();
const Team = require('../models/teamModel');

router.post('/register',(req,res) => {
    const {tname,pname,tlname,tlemail,tlnumber,tlrole,tlcollege,tlrollno,tlsemester,
        m2name,m2email,m2number,m2role,m2college,m2rollno,m2semester,
        m3name,m3email,m3number,m3role,m3college,m3rollno,m3semester,
        m4name,m4email,m4number,m4role,m4college,m4rollno,m4semester,password} = req.body;
    const newTeam = new Team({tname,pname,tlname,tlemail,tlnumber,tlrole,tlcollege,tlrollno,tlsemester,
        m2name,m2email,m2number,m2role,m2college,m2rollno,m2semester,
        m3name,m3email,m3number,m3role,m3college,m3rollno,m3semester,
        m4name,m4email,m4number,m4role,m4college,m4rollno,m4semester,password});
    try {
       newTeam.save();
       res.status(200).json({
           success : true,
           message : 'Register Success'
       });
    } catch (error) {
       res.status(400).json({
            message : error
       });
    }
});

router.post('/login', async (req,res) => {
    const {tname,password} = req.body;
    try {
        const team = await Team.find({tname,password});
        if(team.length > 0){
           const currentTeam = {
             tname : team[0].tname,
             pname : team[0].pname,

             tlname : team[0].tlname,
             tlemail : team[0].tlemail,
             tlnumber : team[0].tlnumber,
             tlrole : team[0].tlrole,
             tlcollege : team[0].tlcollege,
             tlrollno : team[0].tlrollno,
             tlsemester : team[0].tlsemester,

             m2name : team[0].m2name,
             m2email : team[0].m2email,
             m2number : team[0].m2number,
             m2role : team[0].m2role,
             m2college : team[0].m2college,
             m2rollno : team[0].m2rollno,
             m2semester : team[0].m2semester,

             m3name : team[0].m3name,
             m3email : team[0].m3email,
             m3number : team[0].m3number,
             m3role : team[0].m3role,
             m3college : team[0].m3college,
             m3rollno : team[0].m3rollno,
             m3semester : team[0].m3semester,

             m4name : team[0].m4name,
             m4email : team[0].m4email,
             m4number : team[0].m4number,
             m4role : team[0].m4role,
             m4college : team[0].m4college,
             m4rollno : team[0].m4rollno,
             m4semester : team[0].m4semester,

             _id : team[0]._id
           }
           res.status(200).send(currentTeam);
        }else{
          res.status(400).json({
             message : 'Login Failed'
          })
        }
    } catch (error) {
       res.status(404).json({
          message : 'Something Went Wrong'
       })
    }
 });

module.exports = router;