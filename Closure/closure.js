// Closures
// function Kishan(){
//     var name = "kishan"
//     function dispName(){
//         console.log(name);
        
//     }
//     dispName();
// }
// Kishan();

function Kishan(){
    var name = "kishan"
    function dispName(){
        console.log(name);
        
    }
    name = "Learn coding"
    return dispName
}
const name = Kishan()
name()
