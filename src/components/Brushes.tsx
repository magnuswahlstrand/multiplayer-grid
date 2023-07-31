import {TILE_TYPES, TileKey} from "../types.ts";
import {ImageDiv} from "./ImageDiv.tsx";
import cx from "classnames";


type SectionProps = {
    title: string, brushes: TileKey[][], onChange: (brush: TileKey) => void
};

function Section({title, brushes: columns, onChange}: SectionProps) {
    return <div className="flex flex-col">
        <div>{title}</div>
        <div className={cx({
            "flex": true,
        })}>
            {
                columns.map((col, i) => (
                    <div className="flex flex-col" key={i}>
                        {col.map((tile, j) => (
                            <ImageDiv key={j}
                                      spritePosition={TILE_TYPES[tile].sprite.cssPosition}
                                      onClick={() => onChange(tile)}
                            />
                        ))}
                    </div>
                    //
                    // <ImageDiv key={i}
                    //           spritePosition={TILE_TYPES[tile].sprite.cssPosition}
                    //           onClick={() => onChange(tile)}
                    // />
                ))}
        </div>
    </div>;
}

export function Brushes({onChange}: { onChange: (brush: TileKey) => void }) {
    return <div className="flex flex-row">
        <div className="flex flex-col">
            <Section title={"Ground"} brushes={[[100], [200], [703], [102]]} onChange={onChange}/>
            <Section title={"Trees"}
                     brushes={[[400, 401], [402, 500], [501, 502]]}
                     onChange={onChange}/>
        </div>
        <Section title={"Fence"}
                 brushes={[
                     [803, 804, 805], [903, 904, 905], [1003, 1004, 1005]
                 ]}
                 onChange={onChange}/>
    </div>
}