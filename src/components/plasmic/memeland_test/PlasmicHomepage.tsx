// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5VnySwGRBKmpnaR3N63wcy
// Component: T_wmH0VzCNqo
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
import NavigationBar from "../../NavigationBar"; // plasmic-import: CDeTIfElNW/component
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: 8N9-WfZSaq/codeComponent
import ProjectCell from "../../ProjectCell"; // plasmic-import: JlT0pA2N8X/component
import SiteCell from "../../SiteCell"; // plasmic-import: VBtFIihioZ/component
import Footer from "../../Footer"; // plasmic-import: i4UkpZ_8Of/component

import { useScreenVariants as useScreenVariantsy4OOpPP3O6Td } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: y4OOpP-P3O6TD/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_memeland_test.module.css"; // plasmic-import: 5VnySwGRBKmpnaR3N63wcy/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: T_wmH0VzCNqo/css

import DiscordIcon from "./icons/PlasmicIcon__Discord"; // plasmic-import: 5VdRTlS3g/icon
import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: OnIlz_C55/icon

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  content?: React.ReactNode;
};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "content"
);

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  blockNavigation?: p.Flex<"div">;
  navigationBar?: p.Flex<typeof NavigationBar>;
  blockHero?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  socialLink?: p.Flex<"div">;
  content?: p.Flex<"div">;
  paragraph?: p.Flex<"div">;
  blockProjects?: p.Flex<"div">;
  projectsList?: p.Flex<"div">;
  projectCell?: p.Flex<typeof ProjectCell>;
  blockRoadmaps?: p.Flex<"div">;
  roadmapList?: p.Flex<"div">;
  siteCell?: p.Flex<typeof SiteCell>;
  blockFootJokes?: p.Flex<"div">;
  blockFooter?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomepageProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  content?: React.ReactNode;
  className?: string;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

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
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
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
            data-plasmic-name={"blockNavigation"}
            data-plasmic-override={overrides.blockNavigation}
            className={classNames(projectcss.all, sty.blockNavigation)}
          >
            <NavigationBar
              data-plasmic-name={"navigationBar"}
              data-plasmic-override={overrides.navigationBar}
              className={classNames("__wab_instance", sty.navigationBar)}
            />
          </div>

          <p.Stack
            as={"div"}
            data-plasmic-name={"blockHero"}
            data-plasmic-override={overrides.blockHero}
            hasGap={true}
            className={classNames(projectcss.all, sty.blockHero)}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Meme\nland"}
            </h1>

            <p.Stack
              as={"div"}
              data-plasmic-name={"socialLink"}
              data-plasmic-override={overrides.socialLink}
              hasGap={true}
              className={classNames(projectcss.all, sty.socialLink)}
            >
              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__afKlp
                )}
              >
                <DiscordIcon
                  className={classNames(projectcss.all, sty.svg__g6Ywg)}
                  role={"img"}
                />
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__fPq2J
                )}
              >
                <TwitterIcon
                  className={classNames(projectcss.all, sty.svg__yPryA)}
                  role={"img"}
                />
              </a>
            </p.Stack>

            {true ? (
              <p.Stack
                as={"div"}
                data-plasmic-name={"content"}
                data-plasmic-override={overrides.content}
                hasGap={true}
                className={classNames(projectcss.all, sty.content)}
              >
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__khj2
                  )}
                >
                  {"Bring ownership to every community in the world."}
                </h2>

                {true ? (
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"paragraph"}
                    data-plasmic-override={overrides.paragraph}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.paragraph)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qbWmd
                      )}
                    >
                      {
                        "From the team that brought you 9GAG comes Memeland, a web3-focused venture studio. We are building and investing in social products for community, with community. We are connecting creators and communities together through creativity, $MEME, and NFTs."
                      }
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__daTi8
                      )}
                    >
                      {
                        "Enter soWhen we started 9GAG in 2008, we were nobody and we knew nothing. We joined 500 Startups in 2011, raised a seed funding, joined Y Combinator in 2012, and never stopped shipping. A decade later, we are still nobody, but 9GAG now has a global audience of 200 million across different social platforms."
                      }
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___9DBa4
                      )}
                    >
                      {
                        "Today, we are trying something new. With the help of blockchain technology, we want to invite you to join us and build our community and company, together. As with all things 9GAG, we like to under-promise and over-deliver. We don't know how big Memeland will become, but we promise we will give our best.me text"
                      }
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
            ) : null}
          </p.Stack>

          {true ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"blockProjects"}
              data-plasmic-override={overrides.blockProjects}
              hasGap={true}
              className={classNames(projectcss.all, sty.blockProjects)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__ug3Od
                )}
              >
                {"Our collections"}
              </h2>

              {true ? (
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"projectsList"}
                  data-plasmic-override={overrides.projectsList}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.projectsList)}
                >
                  <CmsQueryRepeater
                    className={classNames(
                      "__wab_instance",
                      sty.cmsDataLoader__eSiQa
                    )}
                    desc={false}
                    emptyMessage={
                      <ph.DataCtxReader>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___7KzI
                            )}
                          >
                            {"No matching published entries found."}
                          </div>
                        )}
                      </ph.DataCtxReader>
                    }
                    filterValue={"" as const}
                    forceEmptyState={false}
                    forceLoadingState={false}
                    limit={undefined}
                    loadingMessage={
                      <ph.DataCtxReader>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__pDbVu
                            )}
                          >
                            {"Loading..."}
                          </div>
                        )}
                      </ph.DataCtxReader>
                    }
                    noLayout={true}
                    orderBy={"id" as const}
                    table={"projectList" as const}
                    useDraft={false}
                  >
                    <ph.DataCtxReader>
                      {$ctx => (
                        <ProjectCell
                          data-plasmic-name={"projectCell"}
                          data-plasmic-override={overrides.projectCell}
                          className={classNames(
                            "__wab_instance",
                            sty.projectCell
                          )}
                          slot={p.renderPlasmicSlot({
                            defaultContents: (() => {
                              try {
                                return $ctx.plasmicCmsProjectListItem.data
                                  .title;
                              } catch (e) {
                                if (e instanceof TypeError) {
                                  return "You won't believe what happens next.";
                                }
                                throw e;
                              }
                            })(),
                            value: args.slot
                          })}
                          slot2={p.renderPlasmicSlot({
                            defaultContents: (() => {
                              try {
                                return $ctx.plasmicCmsProjectListItem.data
                                  .description;
                              } catch (e) {
                                if (e instanceof TypeError) {
                                  return "Enter some text";
                                }
                                throw e;
                              }
                            })(),
                            value: args.content,
                            className: classNames(sty.slotTargetContent)
                          })}
                        >
                          {p.renderPlasmicSlot({
                            defaultContents: (() => {
                              try {
                                return $ctx.plasmicCmsProjectListItem.data
                                  .subtitle;
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
                        </ProjectCell>
                      )}
                    </ph.DataCtxReader>
                  </CmsQueryRepeater>
                </p.Stack>
              ) : null}
            </p.Stack>
          ) : null}
          {true ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"blockRoadmaps"}
              data-plasmic-override={overrides.blockRoadmaps}
              hasGap={true}
              className={classNames(projectcss.all, sty.blockRoadmaps)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__zUgpT
                )}
              >
                {"In the works"}
              </h2>

              {true ? (
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"roadmapList"}
                  data-plasmic-override={overrides.roadmapList}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.roadmapList)}
                >
                  <CmsQueryRepeater
                    className={classNames(
                      "__wab_instance",
                      sty.cmsDataLoader__fJrlY
                    )}
                    desc={false}
                    emptyMessage={
                      <ph.DataCtxReader>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__qEhbB
                            )}
                          >
                            {"No matching published entries found."}
                          </div>
                        )}
                      </ph.DataCtxReader>
                    }
                    forceEmptyState={false}
                    forceLoadingState={false}
                    limit={0 as const}
                    loadingMessage={
                      <ph.DataCtxReader>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__oiGdw
                            )}
                          >
                            {"Loading..."}
                          </div>
                        )}
                      </ph.DataCtxReader>
                    }
                    noLayout={true}
                    orderBy={"id" as const}
                    table={"siteList" as const}
                    useDraft={false}
                  >
                    <ph.DataCtxReader>
                      {$ctx => (
                        <SiteCell
                          data-plasmic-name={"siteCell"}
                          data-plasmic-override={overrides.siteCell}
                          className={classNames("__wab_instance", sty.siteCell)}
                        />
                      )}
                    </ph.DataCtxReader>
                  </CmsQueryRepeater>
                </p.Stack>
              ) : null}
            </p.Stack>
          ) : null}

          <div
            data-plasmic-name={"blockFootJokes"}
            data-plasmic-override={overrides.blockFootJokes}
            className={classNames(projectcss.all, sty.blockFootJokes)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__u65Gt
              )}
            >
              {'"Never gonna give you up." 🕺'}
            </div>
          </div>

          <div
            data-plasmic-name={"blockFooter"}
            data-plasmic-override={overrides.blockFooter}
            className={classNames(projectcss.all, sty.blockFooter)}
          >
            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "blockNavigation",
    "navigationBar",
    "blockHero",
    "h1",
    "socialLink",
    "content",
    "paragraph",
    "blockProjects",
    "projectsList",
    "projectCell",
    "blockRoadmaps",
    "roadmapList",
    "siteCell",
    "blockFootJokes",
    "blockFooter",
    "footer"
  ],
  blockNavigation: ["blockNavigation", "navigationBar"],
  navigationBar: ["navigationBar"],
  blockHero: ["blockHero", "h1", "socialLink", "content", "paragraph"],
  h1: ["h1"],
  socialLink: ["socialLink"],
  content: ["content", "paragraph"],
  paragraph: ["paragraph"],
  blockProjects: ["blockProjects", "projectsList", "projectCell"],
  projectsList: ["projectsList", "projectCell"],
  projectCell: ["projectCell"],
  blockRoadmaps: ["blockRoadmaps", "roadmapList", "siteCell"],
  roadmapList: ["roadmapList", "siteCell"],
  siteCell: ["siteCell"],
  blockFootJokes: ["blockFootJokes"],
  blockFooter: ["blockFooter", "footer"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  blockNavigation: "div";
  navigationBar: typeof NavigationBar;
  blockHero: "div";
  h1: "h1";
  socialLink: "div";
  content: "div";
  paragraph: "div";
  blockProjects: "div";
  projectsList: "div";
  projectCell: typeof ProjectCell;
  blockRoadmaps: "div";
  roadmapList: "div";
  siteCell: typeof SiteCell;
  blockFootJokes: "div";
  blockFooter: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    blockNavigation: makeNodeComponent("blockNavigation"),
    navigationBar: makeNodeComponent("navigationBar"),
    blockHero: makeNodeComponent("blockHero"),
    h1: makeNodeComponent("h1"),
    socialLink: makeNodeComponent("socialLink"),
    content: makeNodeComponent("content"),
    paragraph: makeNodeComponent("paragraph"),
    blockProjects: makeNodeComponent("blockProjects"),
    projectsList: makeNodeComponent("projectsList"),
    projectCell: makeNodeComponent("projectCell"),
    blockRoadmaps: makeNodeComponent("blockRoadmaps"),
    roadmapList: makeNodeComponent("roadmapList"),
    siteCell: makeNodeComponent("siteCell"),
    blockFootJokes: makeNodeComponent("blockFootJokes"),
    blockFooter: makeNodeComponent("blockFooter"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
