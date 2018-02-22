module.exports = function getZerosCount(number, base) {
   var n=2;var d=base;var k=[];
while ((n<=base)&(n<=d)){

		if ( base%n==0){
			k=base;
			base=Math.round(base/n);
			
		} else {
			n++;	
		}
}
	var sum=0;
	var kol;
for (var i=1;i<12;i++)
{	
kol=Math.floor(number/Math.pow(k,i));
sum+=kol;
}
 
 
return sum;
}
