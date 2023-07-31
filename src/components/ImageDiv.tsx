import {ComponentProps} from "react";

type ImageDivProps = ComponentProps<"div"> & { spritePosition: string }
export const ImageDiv = (props: ImageDivProps) => {
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