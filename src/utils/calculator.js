export const calculateTotal = (price, packets) => {
    return Number(price) * Number(packets);
}

export const calculateBalance = (total, paid) => {
    return Number(total) - Number(paid);
}