test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 4];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
});

test('should take course chipper 160', () => {
    const courses = [
        {title: 'CSS', prise: 110},
        {title: 'JS', prise: 200},
        {title: 'REACT', prise: 150},
    ]

    const chipCourses = courses.filter(course => course.prise < 160);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe('CSS');
    expect(chipCourses[1].title).toBe('REACT');
})

test('get only completed task', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ]

    const completedTasks = tasks.filter(t => !t.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(1);
    expect(completedTasks[1].id).toBe(3);
})
