import { fetchPromise } from "./promisefct";

test('the data is : well done', () =>{
    expect(fetchPromise(true)).resolves.toBe('well done');
});

test('fetch with an error', () =>{
    expect(fetchPromise(false)).rejects.toThrow('error');
});

test('the data is : well done', async () =>{
    const data = await fetchPromise(true);
    expect(data).toBe('well done');
})

test('fetch with an error', async () =>{
    await expect(fetchPromise(false)).rejects.toThrow('error');
});

