import { onAuthStateChanged } from "firebase/auth";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification"
import { auth } from "./lib/firebase";
import { useEffect } from "react";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore()
  const { chatId } = useChatStore();


  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);



  if (isLoading) return <div className="loading">Loading...</div>;

  return (

    <div className="container">

      {currentUser ? (
        <>
          <List />
          {chatId && <Chat />}
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  )
}

export default App;