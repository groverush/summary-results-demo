import Category from "./Category"

const Summary = () => {
  return (
    <section className="flex flex-col  px-8 py-4 md:w-[50%] ">
      <h3 className="font-bold text-gray-950">Summary</h3>

      <Category />

      <button
        className={`mt-5 bg-gradient-to-b from-blue-900/80 to-gray-900/80 hover:from-violet-600 hover:to-blue-600 p-4 rounded-3xl text-white font-semibold w-full max-w-[300px] mx-auto`}
      >
        Continue
      </button>
    </section>
  )
}
export default Summary
