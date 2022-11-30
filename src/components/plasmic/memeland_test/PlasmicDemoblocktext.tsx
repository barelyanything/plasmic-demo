// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5VnySwGRBKmpnaR3N63wcy
// Component: qDmInQgC8z
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_memeland_test.module.css"; // plasmic-import: 5VnySwGRBKmpnaR3N63wcy/projectcss
import sty from "./PlasmicDemoblocktext.module.css"; // plasmic-import: qDmInQgC8z/css

export type PlasmicDemoblocktext__VariantMembers = {};
export type PlasmicDemoblocktext__VariantsArgs = {};
type VariantPropType = keyof PlasmicDemoblocktext__VariantsArgs;
export const PlasmicDemoblocktext__VariantProps = new Array<VariantPropType>();

export type PlasmicDemoblocktext__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicDemoblocktext__ArgsType;
export const PlasmicDemoblocktext__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicDemoblocktext__OverridesType = {
  root?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultDemoblocktextProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

function PlasmicDemoblocktext__RenderFunc(props: {
  variants: PlasmicDemoblocktext__VariantsArgs;
  args: PlasmicDemoblocktext__ArgsType;
  overrides: PlasmicDemoblocktext__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <h1
        data-plasmic-name={"h1"}
        data-plasmic-override={overrides.h1}
        className={classNames(projectcss.all, projectcss.h1, sty.h1)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Title",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </h1>

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Enter some text",
          value: args.slot,
          className: classNames(sty.slotTargetSlot)
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1", "freeBox"],
  h1: ["h1"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDemoblocktext__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDemoblocktext__VariantsArgs;
    args?: PlasmicDemoblocktext__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDemoblocktext__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDemoblocktext__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicDemoblocktext__ArgProps,
          internalVariantPropNames: PlasmicDemoblocktext__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicDemoblocktext__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDemoblocktext";
  } else {
    func.displayName = `PlasmicDemoblocktext.${nodeName}`;
  }
  return func;
}

export const PlasmicDemoblocktext = Object.assign(
  // Top-level PlasmicDemoblocktext renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicDemoblocktext
    internalVariantProps: PlasmicDemoblocktext__VariantProps,
    internalArgProps: PlasmicDemoblocktext__ArgProps
  }
);

export default PlasmicDemoblocktext;
/* prettier-ignore-end */
