import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import UMKM from "@/app/umkm/page";
import Navi from "@/app/component/navi";
import Career from "@/app/skill/page";
import Blog from "@/app/blog/page";
import Home from "@/app/page";
import Foots from "@/app/component/foots";
import Social from "@/app/about/home/Social";
import Development from "@/app/about/home/Development";
import DataAnalyst from "@/app/about/home/DataAnalyst";

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