import React from 'react';
import './index.scss';
import { address } from "addresses/path";
import { Navigation } from "shared";
import { SearchInput } from '../inputSearch';
import { UserInfo } from "../userInfo";


export const NAVIGATION_TAB_ITEMS = [
  {
    link: address.main,
    title: "Главное",
  },
  {
    link: address.genres,
    title: "Жанры",
  }
];

export const Header = () => (
    <header className="header">
      <div className="header__left">
        {/* <SearchInput className="search__input-area" placeholder="Трек, альбом, исполнитель, подкаст" /> */}
        <Navigation content={NAVIGATION_TAB_ITEMS} />
      </div>
      <UserInfo className="user-info__info" />
    </header>
  );

