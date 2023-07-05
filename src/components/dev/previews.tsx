import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import UMKM from "@/app/umkm/page";
import Navi from "@/app/component/navi";
import Career from "@/app/career/page";
import Blog from "@/app/blog/page";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/UMKM">
                <UMKM/>
            </ComponentPreview>
            <ComponentPreview path="/Navi">
                <Navi/>
            </ComponentPreview>
            <ComponentPreview path="/Career">
                <Career/>
            </ComponentPreview>
            <ComponentPreview path="/Blog">
                <Blog/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;