"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkProps } from "next/link";
import { ReactNode } from "react";
import { ComponentProps } from "react";

type Props = LinkProps & Omit<ComponentProps<"a">,"className"> & {
  className: string | ((active:boolean) => string);
  children: ReactNode;
}

export const NavLink: React.FC<Props> = ({children,href,className,...rest}) => {
  const activePath = usePathname();

  const actualClass = typeof className === 'function' ? className(activePath === href || activePath === href + "/") : className;

  return (
    <Link href={href} {...rest} className={actualClass}>
      {children}
    </Link>
  );
};
