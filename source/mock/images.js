const makeIdGenerator = () => {
    let counter = 0;
    return () => {
        return counter++;
    };
};
const getNextId = makeIdGenerator();

export const generateImages = () => {
    return new Array(40)
        .fill(null)
        .map(() => {
            return {
                id: getNextId(),
                path: `https://picsum.photos/id/1003/200/200`
            }
        });
}
