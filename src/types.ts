export type Cell = {
    top: TileKey | null,
    bottom: TileKey,
}

type Tile = {
    layer: 'top' | 'bottom',
    sprite: {
        cssPosition: string,
    }
}


export type TileKey = keyof typeof TILE_TYPES

function s(x: number, y: number) {
    return {cssPosition: `-${x * 64}px -${y * 64}px`}
}

// TODO: Move to a separate file
export const TILE_TYPES: Record<number, Tile> = {
    100: {sprite: s(1, 0), layer: 'bottom'}, // Grass
    200: {sprite: s(2, 0), layer: 'bottom'}, // Flowers
    703: {sprite: s(7, 3), layer: 'bottom'}, // Stone
    102: {sprite: s(1, 2), layer: 'bottom'}, // Dirt

    400: {sprite: s(4, 0), layer: 'top'}, // Tree top
    401: {sprite: s(4, 1), layer: 'top'}, // Tree bottom
    402: {sprite: s(4, 2), layer: 'top'}, // Small tree
    500: {sprite: s(5, 0), layer: 'top'}, // Bush
    501: {sprite: s(5, 1), layer: 'top'}, // Weed
    502: {sprite: s(5, 2), layer: 'top'}, // Mushroom

    600: {sprite: s(6, 0), layer: 'top'}, // Trees
    700: {sprite: s(7, 0), layer: 'top'}, // Trees
    800: {sprite: s(8, 0), layer: 'top'}, // Trees
    601: {sprite: s(6, 1), layer: 'top'}, // Trees
    701: {sprite: s(7, 1), layer: 'top'}, // Trees
    801: {sprite: s(8, 1), layer: 'top'}, // Trees
    602: {sprite: s(6, 2), layer: 'top'}, // Trees
    702: {sprite: s(7, 2), layer: 'top'}, // Trees
    802: {sprite: s(8, 2), layer: 'top'}, // Trees

    803: {sprite: s(8, 3), layer: 'top'}, // Fence
    903: {sprite: s(9, 3), layer: 'top'}, // Fence
    1003: {sprite: s(10, 3), layer: 'top'}, // Fence
    804: {sprite: s(8, 4), layer: 'top'}, // Fence
    904: {sprite: s(9, 4), layer: 'top'}, // Fence
    1004: {sprite: s(10, 4), layer: 'top'}, // Fence
    805: {sprite: s(8, 5), layer: 'top'}, // Fence
    905: {sprite: s(9, 5), layer: 'top'}, // Fence
    1005: {sprite: s(10, 5), layer: 'top'}, // Fence



    // 6: {sprite: s(6, 0), key: 6, layer: 'bottom'},
    // 7: {sprite: s(7, 0), key: 7, layer: 'bottom'},
    // 8: {sprite: s(8, 0), key: 8, layer: 'bottom'},
    // 9: {sprite: s(9, 0), key: 9, layer: 'bottom'},
    // 10: {sprite: s(10, 0), key: 10, layer: 'bottom'},
    // 11: {sprite: s(11, 0), key: 11, layer: 'bottom'},
    // 100: {sprite: s(0, 1), key: 100, layer: 'bottom'},
    // 101: {sprite: s(1, 1), key: 101, layer: 'bottom'},
    // 102: {sprite: s(2, 1), key: 102, layer: 'bottom'},
    // 103: {sprite: s(3, 1), key: 103, layer: 'bottom'},
    // 104: {sprite: s(4, 1), key: 104, layer: 'bottom'},
    // 105: {sprite: s(5, 1), key: 105, layer: 'bottom'},
    // 106: {sprite: s(6, 1), key: 106, layer: 'bottom'},
    // 107: {sprite: s(7, 1), key: 107, layer: 'bottom'},
    // 108: {sprite: s(8, 1), key: 108, layer: 'bottom'},
    // 109: {sprite: s(9, 1), key: 109, layer: 'bottom'},
    // 110: {sprite: s(10, 1), key: 110, layer: 'bottom'},
    // 111: {sprite: s(11, 1), key: 111, layer: 'bottom'},
    // 200: {sprite: s(0, 2), key: 200, layer: 'bottom'},
    // 201: {sprite: s(1, 2), key: 201, layer: 'bottom'},
    // 202: {sprite: s(2, 2), key: 202, layer: 'bottom'},
    // 203: {sprite: s(3, 2), key: 203, layer: 'bottom'},
    // 204: {sprite: s(4, 2), key: 204, layer: 'bottom'},
    // 205: {sprite: s(5, 2), key: 205, layer: 'bottom'},
    // 206: {sprite: s(6, 2), key: 206, layer: 'bottom'},
    // 207: {sprite: s(7, 2), key: 207, layer: 'bottom'},
    // 208: {sprite: s(8, 2), key: 208, layer: 'bottom'},
    // 209: {sprite: s(9, 2), key: 209, layer: 'bottom'},
    // 210: {sprite: s(10, 2), key: 210, layer: 'bottom'},
    // 211: {sprite: s(11, 2), key: 211, layer: 'bottom'},
    // 300: {sprite: s(0, 3), key: 300, layer: 'bottom'},
    // 301: {sprite: s(1, 3), key: 301, layer: 'bottom'},
    // 302: {sprite: s(2, 3), key: 302, layer: 'bottom'},
    // 303: {sprite: s(3, 3), key: 303, layer: 'bottom'},
    // 304: {sprite: s(4, 3), key: 304, layer: 'bottom'},
    // 305: {sprite: s(5, 3), key: 305, layer: 'bottom'},
    // 306: {sprite: s(6, 3), key: 306, layer: 'bottom'},
    // 308: {sprite: s(8, 3), key: 308, layer: 'bottom'},
    // 309: {sprite: s(9, 3), key: 309, layer: 'bottom'},
    // 310: {sprite: s(10, 3), key: 310, layer: 'bottom'},
    // 311: {sprite: s(11, 3), key: 311, layer: 'bottom'},
    // 400: {sprite: s(0, 4), key: 400, layer: 'bottom'},
    // 401: {sprite: s(1, 4), key: 401, layer: 'bottom'},
    // 402: {sprite: s(2, 4), key: 402, layer: 'bottom'},
    // 403: {sprite: s(3, 4), key: 403, layer: 'bottom'},
    // 404: {sprite: s(4, 4), key: 404, layer: 'bottom'},
    // 405: {sprite: s(5, 4), key: 405, layer: 'bottom'},
    // 406: {sprite: s(6, 4), key: 406, layer: 'bottom'},
    // 407: {sprite: s(7, 4), key: 407, layer: 'bottom'},
    // 408: {sprite: s(8, 4), key: 408, layer: 'bottom'},
    // 409: {sprite: s(9, 4), key: 409, layer: 'bottom'},
    // 410: {sprite: s(10, 4), key: 410, layer: 'bottom'},
    // 411: {sprite: s(11, 4), key: 411, layer: 'bottom'},
    // 500: {sprite: s(0, 5), key: 500, layer: 'bottom'},
    // 501: {sprite: s(1, 5), key: 501, layer: 'bottom'},
    // 502: {sprite: s(2, 5), key: 502, layer: 'bottom'},
    // 503: {sprite: s(3, 5), key: 503, layer: 'bottom'},
    // 504: {sprite: s(4, 5), key: 504, layer: 'bottom'},
    // 505: {sprite: s(5, 5), key: 505, layer: 'bottom'},
    // 506: {sprite: s(6, 5), key: 506, layer: 'bottom'},
    // 507: {sprite: s(7, 5), key: 507, layer: 'bottom'},
    // 508: {sprite: s(8, 5), key: 508, layer: 'bottom'},
    // 509: {sprite: s(9, 5), key: 509, layer: 'bottom'},
    // 510: {sprite: s(10, 5), key: 510, layer: 'bottom'},
    // 511: {sprite: s(11, 5), key: 511, layer: 'bottom'},
    // 600: {sprite: s(0, 6), key: 600, layer: 'bottom'},
    // 601: {sprite: s(1, 6), key: 601, layer: 'bottom'},
    // 602: {sprite: s(2, 6), key: 602, layer: 'bottom'},
    // 603: {sprite: s(3, 6), key: 603, layer: 'bottom'},
    // 604: {sprite: s(4, 6), key: 604, layer: 'bottom'},
    // 605: {sprite: s(5, 6), key: 605, layer: 'bottom'},
    // 606: {sprite: s(6, 6), key: 606, layer: 'bottom'},
    // 607: {sprite: s(7, 6), key: 607, layer: 'bottom'},
    // 608: {sprite: s(8, 6), key: 608, layer: 'bottom'},
    // 609: {sprite: s(9, 6), key: 609, layer: 'bottom'},
    // 610: {sprite: s(10, 6), key: 610, layer: 'bottom'},
    // 611: {sprite: s(11, 6), key: 611, layer: 'bottom'},
    // 700: {sprite: s(0, 7), key: 700, layer: 'bottom'},
    // 701: {sprite: s(1, 7), key: 701, layer: 'bottom'},
    // 702: {sprite: s(2, 7), key: 702, layer: 'bottom'},
    // 703: {sprite: s(3, 7), key: 703, layer: 'bottom'},
    // 704: {sprite: s(4, 7), key: 704, layer: 'bottom'},
    // 705: {sprite: s(5, 7), key: 705, layer: 'bottom'},
    // 706: {sprite: s(6, 7), key: 706, layer: 'bottom'},
    // 707: {sprite: s(7, 7), key: 707, layer: 'bottom'},
    // 708: {sprite: s(8, 7), key: 708, layer: 'bottom'},
    // 709: {sprite: s(9, 7), key: 709, layer: 'bottom'},
    // 710: {sprite: s(10, 7), key: 710, layer: 'bottom'},
    // 711: {sprite: s(11, 7), key: 711, layer: 'bottom'},
    // 800: {sprite: s(0, 8), key: 800, layer: 'bottom'},
    // 801: {sprite: s(1, 8), key: 801, layer: 'bottom'},
    // 802: {sprite: s(2, 8), key: 802, layer: 'bottom'},
    // 803: {sprite: s(3, 8), key: 803, layer: 'bottom'},
    // 804: {sprite: s(4, 8), key: 804, layer: 'bottom'},
    // 805: {sprite: s(5, 8), key: 805, layer: 'bottom'},
    // 806: {sprite: s(6, 8), key: 806, layer: 'bottom'},
    // 807: {sprite: s(7, 8), key: 807, layer: 'bottom'},
    // 808: {sprite: s(8, 8), key: 808, layer: 'bottom'},
    // 809: {sprite: s(9, 8), key: 809, layer: 'bottom'},
    // 810: {sprite: s(10, 8), key: 810, layer: 'bottom'},
    // 811: {sprite: s(11, 8), key: 811, layer: 'bottom'},
    // 900: {sprite: s(0, 9), key: 900, layer: 'bottom'},
    // 901: {sprite: s(1, 9), key: 901, layer: 'bottom'},
    // 902: {sprite: s(2, 9), key: 902, layer: 'bottom'},
    // 903: {sprite: s(3, 9), key: 903, layer: 'bottom'},
    // 904: {sprite: s(4, 9), key: 904, layer: 'bottom'},
    // 905: {sprite: s(5, 9), key: 905, layer: 'bottom'},
    // 906: {sprite: s(6, 9), key: 906, layer: 'bottom'},
    // 907: {sprite: s(7, 9), key: 907, layer: 'bottom'},
    // 908: {sprite: s(8, 9), key: 908, layer: 'bottom'},
    // 909: {sprite: s(9, 9), key: 909, layer: 'bottom'},
    // 910: {sprite: s(10, 9), key: 910, layer: 'bottom'},
    // 911: {sprite: s(11, 9), key: 911, layer: 'bottom'},
    // 1000: {sprite: s(0, 10), key: 1000, layer: 'bottom'},
    // 1001: {sprite: s(1, 10), key: 1001, layer: 'bottom'},
    // 1002: {sprite: s(2, 10), key: 1002, layer: 'bottom'},
    // 1003: {sprite: s(3, 10), key: 1003, layer: 'bottom'},
    // 1004: {sprite: s(4, 10), key: 1004, layer: 'bottom'},
    // 1005: {sprite: s(5, 10), key: 1005, layer: 'bottom'},
    // 1006: {sprite: s(6, 10), key: 1006, layer: 'bottom'},
    // 1007: {sprite: s(7, 10), key: 1007, layer: 'bottom'},
    // 1008: {sprite: s(8, 10), key: 1008, layer: 'bottom'},
    // 1009: {sprite: s(9, 10), key: 1009, layer: 'bottom'},
    // 1010: {sprite: s(10, 10), key: 1010, layer: 'bottom'},
    // 1011: {sprite: s(11, 10), key: 1011, layer: 'bottom'},
}