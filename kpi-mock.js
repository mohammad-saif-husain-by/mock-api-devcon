const data = {
    kpis: [{
        name: 'On Time Peformance',
        up: '75%',
        down: '10%'
    }, {
        name: 'Revenue',
        up: '$5.08M',
        down: '+4%'
    }, {
        name: '% Margin',
        up: '35%',
        down: '-1%'
    }, {
        name: '% Utilization',
        up: '90%',
        down: '-10%'
    }],
    orders: {
        due: {
            count: 875,
            data: [{
                id: 09,
                text: 'Failed Auto Approval - Optimization Failed'
            }, {
                id: 56,
                text: 'Failed Auto Approval - Optimization Failed'
            }, {
                id: 14,
                text: 'Order Total Exceeds Largest Vendor Bracket'
            }]
        },
        other: {
            count: 179
        },
        approved: {
            count: 1900
        }
    },
    stores: [
        'Sharon\'s Grocery Rose Park',
        'Sharon\'s Grocery The Avenues',
        'Sharon\'s Grocery Zions Park',
        'Sharon\'s Grocery Alphine Meadows',
        'Sharon\'s Grocery Millcreek'
    ],
    sales: {
        meat: 15,
        bakery: 20,
        grocery: 30,
        produce: 15,
        dairy_frozen: 20
    }
}

module.exports = data;