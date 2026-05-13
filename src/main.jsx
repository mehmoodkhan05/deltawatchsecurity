import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import faviconSrc from "../assets/favicon.png";
import "./styles/global.css";

function installFavicons() {
  const appendIcon = (href, media) => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = href;
    if (media) link.setAttribute("media", media);
    document.head.appendChild(link);
  };

  const img = new Image();
  img.decoding = "async";
  img.onload = () => {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      appendIcon(faviconSrc);
      return;
    }
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, size, size);
    const imageData = ctx.getImageData(0, 0, size, size);
    const { data } = imageData;
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i];
      data[i + 1] = 255 - data[i + 1];
      data[i + 2] = 255 - data[i + 2];
    }
    ctx.putImageData(imageData, 0, 0);
    const invertedPng = canvas.toDataURL("image/png");
    appendIcon(invertedPng, "(prefers-color-scheme: light)");
    appendIcon(invertedPng, "(prefers-color-scheme: no-preference)");
    appendIcon(faviconSrc, "(prefers-color-scheme: dark)");
  };
  img.onerror = () => {
    appendIcon(faviconSrc);
  };
  img.src = faviconSrc;
}

installFavicons();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
