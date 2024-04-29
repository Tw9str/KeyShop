import Image from "next/image";
import Link from "next/link";

export default function Product({ params }) {
  return (
    <div className="max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-20 mb-8 sm:mb-12 md:mb-20 px-4 sm:px-6 md:px-8">
      <h1 className="uppercase text-center mb-12 dark:text-white">
        Choose Your Desired card
      </h1>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        <article className="group basis-full xs:basis-[calc((100%/2)-1rem/2)] sm:basis-[calc((100%/3)-3rem/3)] md:basis-[calc((100%/4)-6rem/4)] drop-shadow-md p-4 bg-white/5 border border-white/5 backdrop-blur-xl rounded-lg">
          <Link className="flex flex-col gap-2" href="/category/product">
            <div className="relative rounded-lg drop-shadow aspect-[4/3]">
              <Image src="/steam.webp" alt="test" fill />
            </div>
            <section className="text-center uppercase dark:text-white">
              <h2 className="drop-shadow-md text-xl font-bold mb-1 group-hover:text-pink-500 duration-300">
                Steam
              </h2>
              <span className="drop-shadow-md">734</span>
            </section>
          </Link>
          <button className="text-white mt-2 w-full bg-pink-500 hover:bg-pink-600 p-2 rounded-lg duration-300">
            Add To Cart
          </button>
        </article>
        <article className="group basis-full xs:basis-[calc((100%/2)-1rem/2)] sm:basis-[calc((100%/3)-3rem/3)] md:basis-[calc((100%/4)-6rem/4)] drop-shadow-md p-4 bg-white/5 border border-white/5 backdrop-blur-xl rounded-lg">
          <Link className="flex flex-col gap-2" href="/category/product">
            <div className="relative rounded-lg drop-shadow aspect-[4/3]">
              <Image src="/steam.webp" alt="test" fill />
            </div>
            <section className="text-center uppercase dark:text-white">
              <h2 className="drop-shadow-md text-xl font-bold mb-1 group-hover:text-pink-500 duration-300">
                Steam
              </h2>
              <span className="drop-shadow-md">734</span>
            </section>
          </Link>
          <button className="text-white mt-2 w-full bg-pink-500 hover:bg-pink-600 p-2 rounded-lg duration-300">
            Add To Cart
          </button>
        </article>
        <article className="group basis-full xs:basis-[calc((100%/2)-1rem/2)] sm:basis-[calc((100%/3)-3rem/3)] md:basis-[calc((100%/4)-6rem/4)] drop-shadow-md p-4 bg-white/5 border border-white/5 backdrop-blur-xl rounded-lg">
          <Link className="flex flex-col gap-2" href="/category/product">
            <div className="relative rounded-lg drop-shadow aspect-[4/3]">
              <Image src="/steam.webp" alt="test" fill />
            </div>
            <section className="text-center uppercase dark:text-white">
              <h2 className="drop-shadow-md text-xl font-bold mb-1 group-hover:text-pink-500 duration-300">
                Steam
              </h2>
              <span className="drop-shadow-md">734</span>
            </section>
          </Link>
          <button className="text-white mt-2 w-full bg-pink-500 hover:bg-pink-600 p-2 rounded-lg duration-300">
            Add To Cart
          </button>
        </article>
        <article className="group basis-full xs:basis-[calc((100%/2)-1rem/2)] sm:basis-[calc((100%/3)-3rem/3)] md:basis-[calc((100%/4)-6rem/4)] drop-shadow-md p-4 bg-white/5 border border-white/5 backdrop-blur-xl rounded-lg">
          <Link className="flex flex-col gap-2" href="/category/product">
            <div className="relative rounded-lg drop-shadow aspect-[4/3]">
              <Image src="/steam.webp" alt="test" fill />
            </div>
            <section className="text-center uppercase dark:text-white">
              <h2 className="drop-shadow-md text-xl font-bold mb-1 group-hover:text-pink-500 duration-300">
                Steam
              </h2>
              <span className="drop-shadow-md">734</span>
            </section>
          </Link>
          <button className="text-white mt-2 w-full bg-pink-500 hover:bg-pink-600 p-2 rounded-lg duration-300">
            Add To Cart
          </button>
        </article>
        <article className="group basis-full xs:basis-[calc((100%/2)-1rem/2)] sm:basis-[calc((100%/3)-3rem/3)] md:basis-[calc((100%/4)-6rem/4)] drop-shadow-md p-4 bg-white/5 border border-white/5 backdrop-blur-xl rounded-lg">
          <Link className="flex flex-col gap-2" href="/category/product">
            <div className="relative rounded-lg drop-shadow aspect-[4/3]">
              <Image src="/steam.webp" alt="test" fill />
            </div>
            <section className="text-center uppercase dark:text-white">
              <h2 className="drop-shadow-md text-xl font-bold mb-1 group-hover:text-pink-500 duration-300">
                Steam
              </h2>
              <span className="drop-shadow-md">734</span>
            </section>
          </Link>
          <button className="text-white mt-2 w-full bg-pink-500 hover:bg-pink-600 p-2 rounded-lg duration-300">
            Add To Cart
          </button>
        </article>
      </div>
    </div>
  );
}
