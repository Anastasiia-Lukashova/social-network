import style from './DIalogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props)=>{

    let dialogElements = props.state.messagesPage.dialogs.map (  <DialogItem state={props.state}
            name={props.state.messagesPage.dialog.name}
            id={props.state.messagesPage.dialog.id} />);

    let messageElements = props.state.messagesPage.messages.map( <Message
        id={props.state.messagesPage.messages.id}
        message={props.state.messagesPage.messages.message}/>);


    /*
    let dialogElements = props.dialog.map( <DialogItem name={props.dialogs.name} id={props.dialogs.id} /> );

    let messageElements = props.messages.map( <Message  message={props.messages.message} id={props.messages.id} /> );*/

    return (
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    { dialogElements }
                </div>
                <div className={style.messages}>
                    {messageElements}
                    <div>
                    hi hih ih hihihihihi
                    </div>
                </div>
            </div>
    );
}

export default Dialogs;
