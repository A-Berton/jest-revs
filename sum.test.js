import { sum, sum2 } from './sum';

test('2 + 2 = 4', () =>{
    expect(2 + 2).toBe(4);
});

// fonctionne avec null, 0 ou undefined ou false
test('adding nothing', () =>{
    expect(sum(0,0)).toBeFalsy();
})

test('adding 1', () =>{
    expect(sum(1,0)).toBeTruthy();
})

// to work it has to be wrapped in a function
test('throws error when adding nothing', () =>{
    expect(()=>{
        sum2('t', 'r');
    }).toThrow();
})