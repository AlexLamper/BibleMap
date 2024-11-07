"use client";

import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { FaCirclePlay } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";

type ImageProps = {
  src: string;
  alt?: string;
};

type VideoProps = {
  image: ImageProps;
  url: string;
};

type TabProps = {
  heading: string;
  description: string;
  image?: ImageProps;
  video?: VideoProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  tabs: TabProps[];
  buttons: ButtonProps[];
};

export type FeaturesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Features = (props: FeaturesProps) => {
  const { tagline, heading, description, tabs, buttons } = {
    ...FeaturesDefaults,
    ...props,
  } as Props;
  const [activeTab, setActiveTab] = useState(0);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 md:w-auto lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 grid grid-cols-1 items-center gap-x-4 ">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={clsx("cursor-pointer py-4 pl-6 md:pl-8", {
                  "border-l-2 border-black": activeTab === index,
                  "border-l-2 border-transparent": activeTab !== index,
                })}
              >
                <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {tab.heading}
                </h3>
                <p>{tab.description}</p>
              </div>
            ))}
          </div>
          <div className="max-size-full flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              {tabs.map((tab, index) => {
                if (activeTab !== index) return null;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0 }}
                  >
                    {tab.image && (
                      <img
                        src={tab.image.src}
                        alt={tab.image.alt}
                        className="size-full object-cover rounded-xl"
                      />
                    )}
                    {tab.video && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="relative flex w-full items-center justify-center">
                            <img
                              src={tab.video.image.src}
                              alt={tab.video.image.alt}
                              className="size-full object-cover rounded-xl"
                            />
                            <FaCirclePlay className="absolute z-20 size-16 text-white" />
                            <span className="absolute inset-0 z-10 bg-black/50 rounded-xl" />
                          </div>
                        </DialogTrigger>
                        <DialogPortal>
                          <DialogOverlay className="bg-black/90" />
                          <DialogContent>
                            {!isIframeLoaded && (
                              <CgSpinner className="mx-auto size-16 animate-spin text-white" />
                            )}
                            <iframe
                              className={clsx(
                                "z-0 mx-auto aspect-video size-full md:w-[738px] lg:w-[940px]",
                                {
                                  visible: isIframeLoaded,
                                  hidden: !isIframeLoaded,
                                },
                              )}
                              src={tab.video.url}
                              allow="autoplay; encrypted-media; picture-in-picture"
                              allowFullScreen
                              onLoad={() => setIsIframeLoaded(true)}
                            ></iframe>
                          </DialogContent>
                        </DialogPortal>
                      </Dialog>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

export const FeaturesDefaults: FeaturesProps = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  tabs: [
    {
      heading: "Short heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      image: {
        src: "/images/features/feature3.jpg",
        alt: "Relume placeholder image 1",
      },
    },
    {
      heading: "Short heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      video: {
        image: {
          src: "/images/features/feature1.jpg",
          alt: "Relume placeholder image 2",
        },
        url: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
      },
    },
    {
      heading: "Short heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      image: {
        src: "/images/features/feature1.jpg",
        alt: "Relume placeholder image 3",
      },
    },
  ],
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
};
