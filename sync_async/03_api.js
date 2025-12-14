const resolveAPI = () => {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) {
          reject(new Error('HTTP error'));
        }
        return res.json();
      })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

const asyncAPICall = async () => {
    console.log('calling API');
    try {
        const result = await resolveAPI()
        console.log(result[0].userId);
    } catch (error) {
        console.log('Error:', error);
    }
    };


asyncAPICall();

