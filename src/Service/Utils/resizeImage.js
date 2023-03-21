import Resizer from "react-image-file-resizer";

export const resizeImage = (file, width, height) => {
if(!file) return;
return new Promise((resolve) => {
Resizer.imageFileResizer(
    file,
    width,
    height,
    "JPEG",
    100,
    0,
    (uri) => {
    resolve(uri);
    },
    "file"
);
});  
}