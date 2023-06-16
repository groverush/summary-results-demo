const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full bg-gray-950 text-white py-3">
      <p className="text-sm text-center">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/home"
          className="font-semibold text-indigo-400"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . <br className="sm:hidden" />
        Coded by{" "}
        <a
          href="https://app.netlify.com/teams/groverush/overview"
          className="font-semibold text-indigo-400"
          target="_blank"
        >
          Julian Monroy
        </a>
        .
      </p>
    </footer>
  )
}
export default Footer
