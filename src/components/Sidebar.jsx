import SidebarItem from "./SidebarItem";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";
import SendButton from "./SendButton";

const SidebarDiv = styled.div`
  width: 250px;
  background-color: #000;
  padding: 0 0 1rem;
  font-size: 1.2rem;
`;
const SpaceSpan = styled.span`
  display: inline-block;
  width: 1rem;
`;
const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;
const ProfileDetailsDiv = styled.div`
  margin-left: 10px;
  flex-grow: 1;
`;
const NameSpan = styled.span`
  display: block;
  color: #ffffff;
  font-weight: bold;
  font-size: 0.9rem;
`;
const HandleSpan = styled.span`
  display: block;
  color: #aaaaaa;
  font-size: 0.8rem;
`;
export default function Sidebar({ userId, username }) {
  return (
    <SidebarDiv>
      <SidebarItem icon={<BsTwitterX />}></SidebarItem>
      <SidebarItem icon={<FaHome />}>
        <SpaceSpan></SpaceSpan>Anasayfa
      </SidebarItem>
      <SidebarItem icon={<IoSearchOutline />}>
        <SpaceSpan></SpaceSpan>Keşfet
      </SidebarItem>
      <SidebarItem icon={<CiBellOn />}>
        <SpaceSpan></SpaceSpan>Bildirimler
      </SidebarItem>
      <SidebarItem icon={<FaRegEnvelope />}>
        <SpaceSpan></SpaceSpan>Mesajlar
      </SidebarItem>
      <SidebarItem icon={<IoRocketOutline />}>
        <SpaceSpan></SpaceSpan>Grok
      </SidebarItem>
      <SidebarItem icon={<LuClipboardList />}>
        <SpaceSpan></SpaceSpan>Listeler
      </SidebarItem>
      <SidebarItem icon={<CiBookmark />}>
        <SpaceSpan></SpaceSpan>Yer İşaretleri
      </SidebarItem>
      <SidebarItem icon={<HiOutlineUsers />}>
        <SpaceSpan></SpaceSpan>Topluluklar
      </SidebarItem>
      <SidebarItem icon={<BsTwitterX />}>
        <SpaceSpan></SpaceSpan>Premium
      </SidebarItem>
      <SidebarItem icon={<CiUser />}>
        <SpaceSpan></SpaceSpan>Profil
      </SidebarItem>
      <SidebarItem icon={<CiCircleMore />}>
        <SpaceSpan></SpaceSpan>Daha Fazla
      </SidebarItem>
      <SendButton />
      <ProfileDiv>
        <ProfileImg
          src="https://picsum.photos/100/100?random=10"
          alt="Profile"
        />
        <ProfileDetailsDiv>
          <NameSpan>{username}</NameSpan>
          <HandleSpan>
            @{username}
            {userId}
          </HandleSpan>
        </ProfileDetailsDiv>
      </ProfileDiv>
    </SidebarDiv>
  );
}
