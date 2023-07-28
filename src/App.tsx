import {useReducer} from "react";

type GridProps = {
    cells: number[]
    temporary: number[]
    onPointerEnter: (cell: number) => void
    onPointerLeave: (cell: number) => void
}

const getTile = (cell: number, index: number, temp: number[]) => {
    if(temp.includes(index)) {
        return "bg-[url('/tile_0002.png')]"
    }

    if (cell === -1) {
        return "bg-[url('/tile_0002.png')]"
    }
    return "bg-[url('/tile_0001.png')]"
}

const Grid = ({cells, temporary, onPointerEnter, onPointerLeave}: GridProps) => {
    // Replace 'arrayItems' with your actual array of 100 elements

    console.log(temporary)

    return (
        <div className="inline-grid grid-cols-10 gap-0.5 border-black border-2">
            {/* The loop will create a 10x10 grid with your array elements */}
            {cells.map((cell, i) => (
                <div key={i}
                     className={`${cell !== -1 ? "bg-gray-300" : "bg-green-300"} h-12 w-12 flex items-center justify-center ${getTile(cell, i, temporary)} bg-cover`}
                     onPointerEnter={() => onPointerEnter(i)}
                     onPointerLeave={() => onPointerLeave(i)}
                >

                </div>
            ))}
        </div>
    );
};

const arrayItems = Array.from({length: 100}, (_, index) => index + 1);

interface State {
    grid: number[];
    hovered: number | null;
    dragging: boolean;
    draggedIndex: number[];
}

type Action =
    | { type: 'DRAG_START' }
    | { type: 'POINTER_ENTER'; index: number }
    | { type: 'POINTER_LEAVE'; index: number }
    | { type: 'DRAG_END' };

// Define the reducer function
const gridReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'POINTER_ENTER':
            if (state.dragging) {
                console.log('dragging', action.index)
                return {...state, draggedIndex: [...state.draggedIndex, action.index], hovered: action.index};
            } else {
                return {...state, hovered: action.index};
            }
        case 'POINTER_LEAVE':
            return {...state, hovered: null};
        case 'DRAG_START':
            return {...state, dragging: true, draggedIndex: state.hovered !== null ? [state.hovered] : []};
        case 'DRAG_END': {
            const updatedArray = state.grid.map((cell, i) => {
                if (state.draggedIndex.includes(i)) {
                    return -1;
                }
                return cell;
            });
            return {...state, grid: updatedArray, dragging: false, draggedIndex: []};
        }
        default:
            return state;
    }
};

function App() {

    // Initialize state using useReducer
    const [state, dispatch] = useReducer(gridReducer, {
        grid: arrayItems,
        hovered: null,
        dragging: false,
        draggedIndex: [],
    });

    // Destructure state for ease of use
    const {grid, draggedIndex: temp } = state;


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


    return (
        <>
            <div>
                aa
            </div>
            <div className={"flex flex-row items-start h-screen bg-red-500"} onDragStart={() => {
                console.log("drag start")
            }}
                 onPointerDown={onPointerDown}
                 onPointerUp={onPointerUp}
            >
                <Grid cells={grid} temporary={temp} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}/>
                <Grid cells={grid} temporary={temp} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}/>
                {/*<Grid cells={grid} onUpdate={updateArrayItem}/>*/}
            </div>
        </>
    )
}

export default App
