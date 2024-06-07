import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatPage = (props) => {
  return (
    <div style={{height: "100vh"}}>
      <PrettyChatWindow
        projectId={"c833535f-a9b8-4a03-9b83-3cbcd13ba960"}
        username={props.user.username}
              secret={props.user.secret}
              style={{height: "100%"}}
      />
    </div>
  );
};

export default ChatPage;
