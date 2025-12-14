const resaloveAPI  = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com//posts')
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
};

const asyncAPICall = async () => {
    console.log('calling API');
    try {
        const result = await resaloveAPI()
        console.log(result);
    } catch (error) {
        console.log('Error:', error);
    }
    };


asyncAPICall();

