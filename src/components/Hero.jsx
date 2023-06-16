import { styles } from "../styles"

const Hero = () => {
  return (
    <section
      className={`${styles.gradients.backgroundGradient} h-[40%]  rounded-b-3xl md:rounded-3xl flex flex-col items-center gap-4 pt-2 md:h-[100%] md:w-[50%] md:pt-8`}
    >
      <h3 className="text-violet-200 text-md font-semibold md:text-lg">
        Your Result
      </h3>

      <div
        className={`${styles.gradients.circleGradient} text-center rounded-full py-6 px-8 md:py-8 md:px-10 shadow-xl shadow-indigo-900/40`}
      >
        <h2 className="text-white text-5xl md:text-[58px] font-bold">76</h2>
        <p className="text-gray-300 text-sm font-semibold opacity-50">of 100</p>
      </div>
      <div className="text-center">
        <h3 className="text-white text-xl font-semibold mt-1 md:mt-3 md:text-2xl">
          Great
        </h3>
        <p className="text-violet-200 w-[280px] mt-2 md:w-[220px] md:mt-4">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  )
}
export default Hero
