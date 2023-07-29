import {TileKey} from "./types.ts";

export type PendingUpdate = {
    index: number
    value: TileKey
}

interface State {
    grid: TileKey[];
    hovered: number | null;
    dragging: boolean;
    updates: PendingUpdate[];
    brush: TileKey;
}

type Action =
    | { type: 'DRAG_START' }
    | { type: 'BRUSH_SELECTED'; brush: TileKey }
    | { type: 'POINTER_ENTER'; index: number }
    | { type: 'POINTER_LEAVE'; index: number }
    | { type: 'DRAG_END' };

export const gridReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'POINTER_ENTER':
            if (state.dragging) {
                return {
                    ...state,
                    updates: [...state.updates, {value: state.brush, index: action.index}],
                    hovered: action.index
                };
            } else {
                return {...state, hovered: action.index};
            }
        case 'POINTER_LEAVE':
            return {...state, hovered: null};
        case 'DRAG_START':
            return {
                ...state,
                dragging: true,
                updates: state.hovered !== null ? [{value: state.brush, index: state.hovered}] : []
            };
        case 'DRAG_END': {
            const updatedArray = [...state.grid]
            state.updates.forEach(update => {
                updatedArray[update.index] = update.value;
            })
            return {...state, grid: updatedArray, dragging: false, updates: []};
        }
        case 'BRUSH_SELECTED':
            return {...state, brush: action.brush}
        default:
            return state;
    }
};