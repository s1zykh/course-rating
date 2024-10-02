import React, { ReactNode } from "react";
import cn from "classnames";

import styles from "./Tag.module.scss";

type SizeType = "s" | "m";
type ColorType = "ghost" | "red" | "grey" | "green" | "primary";

interface TagProps {
  className?: string;
  size?: SizeType;
  color?: ColorType;
  href?: string;
  children: ReactNode;
}

const clsx = (size: SizeType, color: ColorType) => {
  return cn(styles.tag, {
    [styles.s]: size === "s",
    [styles.m]: size === "m",
    [styles.ghost]: color === "ghost",
    [styles.red]: color === "red",
    [styles.grey]: color === "grey",
    [styles.green]: color === "green",
    [styles.primary]: color === "primary",
  });
};

const TagContent = (children: ReactNode, href: string) => {
  return <>{href ? <a href={href}>{children}</a> : <>{children}</>}</>;
};

export const Tag = (props: TagProps) => {
  const {
    size = "m",
    color = "ghost",
    children,
    href = "",
    ...tagProps
  } = props;
  return (
    <div className={clsx(size, color)} {...tagProps}>
      {TagContent(children, href)}
    </div>
  );
};
