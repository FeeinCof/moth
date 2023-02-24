import { useEffect, useState } from "react";
import {
  AgeGateConfirmationBox,
  ChatBox,
  Header,
  Footer,
} from "@/src/components";
import useStorage from "@/src/hooks/useSessionStorage/useSessionStorage";

interface ReactNode {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: ReactNode) {
  const { getItem, setItem } = useStorage();
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  useEffect(() => {
    setAgeConfirmed(
      String(getItem("age_confirmed", "session")?.toLowerCase()) == "true"
    );
  }, []);
  const ageConfirming = (data: boolean = false) => {
    if (data) {
      setItem("age_confirmed", "true", "session");
      setAgeConfirmed(true);
    } else {
      document.location.href = "https://www.google.com/";
    }
  };
  return (
    <>
      <Header />
      {ageConfirmed ? (
        children
      ) : (
        <AgeGateConfirmationBox onClick={ageConfirming} />
      )}
      <ChatBox />
      <Footer />
    </>
  );
}
