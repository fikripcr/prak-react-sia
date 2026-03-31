import { createRoot } from "react-dom/client";
import "./tailwind.css";
import TailwinCSS from "./TailWindCSS";
import UserForm from "./UserForm";
import HitungGajiForm from "./HitungGajiForm";

createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <TailwinCSS/> */}
            <UserForm/>
            <HitungGajiForm/>
        </div>
    )