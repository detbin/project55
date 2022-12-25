function optimista(){
    valor=true
    return valor
}
console.log(optimista())

var Delay=new Promise((resolve)=>{
setTimeout(() => { resolve() }, 5000)
})
Delay.then(()=>console.log('Hola soy una promesa'))

function* Generator(){
    let id=0
    while (id<=20){
    yield id
    id=id+2
    }
}
let gen=Generator()
let j=0
while (j<=10){
    a=gen.next()
    b=a.value
    console.log(b)
    j++
}