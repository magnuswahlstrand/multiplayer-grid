import {ComponentProps, useReducer} from "react";
import {BRUSHES, Cell, TILE_TYPES, TileKey} from "./types.ts";
import {gridReducer, PendingUpdate} from "./reducer.ts";

type GridProps = {
    cells: Cell[]
    temporary: PendingUpdate[]
    onPointerEnter: (cell: number) => void
    onPointerLeave: (cell: number) => void
}


const arrayItems: Cell[] = Array.from({length: 8 * 8}, () => ({top: null, bottom: 1}));


type ImageDivProps = ComponentProps<"div"> & { spritePosition: string }

const ImageDiv = (props: ImageDivProps) => {
    // You can define your hardcoded styles here.
    // Return the JSX with the div and the hardcoded styles
    return <div
        {...props}
        className={`h-16 w-16`}
        style={{
            backgroundRepeat: 'no-repeat',
            backgroundPosition: props.spritePosition,
            backgroundImage: `url("/tiles/tilemap_resized.png")`,
            ...props.style, // Allow overriding of styles through props
        }}>
        {props.children}
    </div>;
};

const Grid = ({cells, temporary, onPointerEnter, onPointerLeave}: GridProps) => {
    return (
        <div className="inline-grid grid-cols-8 border-black border-2">
            {cells.map((cell, i) => {
                const v = temporary.find((item) => item.index === i)

                const top = v && TILE_TYPES[v.value].layer === 'top' ? TILE_TYPES[v.value].key : cell.top
                const bottom = v && TILE_TYPES[v.value].layer === 'bottom' ? TILE_TYPES[v.value].key : cell.bottom

                return (
                    <ImageDiv key={i}
                              spritePosition={TILE_TYPES[bottom].sprite.cssPosition}
                              onPointerEnter={() => onPointerEnter(i)}
                              onPointerLeave={() => onPointerLeave(i)}
                    >
                        {top !== null &&
                            <ImageDiv key={i}
                                      spritePosition={TILE_TYPES[top].sprite.cssPosition}
                                      onPointerEnter={() => onPointerEnter(i)}
                                      onPointerLeave={() => onPointerLeave(i)}
                            />}
                    </ImageDiv>
                )
            })}
        </div>
    );
};

function Brushes({onChange}: { onChange: (brush: TileKey) => void }) {
    return <div className="flex flex-row">
        {BRUSHES.map((tile, i) =>
            (
                <ImageDiv key={i}
                          spritePosition={TILE_TYPES[tile].sprite.cssPosition}
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

    const handleBrushChange = (brush: TileKey) => {
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
