const object1 = {
  name: 'henir birto',
  age: 22,
  education: 'self-taught',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'henirq',
    lat: 'birto',
  },
  grades: [2,3,5,3],
  department: 'Stanford University',
}

console.log(object1.name)

const fieldName = 'age'

console.log(object1[fieldName])

console.log(object1['age'])
