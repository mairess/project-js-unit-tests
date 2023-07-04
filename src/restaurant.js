/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (object) => { 
    const consumptionArray = [];
    const fetchMenu = () => object;
    const order = (string) => {
        for (const key of Object.keys(object)) {
            if (string in object[key]) {
                consumptionArray.push(string);
                return consumptionArray;
            }
        }
        throw new Error('Item indisponível');
    };
    const pay = () => {
        let total = 0;
        const itemsObj = Object.values(object)
        .reduce((acumulator, item) => ({ ...acumulator, ...item }), {});

        for (const item of consumptionArray) {
                if (item in itemsObj) {
                    total += itemsObj[item];
                }
        }
        const totalFixed = (total + (total * 0.1)).toFixed(2);
        return Number(totalFixed);
    };
    const obj = { fetchMenu, consumption: consumptionArray, order, pay };
    return obj;
};

module.exports = { createMenu };
