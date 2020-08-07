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
            const id = getNextId();
            const imageId = id + 1;
            return {
                id,
                path: `https://picsum.photos/id/${imageId}/200/200`
            }
        });
}

const mockApi = (count) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(generateImages(count));
        }, 500);
    });
};

export default mockApi;
