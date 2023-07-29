type Tile = {
    key: 1 | 2 | 3 | 4,
    type: 'grass' | 'flowers' | 'stone' | 'dirt'
    url: string
}
export const BRUSHES: TileKey[] = [1, 2, 3, 4]

export type TileKey = Tile["key"]
export const TILE_TYPES: Record<TileKey, Tile> = {
    1: {url: "/tiles/tile_0001.png", key: 1, type: 'grass'},
    2: {url: "/tiles/tile_0002.png", key: 2, type: 'flowers'},
    3: {url: "/tiles/tile_0043.png", key: 3, type: 'stone'},
    4: {url: "/tiles/tile_0025.png", key: 4, type: 'dirt'},
}