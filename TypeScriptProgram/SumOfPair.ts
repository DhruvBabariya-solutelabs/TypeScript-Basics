function sumofPair(arr:number[],sum:number){
    let ans =[];
   for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if((arr[i]+arr[j])==sum){
            let array = [arr[i],arr[j]];
            ans.push(array);
        }
    }
   }
   return ans;
}

let ans = sumofPair([1,2,3,4,5,6,7,8],9);

console.log(ans);