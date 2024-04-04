import { mockfct } from "./mockfct";

test('mock implementation of a basic function', () => {
    const mock = jest.fn(x => 42 + x);
    expect(mock(1)).toBe(43);
    expect(mock).toHaveBeenCalledWith(1);
});

test('mock implementation of a basic function', () => {
    jest.fn(mockfct);
    const result = mockfct(1,2)
    expect(result).toBe(3);
    expect(mockfct).toHaveBeenCalled;
});

//spy is used to track a function (play) to see if it worked
test('spying on a method of an object',() =>{
    const video = {
        play(){
            return true;
        },
    };

    const spy = jest.spyOn(video, 'play');
    video.play();
    //restore state of the function that have been mocked
    expect(spy).toHaveBeenCalled;
    spy.mockRestore();
})