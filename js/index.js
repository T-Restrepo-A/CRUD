import { CRUD } from "./CRUD.JS";   
function app(){

    let crud = new CRUD("FOR EXAMPLE ");
    crud.create([1 , 2 , 3]);
    crud.create({ message: "buenas que pasa chavales "});

    let crud2 = new CRUD ("FOR EXAMPLE ");
    console.log(crud2.readALL());

    crud.update(5, [8,4,8]);
    crud.delete(9);
}


app();      
