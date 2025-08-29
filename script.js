function firstNonRepeatedChar(str) {
 // Write your code here
	if(str.length>0 && str.length<=1000){		
		let freq={};
		for(let char of str){
			freq[char]=(freq[char]||0)+1;
		}
		console.log(freq)
		for(let value in freq){
			if(freq[value]==1)  return value;
		}
		return null;
	
	}else return null;	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
