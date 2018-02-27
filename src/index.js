module.exports = function getZerosCount(number, base) {
var n=2;var d=base;var i=0; var m=[];
while ((n<=base)&(n<=d)){

		if (base%n==0)
			{

			m[i]=n;
			i++;
			base=Math.round(base/n);
			} 
				else
			{
			n++;	
		}
}
	var sum=0;
	for (var i=1;i<27;i++)
		{	
			sum+=Math.floor(number/Math.pow(m[m.length-1],i));
		}
sum=Math.floor(sum/(m.lastIndexOf(m[m.length-1])-m.indexOf(m[m.length-1])+1));
return sum;
}
