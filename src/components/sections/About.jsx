import Container from "../utils/Container"
import SectionTitle from "../utils/SectionTitle"

const About = () => {
  return (
    <section id="about">
      <Container>
        <SectionTitle title="About Us.">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci consequuntur, consequatur quia reprehenderit ducimus.
        </SectionTitle>
        <main className="flex flex-col gap-10 lg:flex-row justify-center items-center">
          <div className="grid gap-5 sm:grid-cols-2 flex-[2]">
            <figure className="relative">
              <img src="https://ivkovic.me/themes/min/static/media/person01.09d2aa97.png" alt="Team Member" className="w-full" />
              <figcaption className="absolute bottom-0 left-0 bg-secondary px-4 py-2 w-[80%]">
                <h3 className="font-bold">Luke Skywalker</h3>
                <span className="text-xs">Web Designer</span>
              </figcaption>
            </figure>
            <figure className="relative">
              <img src="https://ivkovic.me/themes/min/static/media/person02.5ca453ab.png" alt="Team Member" className="w-full" />
              <figcaption className="absolute bottom-0 left-0 bg-secondary px-4 py-2 w-[80%]">
                <h3 className="font-bold">Han Solo</h3>
                <span className="text-xs">Graphic Designer</span>
              </figcaption>
            </figure>
          </div>
          <div className="text-center lg:text-start flex-[1]">
            <h1 className="text-xl font-bold mb-4">Little About Us.</h1>
            <p className="text-sm mb-4 leading-[2]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="text-sm hover:text-secondary">Read More</a>
          </div>
        </main>
      </Container>
    </section>
  )
}

export default About