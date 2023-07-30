export type Cell = {
    top: TileKey | null,
    bottom: TileKey,
}

type Tile = {
    key: TileKey,
    layer: 'top' | 'bottom',
    sprite: {
        cssPosition: string,
    }
}

export const BRUSHES: TileKey[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

export type TileKey = keyof typeof TILE_TYPES

function s(x: number, y: number) {
    return {cssPosition: `-${x * 64}px -${y * 64}px`}
}

// TODO: Move to a separate file
export const TILE_TYPES: Record<number, Tile> = {
    1: {sprite: s(1, 0), key: 1, layer: 'bottom'}, // gra
    2: {sprite: s(2, 1), key: 2, layer: 'bottom'}, // 'flowers'
    // 3: {sprite: s(1, 1), key: 3, layer: 'top'}, // 'stone'
    3: {sprite: s(0, 4), key: 3, layer: 'top'}, // 'house'
    4: {sprite: s(1, 4), key: 4, layer: 'top'}, // 'house'
    5: {sprite: s(2, 4), key: 5, layer: 'top'}, // 'house'
    6: {sprite: s(3, 4), key: 6, layer: 'top'}, // 'house'

    7: {sprite: s(0, 5), key: 7, layer: 'top'}, // 'house'
    8: {sprite: s(1, 5), key: 8, layer: 'top'}, // 'house'
    9: {sprite: s(2, 5), key: 9, layer: 'top'}, // 'house'
    10: {sprite: s(3, 5), key: 10, layer: 'top'}, // 'house'

    11: {sprite: s(0, 6), key: 11, layer: 'top'}, // 'house'
    12: {sprite: s(1, 6), key: 12, layer: 'top'}, // 'house'
    13: {sprite: s(2, 6), key: 13, layer: 'top'}, // 'house'
    14: {sprite: s(3, 6), key: 14, layer: 'top'}, // 'house'

    15: {sprite: s(8, 7), key: 15, layer: 'top'}, // 'well_top'
    16: {sprite: s(8, 8), key: 16, layer: 'top'}, // 'well_bottom'
}