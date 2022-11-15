import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { CSSProperties } from 'react'
import { Me, Background, Banner } from '../assets'
import {
  BsGithub,
  BsTwitter,
  BsLinkedin,
  BsEnvelope,
  BsWhatsapp,
  BsPhone,
} from 'react-icons/bs'

const Home: NextPage = () => {
  const sectionStyles = {
    backgroundImage: `url(${Background.default.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } as CSSProperties
  return (
    <div>
      <Head>
        <title>Aboubakar Sidik Faha | Full-stack DevOps</title>
        <meta
          name="description"
          content="I'm an IT lover. Building great and helpful things is what makes me motivated."
        />{' '}
        <link rel="icon" href={Me.default.src} />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://aboubak.art" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Aboubakar Sidik Faha | Full-stack DevOps"
        />
        <meta
          property="og:description"
          content="I'm an IT lover. Building great and helpful things is what makes me motivated."
        />
        <meta
          property="og:image"
          content={'https://aboubak.art' + Banner.default.src}
        />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="aboubak.art" />
        <meta property="twitter:url" content="https://aboubak.art" />
        <meta
          name="twitter:title"
          content="Aboubakar Sidik Faha | Full-stack DevOps"
        />
        <meta
          name="twitter:description"
          content="I'm an IT lover. Building great and helpful things is what makes me motivated."
        />
        <meta
          name="twitter:image"
          content={'https://aboubak.art' + Banner.default.src}
        />
      </Head>

      <main>
        <section
          style={sectionStyles}
          className={`
            h-screen flex flex-col gap-3 items-center justify-center
            border-b-[15px] border-b-blue-500 p-5
          `}
        >
          <div
            className={`
            w-[250px] aspect-square rounded-full overflow-clip
            border-8 border-blue-500
            shadow-2xl
          `}
          >
            <Image priority src={Me} alt="Image of Aboubakar Sidik Faha" />
          </div>
          <h1 className="font-bold text-4xl text-center">
            Hi, am{' '}
            <strong className="text-blue-500">Aboubakar Sidik Faha</strong>.
          </h1>
          <div className="text-center">
            A <strong className="text-blue-500">Full-stack developer</strong>{' '}
            and <strong className="text-blue-500">DevOps</strong> Lover.
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <h2>Follow Me</h2>
                </td>
                <td>
                  <ul className="flex items-center gap-3 py-2">
                    <li>
                      <a
                        href="https://twitter.com/sidikfaha"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col gap-1 items-center text-xs"
                      >
                        <BsTwitter size={24} />
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/sidikfaha"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col gap-1 items-center text-xs"
                      >
                        <BsGithub size={24} />
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/in/fahasidik"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col gap-1 items-center text-xs"
                      >
                        <BsLinkedin size={24} />
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td>
                  <h2 className="pr-5">Get In Touch</h2>
                </td>
                <td>
                  <ul className="flex items-center gap-3">
                    <li>
                      <a
                        href="https://wa.me/message/SLCYFRPFTL7AO1"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col gap-1 items-center text-xs"
                      >
                        <BsWhatsapp size={24} />
                        Whatsapp
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+237679041867"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col gap-1 items-center text-xs"
                      >
                        <BsPhone size={24} />
                        Call
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:joefaha1@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col gap-1 items-center text-xs"
                      >
                        <BsEnvelope size={24} />
                        Email
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}

export default Home
