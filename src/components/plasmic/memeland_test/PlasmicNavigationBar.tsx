// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5VnySwGRBKmpnaR3N63wcy
// Component: CDeTIfElNW
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

import { useScreenVariants as useScreenVariantsy4OOpPP3O6Td } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: y4OOpP-P3O6TD/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_memeland_test.module.css"; // plasmic-import: 5VnySwGRBKmpnaR3N63wcy/projectcss
import sty from "./PlasmicNavigationBar.module.css"; // plasmic-import: CDeTIfElNW/css

import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: ULoaFsFVk/icon
import memecoinWLtlMNkGm from "./images/memecoin.gif"; // plasmic-import: wLtlMNkGM/picture

export type PlasmicNavigationBar__VariantMembers = {};
export type PlasmicNavigationBar__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavigationBar__VariantsArgs;
export const PlasmicNavigationBar__VariantProps = new Array<VariantPropType>();

export type PlasmicNavigationBar__ArgsType = {};
type ArgPropType = keyof PlasmicNavigationBar__ArgsType;
export const PlasmicNavigationBar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavigationBar__OverridesType = {
  root?: p.Flex<"div">;
  layoutContainer?: p.Flex<"div">;
  leftHandSide2?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  rightHandSide2?: p.Flex<"div">;
  links?: p.Flex<"div">;
  menuButton?: p.Flex<"a">;
  svg?: p.Flex<"svg">;
};

export interface DefaultNavigationBarProps {
  className?: string;
}

function PlasmicNavigationBar__RenderFunc(props: {
  variants: PlasmicNavigationBar__VariantsArgs;
  args: PlasmicNavigationBar__ArgsType;
  overrides: PlasmicNavigationBar__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsy4OOpPP3O6Td()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"layoutContainer"}
        data-plasmic-override={overrides.layoutContainer}
        className={classNames(projectcss.all, sty.layoutContainer)}
      >
        <div
          data-plasmic-name={"leftHandSide2"}
          data-plasmic-override={overrides.leftHandSide2}
          className={classNames(projectcss.all, sty.leftHandSide2)}
        >
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___64Qhh
            )}
          >
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"40px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"none" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"40px" as const}
              loading={"lazy" as const}
              src={{
                src: memecoinWLtlMNkGm,
                fullWidth: 150,
                fullHeight: 2400,
                aspectRatio: undefined
              }}
            />
          </a>
        </div>

        <div
          data-plasmic-name={"rightHandSide2"}
          data-plasmic-override={overrides.rightHandSide2}
          className={classNames(projectcss.all, sty.rightHandSide2)}
        >
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"links"}
              data-plasmic-override={overrides.links}
              hasGap={true}
              className={classNames(projectcss.all, sty.links)}
            >
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__xs5EJ
                  )}
                  href={`/demo-terms`}
                >
                  {"Memeland"}
                </a>
              ) : null}

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__nQVoK
                )}
                href={"" as const}
              >
                {"MVP"}
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__oyaAx
                )}
                href={"" as const}
              >
                {"Potatoz"}
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__mG1Xz
                )}
                href={"" as const}
              >
                {"Captainz"}
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__gnLpR
                )}
                href={"" as const}
              >
                {"Growing"}
              </a>
            </p.Stack>
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <a
              data-plasmic-name={"menuButton"}
              data-plasmic-override={overrides.menuButton}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.menuButton
              )}
            >
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <MenuIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              ) : null}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "layoutContainer",
    "leftHandSide2",
    "img",
    "rightHandSide2",
    "links",
    "menuButton",
    "svg"
  ],
  layoutContainer: [
    "layoutContainer",
    "leftHandSide2",
    "img",
    "rightHandSide2",
    "links",
    "menuButton",
    "svg"
  ],
  leftHandSide2: ["leftHandSide2", "img"],
  img: ["img"],
  rightHandSide2: ["rightHandSide2", "links", "menuButton", "svg"],
  links: ["links"],
  menuButton: ["menuButton", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  layoutContainer: "div";
  leftHandSide2: "div";
  img: typeof p.PlasmicImg;
  rightHandSide2: "div";
  links: "div";
  menuButton: "a";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavigationBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavigationBar__VariantsArgs;
    args?: PlasmicNavigationBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavigationBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavigationBar__ArgsType,
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
          internalArgPropNames: PlasmicNavigationBar__ArgProps,
          internalVariantPropNames: PlasmicNavigationBar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavigationBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavigationBar";
  } else {
    func.displayName = `PlasmicNavigationBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavigationBar = Object.assign(
  // Top-level PlasmicNavigationBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    layoutContainer: makeNodeComponent("layoutContainer"),
    leftHandSide2: makeNodeComponent("leftHandSide2"),
    img: makeNodeComponent("img"),
    rightHandSide2: makeNodeComponent("rightHandSide2"),
    links: makeNodeComponent("links"),
    menuButton: makeNodeComponent("menuButton"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicNavigationBar
    internalVariantProps: PlasmicNavigationBar__VariantProps,
    internalArgProps: PlasmicNavigationBar__ArgProps
  }
);

export default PlasmicNavigationBar;
/* prettier-ignore-end */
