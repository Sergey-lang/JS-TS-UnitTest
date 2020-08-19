import {mult, splitIntoWorlds, sum} from './01';

test('sum should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;
    //action
    const result1 = sum(a, b);
    const result2 = sum(b, c);
    //expect
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})
test('mult should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;
    //action
    const result1 = mult(a, b);
    const result2 = mult(b, c);
    //expect
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})
test('split sentence', () => {
    //data
    const a = 'hello my name';
    const b = 'you like   some animals';
    //action
    const result1 = splitIntoWorlds(a);
    const result2 = splitIntoWorlds(b);
    //expect
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result2[1]).toBe('my')
    expect(result2[2]).toBe('name')

    expect(result2.length).toBe(4)
    expect(result1[0]).toBe('you')
    expect(result2[1]).toBe('like')
    expect(result2[2]).toBe('some')
    expect(result2[2]).toBe('animals')

})