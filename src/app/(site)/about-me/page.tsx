/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Button from "@/components/buttons/button";
import Container from "@/components/container";
import Smoother from "@/components/motions/smoother";
import TextDescription from "@/components/texts/text-description";
import TextLegend from "@/components/texts/text-legend";
import TextMain from "@/components/texts/text-main";
import { PAGE_CONTENT_ABOUT_ME } from "@/enums/page-content";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export interface AboutMeProps {}

const AboutMe = (props: AboutMeProps) => {
  return (
    <>
      <Smoother.ScrollSection className="w-full h-[calc(80vh-72px)] flex items-center justify-center">
        <Container>
          <TextLegend className="mb-12">About me</TextLegend>
          <TextMain className="mb-10">
            Hello, I'm Duong Duc Trong <br /> a Front-End Developer
          </TextMain>
          <TextDescription>
            with 3 years of experience. I have a passion for contributing to
            open-source projects
            <br /> and developing high-quality products.
          </TextDescription>
        </Container>
      </Smoother.ScrollSection>

      <Smoother.ScrollSection
        className="min-h-[90vh] flex items-center justify-center"
        sectionInnerProps={{ className: "h-full" }}
      >
        <Container className="flex gap-24">
          <div className="flex-1 overflow-hidden">
            <Image
              src="/avatar-full.png"
              alt="Avatar"
              width={500}
              height={500}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-medium leading-normal	-tracking-tighter text-4xl mb-8 uppercase">
              MORE ABOUT ME
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
              I always enjoy taking on new challenges and pushing myself to the
              limit. My goal is always to provide elegant & fast solutions to
              clients.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
              Being listed on DesignRush's prestigious collection of the best
              website designs is a testament to the quality and creativity of my
              work.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-16">
              Whether you are a small business owner, a startup, or an
              individual in need of a personal website, I am here to transform
              your vision into a captivating online presence. Let's collaborate
              and bring your digital dreams to life!
            </p>
            <Button className="min-w-[170px] mb-16">
              Get in touch. <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <div className="flex items-center gap-6">
              <div className="inline-flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4" />
                Linked In
              </div>
              <div className="inline-flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4" />
                Twitter
              </div>
              <div className="inline-flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4" />
                Github
              </div>
            </div>
          </div>
        </Container>
      </Smoother.ScrollSection>

      <Smoother.ScrollSection className="py-24 flex items-center">
        <Container>
          <TextLegend>My journey</TextLegend>
          <TextMain className="mb-12">Work Experience</TextMain>

          {PAGE_CONTENT_ABOUT_ME.WORKS_EXPERIENCE.map((content) => (
            <div
              key={content.id}
              className="flex items-start justify-start mb-20 gap-4"
            >
              <div className="flex items-center w-full max-w-[400px]">
                <p className="w-full text-2xl font-light text-gray-400 dark:text-gray-500">
                  {content.date}
                </p>
                {/* <div className="w-full h-[1px] border-t border-solid border-gray-50"></div> */}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  {content.name}
                </h2>
                <p className="text-base font-normal text-gray-400 dark:text-gray-500 mb-4">
                  {content.position}
                </p>
                <p
                  className="text-md font-normal text-gray-600 dark:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: content.description }}
                ></p>
              </div>
            </div>
          ))}
        </Container>
      </Smoother.ScrollSection>

      <Smoother.ScrollSection className="py-24 flex items-center">
        <Container>
          <TextLegend>Skill</TextLegend>
          <TextMain className="mb-12">
            I contribute to company goals through technical skills in product
            development and outsourcing
          </TextMain>

          <div className="grid grid-cols-4">
            <p className="text-lg font-medium mb-2">React.js</p>
            <p className="text-lg font-medium mb-2">Next.js</p>
            <p className="text-lg font-medium mb-2">Remix.run</p>
            <p className="text-lg font-medium mb-2">Tailwind.CSS</p>
            <p className="text-lg font-medium mb-2">SASS</p>
            <p className="text-lg font-medium mb-2">GSAP</p>
            <p className="text-lg font-medium mb-2">Typescript</p>
            <p className="text-lg font-medium mb-2">Vue.js</p>
            <p className="text-lg font-medium mb-2">Laravel</p>
            <p className="text-lg font-medium mb-2">Problem Solving</p>
          </div>
          {/* {PAGE_CONTENT_ABOUT_ME.WORKS_EXPERIENCE.map((content) => (
            <div>12</div>
          ))} */}
        </Container>
      </Smoother.ScrollSection>

      {/* <Smoother.ScrollSection asHorizontalScroll>
        <div className="flex">
          <div className="min-w-[500px] h-[500px]"></div>
          <div className="relative min-w-[500px] h-[500px]">
            <div className="w-4 h-4 rounded-full dark:bg-white absolute top-1/2 left-0 transform -translate-y-1/2"></div>
            <div className="w-full h-[1px] bg-white absolute top-1/2 left-0"></div>

            <div className="text-center absolute w-full top-[calc(50%-112px-24px)] left-1/2 -translate-x-1/2">
              <p className="text-lg font-medium mb-2">Software Engineer</p>
              <h2 className="text-3xl font-bold mb-4">Whammy Tech</h2>
              <p className="text-base font-normal dark:text-gray-500">
                09/2022 - Present
              </p>
            </div>
          </div>
          <div className="relative min-w-[500px] h-[500px]">
            <div className="w-4 h-4 rounded-full dark:bg-white absolute top-1/2 left-0 transform -translate-y-1/2"></div>
            <div className="w-full h-[1px] bg-white absolute top-1/2 left-0"></div>

            <div className="text-center absolute w-full top-[calc(50%+24px)] left-1/2 -translate-x-1/2">
              <p className="text-base font-normal dark:text-gray-500 mb-2">
                04/2021 - 09/2022
              </p>
              <h2 className="text-3xl font-bold mb-4">RIO Technology</h2>
              <p className="text-lg font-medium mb-2">Fullstack Developer</p>
            </div>
          </div>
          <div className="relative min-w-[500px] h-[500px]">
            <div className="w-4 h-4 rounded-full dark:bg-white absolute top-1/2 left-0 transform -translate-y-1/2"></div>
            <div className="w-full h-[1px] bg-white absolute top-1/2 left-0"></div>

            <div className="text-center absolute w-full top-[calc(50%-112px-24px)] left-1/2 -translate-x-1/2">
              <p className="text-lg font-medium mb-2">Frontend Developer</p>
              <h2 className="text-3xl font-bold mb-4">Anflash Technology</h2>
              <p className="text-base font-normal dark:text-gray-500">
                04/2020 - 04/2021
              </p>
            </div>
          </div>
          <div className="relative min-w-[500px] h-[500px]">
            <div className="w-4 h-4 rounded-full dark:bg-white absolute top-1/2 left-0 transform -translate-y-1/2"></div>
            <div className="w-full h-[1px] bg-white absolute top-1/2 left-0"></div>

            <div className="text-center absolute w-full top-[calc(50%+24px)] left-1/2 -translate-x-1/2">
              <p className="text-base font-normal dark:text-gray-500 mb-2">
                02/2020 - 04/2022
              </p>
              <h2 className="text-3xl font-bold mb-4">Kha Kim</h2>
              <p className="text-lg font-medium mb-2">Front-end Developer</p>
            </div>
          </div>
        </div>
      </Smoother.ScrollSection> */}
    </>
  );
};

export default AboutMe;