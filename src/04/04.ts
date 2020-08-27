const ages = [18, 20, 22, 1, 100, 90, 4]

const predicate = (age: number) => {
    return age > 90
}

type CourseType = {
    title: string
    prise: number
}
const courses = [
    {title: 'CSS', prise: 110},
    {title: 'JS', prise: 200},
    {title: 'REACT', prise: 150},
]
const chipPredicate = (course: CourseType) => {
    return course.prise < 160
}

const chipCourses = []

