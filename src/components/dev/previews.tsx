import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import UMKM from "@/app/umkm/page";
import Navi from "@/app/component/navi";
import Career from "@/app/career/page";
import Blog from "@/app/blog/page";
import Home from "@/app/page";
import Foots from "@/app/component/foots";
import Social from "@/app/component/home/Social";
import Development from "@/app/component/home/Development";
import DataAnalyst from "@/app/component/home/DataAnalyst";

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
            <ComponentPreview path="/Home">
                <Home/>
            </ComponentPreview>
            <ComponentPreview path="/Foots">
                <Foots/>
            </ComponentPreview>
            <ComponentPreview path="/Social">
                <Social/>
            </ComponentPreview>
            <ComponentPreview path="/Development">
                <Development/>
            </ComponentPreview>
            <ComponentPreview path="/DataAnalyst">
                <DataAnalyst/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;