import React from "react";
// import {useTranslation} from "react-i18next";
import { useHistory } from "react-router-dom";
import { Menu } from "antd";
import { IconsMap } from "./icons";
import { MenuType } from "../../enums";
import "antd/lib/menu/style/css.js";
import "./index.css";
import { MENUS } from "../../contexts/menucontext";

const { SubMenu, ItemGroup, Item } = Menu;

const Menus = ({ open }) => {
  const history = useHistory();
  const menuMapper = (menus) => {
    return menus.map((menu) => {
      switch (menu.type) {
        case MenuType.get("Group"):
          return (
            <ItemGroup key={menu.key} title={menu.name}>
              {menu.children && menuMapper(menu.children)}
            </ItemGroup>
          );
        case MenuType.get("Submenu"):
          return (
            <SubMenu
              key={menu.key}
              title={
                <span>
                  {menu.icon && IconsMap.get(menu.icon)}
                  <span>{menu.name}</span>
                </span>
              }
            >
              {menu.children && menuMapper(menu.children)}
            </SubMenu>
          );
        // Default is same as
        // case(MenuType.get('Linkable')):
        default:
          return (
            <Item key={menu.key} onClick={() => history.push(menu.link)}>
              {menu.icon && IconsMap.get(menu.icon)}
              <span>{menu.name}</span>
            </Item>
          );
      }
    });
  };

  return (
    <Menu
      defaultSelectedKeys={["0"]}
      defaultOpenKeys={["a", "b"]}
      mode="inline"
      multiple={false}
      inlineCollapsed={open}
    >
      {menuMapper(MENUS)}
    </Menu>
  );
};

export default Menus;
