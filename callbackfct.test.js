import { fetchData } from "./callbackfct";

test('the data is : well Done', done => {
    function callback (data) {
        try{
            expect(data).toBe('well done');
            done();
        }
        catch(e){
            done(e);
        }
    }
    fetchData(callback);
});