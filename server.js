var express = require("express")
var app = express()
app.listen(3000,function(){
    console.log('server running on port 3000')
})
var books = [
    {
        id:1,
        name:'book one',
        author:'superman',
        price:'Infinity',
        sold:false
    },{
        id:2,
        name:'book two',
        author:'batman',
        price:'-Infinity',
        sold:true
    }
]

app.get('/books',function(req,res){
    res.json(books)
})

app.get('/book/:id',function(req,res){
    let id = parseInt(req.params.id);
    let thisBook = books.filter(function(book){
        return book.id == id;
    })
    if(thisBook.length){
        res.json({
            status:"success",
            results:thisBook[0]
        })
    }else{
        res.json({
            status:"error",
            message:"book not found"
        })
    }
})

app.delete('/book/:id',function(req,res){
    let id = parseInt(req.params.id);
    books = books.filter(function(book){
        return book.id !=id;
    })
    res.send('done')
})

app.get('/text/:textmsg',function(req,res){
    let textmsg = req.params.textmsg;
    res.send(textmsg)
})
