function getnumber(base){
    for (i=1; i<=base; i++){
    	document.write("<br>");
    	var cos=i;
        if(i%3==0){
        	document.write(" Fizz ");	
        } 
        if(i%5==0){
        	document.write(" Buzz");
        	
        }else{
            document.write(i);
        }
        
    }
}