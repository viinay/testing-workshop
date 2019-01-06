let car35 = new Car(specifications)

let no_of_wheels = car35.wheels;
let color = car35.color;

car35.modify(newspecifications,function(error,done){
    if(error){
        //handle error
    }else{
        //do something else and
        done()
    }
});