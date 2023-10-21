function uniqueCharactersCheck(name){
    // 1 srt create kr  deta hn 
    const original=name;
    const s=new Set();
    for(let i of name){
        s.add(i);

    }
    // const new_one="";
    // now lets convert the set into arra \
    const arr= Array.from(s);
    // for(let i of arr){
    //     console.log(i);
    // }
    const str=arr.join('');
    // console.log(str)
    // console.log(original)
    if(original==str){
        console.log("The input String contains unique characters");
    }
    else{
        console.log("The input string contains duplicate");
    }


}
uniqueCharactersCheck("mithun")
uniqueCharactersCheck("anurag");

