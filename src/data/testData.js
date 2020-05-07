export const data = {
    customerInfo: {
        firstName: "Charlie",
        cellPhone: "9143125729",
        address: "123 Main St",
        city: "Port Chester",
        state: "NY",
        zipCode: "10573",
    },
    businessInfo: {
        businessName: "Vinny's Pizza",
    },
    orderData: [
        {
            orderId: 1,
            allergies: ["nuts", "dairy"],
            status: 0,
            lineItems: [
                {
                    itemName: "KFC",
                    quantity: 1,
                    specialInstructions: "Mas KFC",
                    addOns: [
                        {
                            quantity: 1,
                            name: "Mayo",
                        },
                        {
                            quantity: 1,
                            name: "Kethup",
                        },
                        {
                            quantity: 1,
                            name: "Jalapeños",
                        },
                    ],
                },
                {
                    itemName: "Pork Belly Bao",
                    quantity: 1,
                    specialInstructions: "Mas Pork Belly Bao",
                    addOns: [
                        {
                            quantity: 1,
                            name: "Mayo",
                        },
                        {
                            quantity: 1,
                            name: "Kethup",
                        },
                        {
                            quantity: 1,
                            name: "Jalapeños",
                        },
                    ],
                },
                {
                    itemName: "Shiitake Bao",
                    quantity: 1,
                    specialInstructions: "Mas Shiitake Bao",
                    addOns: [
                        {
                            quantity: 1,
                            name: "Mayo",
                        },
                        {
                            quantity: 1,
                            name: "Kethup",
                        },
                        {
                            quantity: 1,
                            name: "Jalapeños",
                        },
                    ],
                },
            ],
        },
        {
            orderId: 2,
            allergies: ["gluten", "dairy"],
            status: 0,
            lineItems: [
                {
                    itemName: "Pha Ga",
                    quantity: 1,
                    specialInstructions: "Mas Pha Ga",
                    addOns: [
                        {
                            quantity: 1,
                            name: "Mayo",
                        },
                        {
                            quantity: 1,
                            name: "Kethup",
                        },
                        {
                            quantity: 1,
                            name: "Jalapeños",
                        },
                    ],
                },
                {
                    itemName: "Tonkutsu 2.0",
                    quantity: 1,
                    specialInstructions: "Mas Tonkutsu 2.0",
                    addOns: [
                        {
                            quantity: 1,
                            name: "Mayo",
                        },
                        {
                            quantity: 1,
                            name: "Kethup",
                        },
                        {
                            quantity: 1,
                            name: "Jalapeños",
                        },
                    ],
                },
                {
                    itemName: "Spicey Miso",
                    quantity: 1,
                    specialInstructions: "Mas Spicey Miso",
                    addOns: [
                        {
                            quantity: 1,
                            name: "Mayo",
                        },
                        {
                            quantity: 1,
                            name: "Kethup",
                        },
                        {
                            quantity: 1,
                            name: "Jalapeños",
                        },
                    ],
                },
            ],
        },
        {
            orderId: 3,
            status: 0,
            lineItems: [
                {
                    itemName: "Coke",
                    quantity: 1,
                    specialInstructions: "Mas Coke",
                    addOns: [
                        {
                            quantity: 1,
                            name: "Mayo",
                        },
                        {
                            quantity: 1,
                            name: "Kethup",
                        },
                        {
                            quantity: 1,
                            name: "Jalapeños",
                        },
                    ],
                },
                {
                    itemName: "Gingerale",
                    quantity: 1,
                    specialInstructions: "Mas Gingerale",
                    addOns: [
                        {
                            quantity: 1,
                            name: "Mayo",
                        },
                        {
                            quantity: 1,
                            name: "Kethup",
                        },
                        {
                            quantity: 1,
                            name: "Jalapeños",
                        },
                    ],
                },
                {
                    itemName: "Mexican Sprite",
                    quantity: 1,
                    specialInstructions: "Mas Mexican Sprite",
                    addOns: [
                        // {
                        //     quantity: 1,
                        //     name: "Mayo",
                        // },
                        // {
                        //     quantity: 1,
                        //     name: "Kethup",
                        // },
                        // {
                        //     quantity: 1,
                        //     name: "Jalapeños",
                        // },
                    ],
                },
            ],
        },
    ],
};
