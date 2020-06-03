//Disply InKitchen Count in InKitchen Component
const countKitchenOrders = (data, orderStatusMap) => {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        const orderId = data[i].orderId;

        if (orderStatusMap[orderId] === 1) {
            ++count;
        }
    }
    return count;
};

export default countKitchenOrders;
