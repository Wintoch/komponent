/* Two category of systems: C - conventional - 1, A - addressable, 2 */

export const System = {
    C: 1,
    A: 2,
}

export const Topology = {
    Ring: 1,
    Radial: 2,
    Hybrid: 3,
}

export const ConnectionType = {
    Line: 1,
    Loop: 2,
}

export const wires = [
    {
        surface: 0.5,
        nominal: 195.6,
    },
    {
      surface: 0.6,
      nominal: 135.8,
    },
    {
        surface: 0.8,
        nominal: 75
    },
    {
        surface: 1.0,
        nominal: 48,
    },
    {
        surface: 1.4,
        nominal: 26.6,
    },
    {
        surface: 1.5,
        nominal: 24.2,
    },
    {
        surface: 1.8,
        nominal: 14.96,
    },
    {
        surface: 2.3,
        nominal: 9.6
    },
    {
        surface: 2.8,
        nominal: 6.4
    }
]



export const devices = {
    'ACSP-402': {
        category: 'controlPanels',
        iconType: 8,
        dwgIconType: 1,
        system: [System.A],
        features: {
            maxWeight: 640,
            maxDevices: {
                'ACSP-ETH': 1,
                'APSP-402': 1,
            },
            maxDevicesInPartition: 32,
            partitions: 256,
            supervisionCurrency: 220,
            alarmCurrency: 320,
        },
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'DRP-400': {
        category: 'detectors',
        accessory: ['DB-400'],
        range: 'CIRCLE62',
        iconType: 6,
        dwgType: 3,
        system: [System.A],
        features: {
            weight: 5,
            supervisionCurrency: 0.45,
            alarmCurrency:  0.7,
        },
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'DCP-400': {
        category: 'detectors',
        accessory: ['DB-400'],
        range: 'CIRCLE45',
        iconType: 6,
        dwgIconType: 4,
        system: [System.A],
        features: {
            weight: 5,
            supervisionCurrency: 0.45,
            alarmCurrency:  0.6,
        },
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'DMP-400': {
        category: 'detectors',
        accessory: ['DB-400'],
        range: 'CIRCLE45',
        iconType: 6,
        dwgIconType: 5,
        system: [System.A],
        features: {
            weight: 5,
            supervisionCurrency: 0.5,
            alarmCurrency:  0.7,
        },
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'DB-400': {
        category: 'detectors',
        system: [System.A],
        hidden: true,
        features: {},
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'WZ-400': {
        category: 'detectors',
        system: [System.A],
        iconType: 2,
        dwgIconType: 9,
        features: {
            weight: 5,
            supervisionCurrency: 0.2,
            alarmCurrency:  1.4,
        },
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'DB-100': {
        category: 'detectors',
        system: [System.A],
        hidden: true,
        features: {},
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'DRP-100': {
        category: 'detectors',
        iconType: 6,
        dwgIconType: 3,
        range: 'CIRCLE45',
        system: [System.A, System.C],
        accessory: ['DB-100'],
        features: {
            weight: 0
        },
        requires: [
          'MLB-400'
        ],
        requiresOnLine: [
            'MLB-400',
        ],
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'DCP-100': {
        category: 'detectors',
        system: [System.A, System.C],
        accessory: ['DB-100'],
        range: 'CIRCLE62',
        iconType: 6,
        dwgIconType: 4,
        features: {
            weight: 0
        },
        requires: [
            'MLB-400'
        ],
        requiresOnLine: [
            'MLB-400',
        ],
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'DMP-100': {
        category: 'detectors',
        system: [System.A, System.C],
        accessory: ['DB-100'],
        range: 'CIRCLE45',
        iconType: 6,
        dwgIconType: 5,
        features: {
            weight: 0
        },
        requires: [
            'MLB-400'
        ],
        requiresOnLine: [
            'MLB-400',
        ],
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'WZ-110': {
        category: 'detectors',
        system: [System.A, System.C],
        features: {
            weight: 0
        },
        iconType: 2,
        dwgIconType: 9,
        requires: [
            ['DRP-400', 'DCP-400', 'DMP-400', 'DRP-100', 'DCP-100', 'DMP-100']
        ],
        requiresOnLine: ['DRP-400', 'DCP-400', 'DMP-400', 'DRP-100', 'DCP-100', 'DMP-100'],
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },

    'ROP-400/PL': {
        category: 'callPoints',
        iconType: 5,
        dwgIconType: 7,
        system: [System.A],
        features: {
            weight: 5,
            supervisionCurrency: 0.17,
            alarmCurrency:  0.45,
        },
        languages: [
            'pl',
        ],
    },
    'ROP-401/PL': {
        category: 'callPoints',
        iconType: 5,
        dwgIconType: 7,
        system: [System.A],
        features: {
            weight: 5,
            supervisionCurrency: 0.17,
            alarmCurrency:  0.45,
        },
        languages: [
            'pl',
        ],
    },
    'ROP-400/EU': {
        category: 'callPoints',
        iconType: 5,
        dwgIconType: 7,
        system: [System.A],
        features: {
            weight: 5,
            supervisionCurrency: 0.17,
            alarmCurrency:  0.45,
        },
        languages: [
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'ROP-401/EU': {
        category: 'callPoints',
        iconType: 5,
        dwgIconType: 7,
        system: [System.A],
        features: {
            weight: 5,
            supervisionCurrency: 0.17,
            alarmCurrency:  0.45,
        },
        languages: [
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },

    'ROP-110/PL': {
        category: 'callPoints',
        system: [System.A, System.C],
        iconType: 5,
        dwgIconType: 7,
        features: {
            weight: 0
        },
        requires: [
            'MLB-400'
        ],
        requiresOnLine: [
            'MLB-400',
        ],
        languages: [
            'pl',
        ],
    },
    'ROP-110/EU': {
        category: 'callPoints',
        iconType: 5,
        dwgIconType: 7,
        system: [System.A, System.C],
        features: {
            weight: 0
        },
        requires: [
            'MLB-400'
        ],
        requiresOnLine: [
            'MLB-400',
        ],
        languages: [
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'ROP-111/PL': {
        category: 'callPoints',
        system: [System.A, System.C],
        iconType: 5,
        dwgIconType: 7,
        features: {
            weight: 0
        },
        requires: [
            'MLB-400'
        ],
        requiresOnLine: [
            'MLB-400',
        ],
        languages: [
            'pl'
        ],
    },
    'ROP-111/EU': {
        category: 'callPoints',
        iconType: 5,
        dwgIconType: 7,
        system: [System.A, System.C],
        features: {
            weight: 0
        },
        requires: [
            'MLB-400'
        ],
        requiresOnLine: [
            'MLB-400',
        ],
        languages: [
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'SPP-400': {
        category: 'sirens',
        iconType: 4,
        dwgIconType: 8,
        system: [System.A],
        features: {
            weight: 16,
            supervisionCurrency: 0.25,
            alarmCurrency:  4,
        },
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'SPP-401': {
        category: 'sirens',
        iconType: 4,
        dwgIconType: 8,
        system: [System.A],
        features: {
            weight: 16,
            supervisionCurrency: 0.25,
            alarmCurrency:  4,
        },
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'SPP-110': {
        category: 'sirens',
        iconType: 4,
        dwgIconType: 8,
        system: [System.A, System.C],
        features: {
            supervisionCurrency: 0,
            alarmCurrency:  7,
        },
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'SPP-111': {
        category: 'sirens',
        iconType: 4,
        dwgIconType: 8,
        system: [System.A, System.C],
        features: {
            supervisionCurrency: 0,
            alarmCurrency:  7,
        },
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },

    'ACSP-ETH': {
        category: 'communication',
        iconType: 7,
        system: [System.A],
        features: {},
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'ACSP-RSI': {
        category: 'communication',
        iconType: 7,
        system: [System.A],
        features: {},
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'MIO-400': {
        category: 'communication',
        iconType: 3,
        dwgIconType: 6,
        system: [System.A],
        features: {
            weight: 20,
            supervisionCurrency: 0.6,
            alarmCurrency:  0.75,
        },
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
    'MLB-400': {
        category: 'communication',
        iconType: 1,
        dwgIconType: 10,
        system: [System.A],
        features: {
            weight: 128,
            supervisionCurrency: 0.4,
            alarmCurrency:  15,
        },
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },

    'APSP-402': {
        category: 'repeaterPanels',
        iconType: 9,
        dwgIconType: 2,
        system: [System.A],
        features: {},
        languages: [
            'pl',
            'en',
            'de',
            'ru',
            'es',
            'it',
        ],
    },
};

export const categories = [
    'controlPanels',
    'detectors',
    'callPoints',
    'sirens',
    'communication',
    'repeaterPanels',
    // 'accessories';
];

export const devices2Categories = (function getCategories() {
    const cat = {};
    categories.forEach((category) => {
        cat[category] = {};
    });
    Object.entries(devices).forEach(([symbol, device]) => {
        cat[device.category] = {
            ...cat[device.category],
            [symbol]: device,
        };
    });
    return cat;
}());

export const getDeviceData = (symbol) => {
    try {
        return devices[symbol];
    } catch (e) {
        return null;
    }
};