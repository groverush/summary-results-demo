import { Hero, Summary, Footer } from "./components"
const App = () => {
  return (
    <div className="h-screen w-screen min-w-[375px] font-hanken flex flex-col md:items-center justify-between md:pt-[150px]">
      <div className=" flex-row justify-center items-center w-full max-w-[420px] md:max-w-none mx-auto md:flex md:w-[700px] md:h-[400px] md:rounded-3xl md:justify-evenly">
        <Hero />
        <Summary />
      </div>
      <Footer />
    </div>
  )
}
export default App
