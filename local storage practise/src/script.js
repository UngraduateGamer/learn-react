console.log("script Working")

// set the data of the local Storage
localStorage.setItem("name","Rahul"); 

// get the item of the localStorage
const data = localStorage.getItem('name');
console.log(data)

// remove the item of the localStorage
localStorage.removeItem("name");

// pass object to the localStorage
    const obj = {
        name:"Rahul",
        id:"2226200",
        role:"Graphics Designer"
    }

    //convert the object to string and then send data to local Storage
    const stringObj = JSON.stringify(obj);
    localStorage.setItem('users',stringObj);

// retreive the object (String) of the localStroge 
    // parse the data to the json 
    const result = JSON.parse(localStorage.getItem('users'));
    console.log(result)

// clear all the data of local storage
// localStorage.clear();