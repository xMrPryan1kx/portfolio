// let company = { // тот же самый объект, сжатый для краткости
//   sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
//   development: {
//     sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
//     internals: [{ name: 'Jack', salary: 1300 }],
//   },
// }
//
// function sumSalaries (department) {
//   if (Array.isArray(department)) {
//     return department.reduce((prev, current)=> prev + current.salary, 0)
//   } else {
//     let sum = 0
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep)
//       console.log(subdep)
//     }
//     return sum
//   }
// }
//
// console.log(sumSalaries(company))

// const sumTo = n => {
//
//   let sum = 0
//   for (let i = 0; i <= n; i++) {
//     sum += i
//   }
//   return sum
// }
// const sumToRecursion = n => {
//   if (n ===1) return  1
//   return n + sumToRecursion(n -1)
// }
// console.log( sumTo(100))
// console.log(sumToRecursion(100))

