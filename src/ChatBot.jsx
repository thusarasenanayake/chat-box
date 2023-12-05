export default function ChatBot(props) {
    return (
        <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white bg-chatbot-avatar bg-contain" />
            <div>
                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p className="text-sm">
                        {props.content}{" "}
                    </p>
                </div>
                {/* <span className="text-xs text-gray-500 leading-none">2 min ago</span> */}
            </div>
        </div>
    )

}