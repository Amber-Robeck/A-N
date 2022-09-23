const helpers = {
    categories: [
        'mens',
        'womens',
        'childrens',
        'shirt',
    ],
    handleChange: (event, funcName) => {
        const {
            target: { value },
        } = event;
        funcName(
            typeof value === 'string' ? value.split(',') : value,
        );
    },
    handleChangedData: (event, funcName, state) => {
        console.log("event", event.target);
        const {
            target: { name, value },
        } = event;
        funcName({
            ...state,
            [name]: value,
        });
    },
    updateData: async (e, state, category, url, method, funcName, message) => {
        e.preventDefault();
        console.log(e.target)
        const data = {
            name: state.name,
            description: state.description,
            category: category,
            originalPrice: state.originalPrice,
            currentPrice: state.currentPrice,
            onSale: state.onSale,
            saleType: state.saleType,
            variations: state.variations,
            // availableSizes: state.availableSizes,
        }
        console.log("data", data)
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        await response.json();
        // console.log('updatedReturn', updatedProduct)
        funcName(data);
        message ? window.alert(message) : window.alert("Updated")
    }

};

export default helpers;