

export class CRUD{
    #buenas = null;
    #data = null;
  
	constructor(buenas){
 		this.#setTableName(buenas);
        this.#setData();
    } 
    
	#setTableName(buenas){
		this.#tableNameValidate(buenas);
        this.#buenas = buenas;
	}
    #setData(){
        let dataRepository = this.#get(this.#buenas)
        this.#data = dataRepository === null ? [] : dataRepository
           
    }
    
    #tableNameValidate(buenas){
		if(buenas== undefined) throw new Error("Name of table is required");
	}


    create(data){
        this.#data.push(data);
        this.#save();
        return this.#data.length;
    }


    read(id){
        this.#checkThatElementExistsWithId(id);
        return this.#data[id];
    }
    
    readALL(){
    return this.#data;
    }

    update(id, data){
        this.#data[id] = data;
        this.#checkThatElementExistsWithId(id);
        this.#save();
        return true;
    }




    #save(){

    let dataToSave = JSON.stringify(this.#data);
    sessionStorage.setItem(this.#buenas, dataToSave);    
    } 

    #get(key){
    let data = sessionStorage.getItem(key);
    return JSON.parse(data);
    }

    #existElementWithId(id){

    return this.#data[id] === undefined ? false : true;
    }

    #checkThatElementExistsWithId(id){
        if (!this.#existElementWithId(id))
            throw new Error('esteh element does no existe pai ')
    }

}
