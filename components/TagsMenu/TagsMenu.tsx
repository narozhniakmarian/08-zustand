"use client";

import Link from "next/link";
import css from "./Tagsmenu.module.css";
import { useState, useEffect, useRef } from "react";
import { tags } from "@/constants/tags";

const TagsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={css.menuContainer} ref={menuRef}>
      <button className={css.menuButton} onClick={toggle}>
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          {tags.map((el) => (
            <li className={css.menuItem} key={el}>
              <Link
                href={
                  el === "All" ? "/notes/filter/All" : `/notes/filter/${el}`
                }
                className={css.menuLink}
                onClick={() => setIsOpen(false)}
              >
                {el}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
