import {useEffect, useState} from "react";
import {getMessages} from "../api/chat.js";
import {MessageList} from "../components/MessageList.jsx";
import {MessageForm} from "../components/MessageForm.jsx";


export const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState("");

    const fetMessages = async () => {
        try {
            const response = await getMessages();
            setMessages(response);

        } catch (error) {
            console.log("Error al enviar el mensaje: ", error)
        }

    }

    useEffect(() => {
        setUsername(localStorage.getItem("chatUsername"));

        fetMessages();
        const interval = setInterval(() => {
            console.log("hola")
            fetMessages();

        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
          <div className="chat-header">Chat de {username}</div>
          <MessageList className="message-list" messages={messages} />
          <MessageForm className="message-form" onMessageSent={fetMessages} />
        </>
      );
}