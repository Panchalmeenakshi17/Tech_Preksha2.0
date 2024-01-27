const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    tname : {
        type : String,
        required : [true,'Team Name Is Required']
    },
    pname : {
        type : String,
        required : [true,'Project Name Is Required']
    },

    tlname : {
        type : String,
        required : [true,'Team Leader Name Is Required']
    },
    tlemail : {
        type : String,
        required : [true,'Team Leader Email Is Required']
    },
    tlnumber : {
        type : Number,
        required : [true,'Team Leader Phone Number Is Required']
    },
    tlrole : {
        type : String,
        required : [true,'Team Leader Role Is Required']
    },
    tlcollege : {
        type : String,
        required : [true,'Team Leader College Name Is Required']
    },
    tlrollno : {
        type : Number,
        required : [true,'Team Leader Roll Number Is Required']
    },
    tlsemester: {
        type : Number,
        required : [true,'Team Leader Semester Is Required']
    },

    m2name : {
        type : String,
        required : [true,'2nd Team Member Name Is Required']
    },
    m2email : {
        type : String,
        required : [true,'2nd Team Member Email Is Required']
    },
    m2number : {
        type : Number,
        required : [true,'2nd Team Member Phone Number Is Required']
    },
    m2role : {
        type : String,
        required : [true,'2nd Team Member Role Is Required']
    },
    m2college : {
        type : String,
        required : [true,'2nd Team Member College Name Is Required']
    },
    m2rollno : {
        type : Number,
        required : [true,'2nd Team Member Roll Number Is Required']
    },
    m2semester: {
        type : Number,
        required : [true,'2nd Team Member Semester Is Required']
    },

    m3name : {
        type : String,
        required : [true,'3rd Team Member Name Is Required']
    },
    m3email : {
        type : String,
        required : [true,'3rd Team Member Email Is Required']
    },
    m3number : {
        type : Number,
        required : [true,'3rd Team Member Phone Number Is Required']
    },
    m3role : {
        type : String,
        required : [true,'3rd Team Member Role Is Required']
    },
    m3college : {
        type : String,
        required : [true,'3rd Team Member College Name Is Required']
    },
    m3rollno : {
        type : Number,
        required : [true,'3rd Team Member Roll Number Is Required']
    },
    m3semester: {
        type : Number,
        required : [true,'3rd Team Member Semester Is Required']
    },

    m4name : {
        type : String,
        required : [true,'4th Team Member Name Is Required']
    },
    m4email : {
        type : String,
        required : [true,'4th Team Member Email Is Required']
    },
    m4number : {
        type : Number,
        required : [true,'4th Team Member Phone Number Is Required']
    },
    m4role : {
        type : String,
        required : [true,'4th Team Member Role Is Required']
    },
    m4college : {
        type : String,
        required : [true,'4th Team Member College Name Is Required']
    },
    m4rollno : {
        type : Number,
        required : [true,'4th Team Member Roll Number Is Required']
    },
    m4semester: {
        type : Number,
        required : [true,'4th Team Member Semester Is Required']
    },

    password : {
        type : String,
        required : [true,'Password Is Required']
    }
},{timeStamps : true})

module.exports = mongoose.model('Team',teamSchema);