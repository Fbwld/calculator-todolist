import React, {} from "react";
import { Image } from "react-native";
import imgh from '../assets/img/hello.png';



const ImgHi = () => (
    <Image 
    style={{
        width:200,
        height:200,
        marginBottom:10
    }}
    source={imgh}/>
)
export default ImgHi;