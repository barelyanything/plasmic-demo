// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5VnySwGRBKmpnaR3N63wcy
// Component: JlT0pA2N8X
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
import sty from "./PlasmicProjectCell.module.css"; // plasmic-import: JlT0pA2N8X/css

export type PlasmicProjectCell__VariantMembers = {};
export type PlasmicProjectCell__VariantsArgs = {};
type VariantPropType = keyof PlasmicProjectCell__VariantsArgs;
export const PlasmicProjectCell__VariantProps = new Array<VariantPropType>();

export type PlasmicProjectCell__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicProjectCell__ArgsType;
export const PlasmicProjectCell__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicProjectCell__OverridesType = {
  root?: p.Flex<"div">;
  background?: p.Flex<typeof p.PlasmicImg>;
  shade?: p.Flex<"div">;
  content?: p.Flex<"div">;
  subtitle?: p.Flex<"div">;
  title?: p.Flex<"h3">;
  description?: p.Flex<"div">;
  buttonContainer?: p.Flex<"div">;
  link?: p.Flex<"a">;
};

export interface DefaultProjectCellProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  className?: string;
}

function PlasmicProjectCell__RenderFunc(props: {
  variants: PlasmicProjectCell__VariantsArgs;
  args: PlasmicProjectCell__ArgsType;
  overrides: PlasmicProjectCell__OverridesType;

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
      <p.PlasmicImg
        data-plasmic-name={"background"}
        data-plasmic-override={overrides.background}
        alt={""}
        className={classNames(sty.background)}
        displayHeight={"auto" as const}
        displayMaxHeight={"none" as const}
        displayMaxWidth={"none" as const}
        displayMinHeight={"100%" as const}
        displayMinWidth={"100%" as const}
        displayWidth={"100%" as const}
        loading={"lazy" as const}
        src={(() => {
          try {
            return $ctx.plasmicCmsProjectListItem.data.thumbnail.url;
          } catch (e) {
            if (e instanceof TypeError) {
              return undefined;
            }
            throw e;
          }
        })()}
      />

      <div
        data-plasmic-name={"shade"}
        data-plasmic-override={overrides.shade}
        className={classNames(projectcss.all, sty.shade)}
      />

      {true ? (
        <div
          data-plasmic-name={"content"}
          data-plasmic-override={overrides.content}
          className={classNames(projectcss.all, sty.content)}
        >
          <div
            data-plasmic-name={"subtitle"}
            data-plasmic-override={overrides.subtitle}
            className={classNames(projectcss.all, sty.subtitle)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (() => {
                try {
                  return $ctx.plasmicCmsProjectListItem.data.subtitle;
                } catch (e) {
                  if (e instanceof TypeError) {
                    return "Enter some text";
                  }
                  throw e;
                }
              })(),
              value: args.children,
              className: classNames(sty.slotTargetChildren)
            })}
          </div>

          <h3
            data-plasmic-name={"title"}
            data-plasmic-override={overrides.title}
            className={classNames(projectcss.all, projectcss.h3, sty.title)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (() => {
                try {
                  return $ctx.plasmicCmsProjectListItem.data.title;
                } catch (e) {
                  if (e instanceof TypeError) {
                    return "You won't believe what happens next.";
                  }
                  throw e;
                }
              })(),
              value: args.slot,
              className: classNames(sty.slotTargetSlot)
            })}
          </h3>

          <div
            data-plasmic-name={"description"}
            data-plasmic-override={overrides.description}
            className={classNames(projectcss.all, sty.description)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (() => {
                try {
                  return $ctx.plasmicCmsProjectListItem.data.description;
                } catch (e) {
                  if (e instanceof TypeError) {
                    return "Enter some text";
                  }
                  throw e;
                }
              })(),
              value: args.slot2,
              className: classNames(sty.slotTargetSlot2)
            })}
          </div>
        </div>
      ) : null}
      {true ? (
        <div
          data-plasmic-name={"buttonContainer"}
          data-plasmic-override={overrides.buttonContainer}
          className={classNames(projectcss.all, sty.buttonContainer)}
        >
          {(() => {
            try {
              return (
                $ctx.plasmicCmsProjectListItem.data.learnMoreUrl.length > 1
              );
            } catch (e) {
              if (e instanceof TypeError) {
                return false;
              }
              throw e;
            }
          })() ? (
            <a
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link
              )}
              href={(() => {
                try {
                  return $ctx.plasmicCmsProjectListItem.data.learnMoreUrl;
                } catch (e) {
                  if (e instanceof TypeError) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
            >
              {"Learn more"}
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "background",
    "shade",
    "content",
    "subtitle",
    "title",
    "description",
    "buttonContainer",
    "link"
  ],
  background: ["background"],
  shade: ["shade"],
  content: ["content", "subtitle", "title", "description"],
  subtitle: ["subtitle"],
  title: ["title"],
  description: ["description"],
  buttonContainer: ["buttonContainer", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  background: typeof p.PlasmicImg;
  shade: "div";
  content: "div";
  subtitle: "div";
  title: "h3";
  description: "div";
  buttonContainer: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProjectCell__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProjectCell__VariantsArgs;
    args?: PlasmicProjectCell__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProjectCell__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProjectCell__ArgsType,
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
          internalArgPropNames: PlasmicProjectCell__ArgProps,
          internalVariantPropNames: PlasmicProjectCell__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicProjectCell__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjectCell";
  } else {
    func.displayName = `PlasmicProjectCell.${nodeName}`;
  }
  return func;
}

export const PlasmicProjectCell = Object.assign(
  // Top-level PlasmicProjectCell renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    background: makeNodeComponent("background"),
    shade: makeNodeComponent("shade"),
    content: makeNodeComponent("content"),
    subtitle: makeNodeComponent("subtitle"),
    title: makeNodeComponent("title"),
    description: makeNodeComponent("description"),
    buttonContainer: makeNodeComponent("buttonContainer"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicProjectCell
    internalVariantProps: PlasmicProjectCell__VariantProps,
    internalArgProps: PlasmicProjectCell__ArgProps
  }
);

export default PlasmicProjectCell;
/* prettier-ignore-end */
