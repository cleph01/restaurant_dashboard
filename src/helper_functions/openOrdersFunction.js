//Disply OpenOrders Count in OpenOrders Component
const countOpenOrders = (data, orderStatusMap) => {
    let count = data.length;

    for (let i = 0; i < count; i++) {
        const orderId = data[i].orderId;

        if (orderStatusMap[orderId]) {
            --count;
        }
    }
    return count;
};

export default countOpenOrders;
