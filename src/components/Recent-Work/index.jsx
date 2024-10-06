import { PiArrowUpRightThin } from 'react-icons/pi';
import BlurFade from '../ui/blur-fade';
import Safari from '../ui/safari';
import { Badge } from '../ui/badge';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Github } from 'lucide-react';

const Projects = () => {
  return (
    <section className=" gap  my-16 grid-cols-2 flex-col gap-x-3 gap-y-6 sm:grid">
      <BlurFade key={1} delay={0.25 + 1 * 0.05} inView>
        <div className="relative flex flex-col justify-start">
          <Safari
            src={'/videos/AF.gif'}
            url="aelzel.com"
            className="size-full"
          />
          <div className="">
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-2  text-xs"></div>
              <div className="project-title  text-black ">
                <a target="_blank" href="https://github.com/Sammk21/AfStore">
                  <div className="group flex w-[100%] items-center  gap-x-3">
                    <div className=" cursor-pointer rounded-full bg-white px-3 py-4 drop-shadow-sm">
                      AELZEL
                    </div>
                    <div className=" flex h-fit cursor-pointer items-center justify-center rounded-full bg-white p-4 text-2xl drop-shadow-sm ">
                      <PiArrowUpRightThin className="stroke-black " />
                    </div>
                    <div className="flex items-center text-3xl text-white ">
                      <Github size={30} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
      <BlurFade key={2} delay={0.25 + 2 * 0.05} inView>
        <div className="relative mt-5 flex flex-col justify-start sm:mt-0">
          <Safari
            src={'/Movie.gif'}
            url="dividebyzero.com"
            className="size-full"
          />
          <div className="">
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-2  text-xs"></div>
              <div className="project-title  text-black ">
                <a
                  target="_blank"
                  href="https://github.com/Sammk21/dbz-store-of"
                >
                  <div className="group flex w-[100%] items-center  gap-x-3">
                    <div className=" cursor-pointer rounded-full bg-white px-3 py-4 drop-shadow-sm">
                      Divide by zero
                    </div>
                    <div className=" flex h-fit cursor-pointer items-center justify-center rounded-full bg-white p-4 text-2xl drop-shadow-sm ">
                      <PiArrowUpRightThin className="stroke-black " />
                    </div>
                    <div className="flex items-center text-3xl text-white ">
                      <Github size={30} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
      <BlurFade key={2} delay={0.25 + 2 * 0.05} inView>
        <div className="relative mt-5 flex flex-col justify-start sm:mt-0">
          <Safari
            src={'/images/onlyeducation.webp'}
            url="onlyeducation.in"
            className="size-full"
          />
          <div className="">
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-2  text-xs"></div>
              <div className="project-title  text-black ">
                <a target="_blank" href="https://onlyeducation.in">
                  <div className="group flex w-[100%] items-center  gap-x-3">
                    <div className=" cursor-pointer rounded-full bg-white px-3 py-4 drop-shadow-sm">
                      Only Education
                    </div>
                    <div className=" flex h-fit cursor-pointer items-center justify-center rounded-full bg-white p-4 text-2xl drop-shadow-sm ">
                      <PiArrowUpRightThin className="stroke-black " />
                    </div>
                    <div className="flex items-center">
                      <div class="loader py-2 ">
                        <div class="circle">
                          <div class="dot"></div>
                          <div class="outline"></div>
                        </div>
                      </div>
                      <Badge
                        className="bg-rose-300 text-rose-600 outline-red"
                        variant="outline"
                      >
                        Live
                      </Badge>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};
export default Projects;
