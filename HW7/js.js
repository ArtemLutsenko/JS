function exludeBy(peopleList, exluded, param){
    let newList = [];   
    
    for(let key1 in peopleList){
        let hasItem = false;
        for(let key2 in exluded){            
            if(peopleList[key1][param]===exluded[key2][param]){
                hasItem = true
            }            
        }
        if(!hasItem){
            newList.push(peopleList[key1]);
        }
    } 

    return newList;
}

