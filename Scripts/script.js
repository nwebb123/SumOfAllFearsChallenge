function SOAF() {

    
    let K = parseInt(document.getElementById("inpK").value);    //declare variable K; link value of K to inpK element.
    let givenArray = [10, 15, 3, 7];       //startIndex = 0, endIndex = 3
                    // 0  1   2  3
    let trueOrFalseResult = false;      //boolean value, equates to true or false
    

    for (let i = 0; i < givenArray.length - 1; i++) {
        for (let y = (i + 1); y < givenArray.length; y++) {     //Nested loop; since we added 1 to the index, we have to subtract 1 from the length
            if (K == givenArray[i] + givenArray[y]) {   //If K(17) is the same value as index i + index y, found=true
                trueOrFalseResult = true;   
                //return trueOrFalse;
            }
        }
    }

    document.getElementById("output1").innerHTML = `${trueOrFalseResult.toString()}`;
}