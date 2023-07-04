import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import UMKM from "@/app/umkm/page";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/UMKM">
                <UMKM/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;