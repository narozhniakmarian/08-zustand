import Link from "next/link";
import css from "./SidebarNotes.module.css";
import { tags } from "@/constants/tags";
import AnimatedLink from "./AnimatedLink/AnimatedLink";

const SidebarNotes = () => {
  return (
    <div>
      <ul className={css.menuList}>
        {tags.map((el) => (
          <li className={css.menuItem} key={el}>
            <AnimatedLink
              href={`/notes/filter/${el}`}
              text={el}
              className={css.menuLink}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNotes;
