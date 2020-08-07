const makeIdGenerator = () => {
    let counter = 0;
    return () => {
        return counter++;
    };
};
const getNextId = makeIdGenerator();

const generateImages = (count) => {
    return new Array(count)
        .fill(null)
        .map(() => {
            return {
                id: getNextId(),
                path: `https://picsum.photos/id/1003/200/200`
            }
        });
}

const mockApi = (count) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(generateImages(count));
        }, 2000);
    });
};

export default mockApi;
