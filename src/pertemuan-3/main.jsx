import { createRoot } from "react-dom/client";
import "./tailwind.css";
import TailwinCSS from "./TailWindCSS";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <TailwinCSS/>
        </div>
    )