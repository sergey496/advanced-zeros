/* module.exports = function getZerosCount(number, base) {
	let n=2;
	let d=base;
	let i=0;
	let arrayTmp=[];
	while ((n<=base)&(n<=d)){
		if (base%n==0){
			arrayTmp[i]=n;
			i++;
			base=Math.round(base/n);
		}else{
			n++;	
		}
	}
	let sum=0;
	for (let i=1;i<27;i++){	
		sum+=Math.floor(number/Math.pow(arrayTmp[arrayTmp.length-1],i));
	}
	sum=Math.floor(sum/(arrayTmp.lastIndexOf(arrayTmp[arrayTmp.length-1])-arrayTmp.indexOf(arrayTmp[arrayTmp.length-1])+1));
	return sum;
}
 */
 
 module.exports = function getZerosCount(number, base) {
	let n=2;
	let i=0;
	let primeArray=[];
	let exponentArray=[];
	while (base!=1){
		if (base%n==0){
			base/=n;
			primeArray[i]=n;
			if (isNaN(exponentArray[primeArray.length-1])){
				exponentArray[primeArray.length-1]=0;
			}
			exponentArray[primeArray.length-1]++;	
		}else{
			n++;
			if (primeArray.length==(i+1)){
				i++;
			}
		}
	}
	let sum=[];
	for (let i=0;i<primeArray.length;i++){
		let k=1;
		sum[i]=0;
		while (k<=number){
			k*=primeArray[i];
			sum[i]+=Math.floor(number/k);
		}
	}
	let result=sum[0]/exponentArray[0];
	for (let i=0;i<exponentArray.length;i++){
		if (Math.floor(sum[i]/exponentArray[i])<result){
			result=Math.floor(sum[i] / exponentArray[i]);
		}
	}
    return result;
}