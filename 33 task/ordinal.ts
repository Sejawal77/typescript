let list:string [] = ['asim','muneer','wali','mukhtiar','ahmed','khan','zain','mehmood','bilawal','rehman'
]

let ordinal:string[] = ["1st","2nd","3rd"];

for(let i = 0;i<list.length;i++){

    if(i<3){
for(let j=0;j<3;j++){
    console.log(`at ${ordinal[j]} is ${list[i]}`);
    
}

    }

    else {
        console.log(`at ${i}th is ${list[i]}`);
        
    }
}
