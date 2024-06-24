import React from "react";
import SidebarItem from "./SidebarItem";
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

export default function Sidebar({ userId, username }) {
  return (
    <div className="sidebar">
      <SidebarItem icon={<BsTwitterX />}></SidebarItem>
      <SidebarItem icon={<FaHome />}>
        <span className="space"></span> Anasayfa
      </SidebarItem>
      <SidebarItem icon={<IoSearchOutline />}>
        <span className="space"></span> Keşfet
      </SidebarItem>
      <SidebarItem icon={<CiBellOn />}>
        <span className="space"></span> Bildirimler
      </SidebarItem>
      <SidebarItem icon={<FaRegEnvelope />}>
        <span className="space"></span> Mesajlar
      </SidebarItem>
      <SidebarItem icon={<IoRocketOutline />}>
        <span className="space"></span> Grok
      </SidebarItem>
      <SidebarItem icon={<LuClipboardList />}>
        <span className="space"></span> Listeler
      </SidebarItem>
      <SidebarItem icon={<CiBookmark />}>
        <span className="space"></span> Yer İşaretleri
      </SidebarItem>
      <SidebarItem icon={<HiOutlineUsers />}>
        <span className="space"></span> Topluluklar
      </SidebarItem>
      <SidebarItem icon={<BsTwitterX />}>
        <span className="space"></span> Premium
      </SidebarItem>
      <SidebarItem icon={<CiUser />}>
        <span className="space"></span> Profil
      </SidebarItem>
      <SidebarItem icon={<CiCircleMore />}>
        <span className="space"></span> Daha Fazla
      </SidebarItem>
      <SendButton />
      <div className="profile-section">
        <img
          src="https://picsum.photos/100/100?random=10"
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-details">
          <span className="profile-name">{username}</span>
          <span className="profile-handle">
            @{username}
            {userId}
          </span>
        </div>
      </div>
    </div>
  );
}
