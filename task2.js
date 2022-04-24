function addedarray(target)
{
    var array=[1,2,3,4,5];
    var result=[];
    var store;
for(var i=0;i<=array.length;i++)
{
    console.log(array[i]); 
    if(array[i]<=target)
    {   store=store+array[i];
        result.push(array[i]);
        console.log(result);
        console.log(store);
    }
}
}