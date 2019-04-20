import resizerImage from "resize-image";
export const resizer = file => {
  let img = new Image();
  return new Promise(res => {
    img.onload = () => {
      let data = resizerImage.resize(img, 100, 100, resizerImage.JPG);
      res(data);
    };
    img.src = file;
  });
};

export const loaderFile = file => {
  let reader = new FileReader();
  return new Promise(res => {
    reader.onload = () => {
      const dataURL = reader.result;
      res(dataURL);
    };
    reader.readAsDataURL(file);
  });
};
