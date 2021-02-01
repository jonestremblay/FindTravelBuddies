currentUser = getUserByUsername("dicaprio"); 
function connect(user){
    connected = true;
    currentUser = getUserByUsername(user);
}

function disconnect(){
    connected = false;
    currentUser = getUserByUsername("dicaprio"); 

}