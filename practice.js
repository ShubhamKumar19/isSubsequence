//Write a function that should check whether the characters in the first String appear Somewhere in the Second
//String.without their order changing???(hint-using Multiple pointers)
function subSequence(num1,num2){
    if(num1.length>num2.length)
    return false;
    if(num1===num2)
    return true;
    var i=0,j=0;
     while(i<num1.length && j<num2.length)
     {
         if(num1[i]===num2[j])
         {
             i++;
             j++;
         }
         else
         j++;
     }
     if(i==num1.length)
         return true;
    return false;
  }
  console.log(subSequence('abc','cab'));