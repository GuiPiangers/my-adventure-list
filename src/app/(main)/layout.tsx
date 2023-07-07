import Header from "@/components/Header/Header";
import NavMobile from "@/components/NavMobile/NavMobile";
import UserAvatar from "@/components/UserAvatar/UserAvatar";
import { ReactNode } from "react";

type props = {
  children: ReactNode;
};

export default function Layout({ children }: props) {
  return (
    <>
      <Header />
      <UserAvatar img="/img/pixelArt.jpg" name="Guilherme"></UserAvatar>
      {children}
      <NavMobile />
    </>
  );
}
