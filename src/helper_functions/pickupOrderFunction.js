//Disply Ready for Pickup Count in Header
const countPickupOrders = (data, orderStatusMap) => {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        const orderId = data[i].orderId;

        if (orderStatusMap[orderId] === 2) {
            ++count;
        }
    }
    return count;
};

export default countPickupOrders;
