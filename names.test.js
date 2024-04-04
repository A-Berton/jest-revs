const names = require('./names');

test('adding a name and render array',() => {
    let nameList = ["Emily", "Rose"];
    expect(names(nameList)).toEqual(["Emily", "Rose", "John"]);
});

//testing mock function again
test('adding a name and render array',() => {
    jest.fn(names);
    const result = names(["Rose", "Bill"]);
    expect(result).toEqual(["Rose", "Bill", "John"]);
    expect(names).toHaveBeenCalled;
})