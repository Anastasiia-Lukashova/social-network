import style from "../DIalogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem =(props)=>{
    let path = "/dialogs/" + props.id;
    return(
            <div className={style.dialogs + ' ' + style.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
    );
}

export default DialogItem;