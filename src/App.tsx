import {useReducer} from "react";

type GridProps = {
    cells: number[]
    temporary: Update[]
    onPointerEnter: (cell: number) => void
    onPointerLeave: (cell: number) => void
}


const tiles = [
    {class: 'bg-[url("/tiles/tile_0001.png")]', value: -1},
    {class: 'bg-[url("/tiles/tile_0002.png")]', value: -2},
    {class: 'bg-[url("/tiles/tile_0043.png")]', value: -3},
    {class: 'bg-[url("/tiles/tile_0025.png")]', value: -4},

]

const getTile = (cell: number) => {
    switch (cell) {
        case -1:
            return 'bg-[url("/tiles/tile_0001.png")]'
        case -2:
            return 'bg-[url("/tiles/tile_0002.png")]'
        case -3:
            return 'bg-[url("/tiles/tile_0043.png")]'
        case -4:
            return 'bg-[url("/tiles/tile_0025.png")]'
        default:
            return 'bg-[url("/tiles/tile_0001.png")]'
    }
}

const arrayItems = Array.from({length: 8 * 8}, (_, index) => index + 1);

const Grid = ({cells, temporary, onPointerEnter, onPointerLeave}: GridProps) => {
    // Replace 'arrayItems' with your actual array of 100 elements

    console.log(temporary)

    return (
        <div className="inline-grid grid-cols-8 border-black border-2">
            {cells.map((cell, i) => {
                const v = temporary.find((item) => item.index === i)
                const tile = getTile(v ? v.value : cell)

                return (
                    <div key={i}
                         className={`${cell !== -1 ? "bg-gray-300" : "bg-green-300"} h-12 w-12 flex items-center justify-center ${tile} bg-cover`}
                         onPointerEnter={() => onPointerEnter(i)}
                         onPointerLeave={() => onPointerLeave(i)}
                    >

                    </div>
                )
            })}
        </div>
    );
};

type Update = {
    index: number
    value: number
}

interface State {
    grid: number[];
    hovered: number | null;
    dragging: boolean;
    updates: Update[];
    brush: number;
}

type Action =
    | { type: 'DRAG_START' }
    | { type: 'BRUSH_SELECTED'; brush: number }
    | { type: 'POINTER_ENTER'; index: number }
    | { type: 'POINTER_LEAVE'; index: number }
    | { type: 'DRAG_END' };

// Define the reducer function
const gridReducer = (state: State, action: Action) => {
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

function Brushes({onChange}: { onChange: (brush: number) => void }) {
    return <div className="flex flex-row">
        {tiles.map((tile, i) =>
            (
                <div key={i}
                     className={`h-12 w-12 flex items-center justify-center ${tile.class} bg-cover`}
                     onClick={() => onChange(tile.value)}
                />
            )
        )}
    </div>;
}

function App() {

    // Initialize state using useReducer
    const [state, dispatch] = useReducer(gridReducer, {
        grid: arrayItems,
        hovered: null,
        dragging: false,
        brush: -1,
        updates: [],
    });

    // Destructure state for ease of use
    const {grid, updates: temp} = state;


    const onPointerDown = () => {
        dispatch({type: 'DRAG_START'});
    };

    const onPointerUp = () => {
        dispatch({type: 'DRAG_END'});
    };

    const handlePointerEnter = (index: number) => {
        dispatch({type: 'POINTER_ENTER', index});
    };

    const handlePointerLeave = (index: number) => {
        dispatch({type: 'POINTER_LEAVE', index});
    };

    const handleBrushChange = (brush: number) => {
        dispatch({type: 'BRUSH_SELECTED', brush});
    };


    return (
        <>
            <div>
                <Brushes onChange={handleBrushChange}/>
            </div>
            <div className={"flex flex-row items-start h-screen"} onDragStart={() => {
                console.log("drag start")
            }}
                 onPointerDown={onPointerDown}
                 onPointerUp={onPointerUp}
            >
                <Grid cells={grid} temporary={temp} onPointerEnter={handlePointerEnter}
                      onPointerLeave={handlePointerLeave}/>
            </div>
        </>
    )
}

export default App
