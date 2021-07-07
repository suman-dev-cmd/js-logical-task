//Sort the students array as per the priority queue
const priorityQueue = [
    { id: 6, priority: 1 },
    { id: 3, priority: 2 },
    { id: 1, priority: 3 },
    { id: 4, priority: 4 }
];
const students = [
    { id: 3, name: 'Abc Def' },
    { id: 1, name: 'Mno Pqr' },
    { id: 4, name: 'Uvw Xyz' },
    { id: 6, name: 'Rst Jlk' }
];


const newA = priorityQueue.map(obj=>{
   return students.filter(val=>val.id == obj.id)
})

console.log(newA);