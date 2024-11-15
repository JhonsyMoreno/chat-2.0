    export const MessageList = ({messages}) => {

        return (
            <>
                {
                    messages?.map(message => (
                        <div key={message.id} style={{marginBottom: "20px"}}>
                            <span><b>{message.author.name}: </b>{message.content}</span>
                        </div>
                    ))
                }
            </>
        )
    }