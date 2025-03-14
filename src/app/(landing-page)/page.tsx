import PostsSection from "./components/PostsSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="relative">
        <div
          className="
        opacity-10"
        >
          <div className="absolute top-0 right-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-purple-700/50 rounded-full blur-3xl"></div>
          <div className="absolute top-4 right-4 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-purple-500/60 rounded-full blur-2xl"></div>
          <div className="absolute top-8 right-8 sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-purple-400/70 rounded-full blur-xl"></div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-center">
          Software Engineer and
          <span className="block text-purple-600">Frontend Web Developer</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 leading-8">
          Hello! I&apos;m Mahadi Indra, a passionate Front End Web Developer
          with 3 years of experience in crafting dynamic and user-friendly web
          applications. I love transforming ideas into seamless digital
          experiences.
        </p>
        <div className="flex mt-10 gap-4">
          <button className="px-5 py-5 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 hover:cursor-pointer">
            About Me
          </button>
          <button className="px-5 py-5 rounded-lg border border-gray-600  font-medium hover:border-purple-500 hover:cursor-pointer">
            Contact Me
          </button>
        </div>
      </div>
      <ProjectSection />
      <PostsSection />
    </div>
  );
}
