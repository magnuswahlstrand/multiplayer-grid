import {useReducer} from "react";
import {BRUSHES, TILE_TYPES, TileKey} from "./types.ts";
import {gridReducer, PendingUpdate} from "./reducer.ts";

type GridProps = {
    cells: TileKey[]
    temporary: PendingUpdate[]
    onPointerEnter: (cell: number) => void
    onPointerLeave: (cell: number) => void
}


const arrayItems: TileKey[] = Array.from({length: 8 * 8}, () => 1);

const Grid = ({cells, temporary, onPointerEnter, onPointerLeave}: GridProps) => {
    return (
        <div className="inline-grid grid-cols-8 border-black border-2">
            {cells.map((cell, i) => {
                const v = temporary.find((item) => item.index === i)
                const tileUrl = TILE_TYPES[v ? v.value : cell].url

                return (
                    <div key={i}
                         className={`bg-gray-300 h-8 w-8 flex items-center justify-center bg-[url("${tileUrl}")] bg-cover`}
                         onPointerEnter={() => onPointerEnter(i)}
                         onPointerLeave={() => onPointerLeave(i)}
                    >

                    </div>
                )
            })}
        </div>
    );
};

function Brushes({onChange}: { onChange: (brush: number) => void }) {
    return <div className="flex flex-row">
        {BRUSHES.map((tile, i) =>
            (
                <div key={i}
                     className={`h-12 w-12 flex items-center justify-center bg-[url("${TILE_TYPES[tile].url}")] bg-cover`}
                     onClick={() => onChange(TILE_TYPES[tile].key)}
                />
            )
        )}
    </div>;
}


function App() {
    const [state, dispatch] = useReducer(gridReducer, {
        grid: arrayItems,
        hovered: null,
        dragging: false,
        brush: 2,
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
