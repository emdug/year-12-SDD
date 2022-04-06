$('#btnLogin').click(function(){
    //if statement to check there is input
    if(($('#loginEmail').val()).length > 0 && ($('#loginPassword').val()).length > 0){
        //find user email in database
        var query = {}; // get all records
        var hints = {"$max": 10, "$orderby": {"_id": -1}}; // top ten, sort by creation id in descending order
        db.vclassusers.find(query, hints, function(err, res){
        if (!err){
            var count = 0;
            var found = false; 
            while (res.length > count && found ==false){
                if (res[count].Email == ($('#registerEmail').val())){
                    found = true
                    userEmail = res[count].Email
                    userPassword = res[count].Password
                    console.log("info in database is: ")
                }
            count ++;
            }
            if(found = false){
                console.log("no user in database")
                $('#loginNotComplete').text("*you are not in the database");
            }
        // res is an array of user instances
        }
        });
        //check if password entered matches user password in database
        if(userPassword == ($('#loginPassword').val())){
            $("#login-form").show();
            $("#homePage").show();
        }else{
            console.log("wrong password")
        }
    }else{
        $('#loginNotComplete').text("*Please fill out required information");
    }
})



function linearSearch(arrayToSearch, searchTerm){
    var count = 0;
    var found = false; 
    while (arrayToSearch.length > count && found ==false){
        if (arrayToSearch[count] == searchTerm){
            console.log('we found it in position: ' + count)
            found = true
        }
    count ++;
    }
}