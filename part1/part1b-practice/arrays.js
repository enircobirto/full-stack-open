const t = [1,2,3]

// t.push(3)

const t2 = t.concat(4) 

// console.log(t.length)

// console.log(t[1])

// for (let i=0;i<t2.length;i++){
//   console.log(t2[i]);
// }

t2.forEach(value =>console.log(value))

// MAP

const m1 = t.map(value => 2*value)
console.log(m1)

const m2 = t.map(v => '<h'+v+'>THIS IS AN H'+v+'</h'+v+'>')

console.log(m2)

const y = [1,2,3,4,5]

const [first, second, ...rest] = y

console.log(first, second)
console.log(rest)
