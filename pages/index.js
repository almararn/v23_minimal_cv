import Image from "next/image"
import data from "../data.json"
import Cv from "../components/Cv"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <div className="flex items-center">
        <Image
          className="rounded-full border-4 border-slate-400 mt-6 ml-6"
          src={data.photo}
          width={200}
          height={200}
          alt="Picture of author"
          priority={true}
        />
        <div className="pl-8 pt-6 font-poppins">
          <h1 className="text-4xl font-semibold drop-shadow-lg text-red-600 pr-4">
            {data.name}
          </h1>
          <h2 className="text-slate-200 text-lg drop-shadow-lg pr-4">
            {data.funfact}
          </h2>
          <div className="mr-4">
            <div className="w-full h-1 bg-slate-400 rounded-xl mt-2" />
          </div>
        </div>
      </div>
      <div className="mx-14 mt-12 mb-10 font-poppins">
        {data.cv.map((cv) => (
          <Cv
            title={cv.title}
            description={cv.description}
            date={cv.date}
            key={cv.id}
          ></Cv>
        ))}
      </div>
      <Footer />
    </>
  )
}
