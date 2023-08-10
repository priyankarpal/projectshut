'use client'
import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type MotionTags = "div" | "a" | "p" | "h1" | "h2" | "button" | "section";

type MotionComponent<T extends MotionTags> = React.ForwardRefRenderFunction<
  Element,
  HTMLMotionProps<T>
>;

export const createMotionComponent = <T extends MotionTags>(
  tag: T
): MotionComponent<T> => {
  const MotionTag = motion[tag] as any;

  const MotionComponent: MotionComponent<T> = (
    { className, children, ...props },
    ref
  ) => {
    return (
      <MotionTag className={className} {...props} ref={ref}>
        {children}
      </MotionTag>
    );
  };

  MotionComponent.displayName = `Motion.${tag}`;

  return MotionComponent;
};

export const MotionDiv = React.forwardRef(createMotionComponent("div"));
export const MotionA = React.forwardRef(createMotionComponent("a"));
export const MotionP = React.forwardRef(createMotionComponent("p"));
export const MotionH1 = React.forwardRef(createMotionComponent("h1"));
export const MotionH2 = React.forwardRef(createMotionComponent("h2"));
export const MotionButton = React.forwardRef(createMotionComponent("button"));
export const MotionSection = React.forwardRef(createMotionComponent("section"));
