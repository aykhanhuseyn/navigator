import { IconsSet } from "../components/menus/icons";
import { MenuType, Routes } from "../enums";

export const MENUS = [
  {
    key: "0",
    name: "Ana səhifə",
    icon: IconsSet.Home,
    type: MenuType.get("Linkable"),
    link: Routes.get("Home"),
  },
  {
    key: "a",
    name: "Hesab",
    icon: IconsSet.User,
    isOpen: true,
    type: MenuType.get("Submenu"),
    link: Routes.get("Profile"),
    children: [
      {
        key: "a1",
        name: "Məlumatlarım",
        type: MenuType.get("Linkable"),
        link: Routes.get("Profile"),
      },
      {
        key: "a2",
        name: "Məlumatları dəyişdir",
        type: MenuType.get("Linkable"),
        link: Routes.get("ProfileEdit"),
      },
      {
        key: "a3",
        name: "Şifrəmi dəyişdir",
        type: MenuType.get("Linkable"),
        link: Routes.get("Password"),
      },
      {
        key: "a4",
        name: "Hesabdan çıx",
        type: MenuType.get("Linkable"),
        link: Routes.get("LogIn"),
      },
    ],
  },
  {
    key: "b",
    name: "Məlumatlar",
    icon: IconsSet.Profile,
    type: MenuType.get("Submenu"),
    isOpen: true,
    children: [
      {
        key: "b1",
        name: "İstifadəçilər",
        type: MenuType.get("Group"),
        link: Routes.get("Users"),
        children: [
          {
            key: "b1a",
            name: "Siyahı",
            type: MenuType.get("Linkable"),
            link: Routes.get("Users"),
          },
          {
            key: "b1b",
            name: "Yarat",
            type: MenuType.get("Linkable"),
            link: Routes.get("UserCreate"),
          },
        ],
      },
      {
        key: "b2",
        name: "Nəqliyyat vasitələri",
        type: MenuType.get("Group"),
        link: Routes.get("Vehicles"),
        children: [
          {
            key: "b2a",
            name: "Siyahı",
            type: MenuType.get("Linkable"),
            link: Routes.get("Vehicles"),
          },
          {
            key: "b2b",
            name: "Yarat",
            type: MenuType.get("Linkable"),
            link: Routes.get("VehicleCreate"),
          },
        ],
      },
      {
        key: "b3",
        name: "Mexaniklər",
        type: MenuType.get("Group"),
        link: Routes.get("Mechanics"),
        children: [
          {
            key: "b3a",
            name: "Siyahı",
            type: MenuType.get("Linkable"),
            link: Routes.get("Mechanics"),
          },
          {
            key: "b3b",
            name: "Yarat",
            type: MenuType.get("Linkable"),
            link: Routes.get("MechanicsCreate"),
          },
        ],
      },
    ],
  },
  {
    key: "c",
    name: "Çıxış",
    icon: IconsSet.Logout,
    type: MenuType.get("Linkable"),
    link: Routes.get("LogIn"),
  },
];
