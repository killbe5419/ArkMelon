const a = {
    a: 1,
    b: 2,
    c: 3
}

const b =  new Object(a);
delete b.a;

const str = "eventPool";
console.log(str.split("Pool")[0]);