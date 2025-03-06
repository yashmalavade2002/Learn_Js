let num = 10;
try{
    
// add();  // reference
// if(true {   // Syntax Error
          
// }
num.toUpperCase();

}catch(error){
    console.log();
    if(error instanceof ReferenceError ){
        console.log(ReferenceError);
        
    }
    if(error instanceof SyntaxError ){
        console.log(SyntaxError);
        
    }
    if(error instanceof TypeError ){
        console.log(TypeError);
        
    }
}