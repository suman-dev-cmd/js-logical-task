//Find out the ages from the below object? They can have nested level of ages in them. Also do not use any loop.
const next = {
    ages: [1, 2, 3],
    next: {
        ages: [4, 5, 6],
        next: {
            ages: [7, 8, 9]
        }
    }
}

function agesList({ ages,next }) {
    return [ages, ...(next ? agesList(next) : [])]
}

console.log(agesList(next));