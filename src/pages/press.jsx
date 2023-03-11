import React from 'react'
import Layout from '../components/Layout';
import { HiArrowRight } from 'react-icons/hi';

export default function Press({ location }) {

    const articles = [
        {
            title: 'Change Makers: BUILD Nigeria',
            publisher: "Res Public",
            icon: "https://images.squarespace-cdn.com/content/v1/5feb13ab4b071c26bb0ebad0/f16e5999-6866-4c0e-9295-5603ac51433b/favicon.ico?format=100w",
            link: "https://respublicapolitics.com/interviews/change-makers-build-nigeria",
            excerpts: "In August 2020, Ife Adeogun, an undergraduate student at Yale, reached out to Tolulope Olasowere who is studying at Harvard University. Both not only share the experience to study at world-class institutions but also have the vision to support as many young and talented people from their home country in gaining access to top colleges and universities."
        }, {
            title: 'Rise For The World:  Betting on the exceptional and providing lifetime of educational and professional benefits to the World’s most-talented teens ',
            publisher: "Guardian Nigeria",
            icon: "https://media.licdn.com/dms/image/C4D0BAQHB6BXyOZgIMQ/company-logo_200_200/0/1600345728396?e=1686787200&v=beta&t=RPfdKawLUoAa32EKVaEscMwbsQATyC0IcDjVngIQZmI",
            link: "https://guardian.ng/features/rise-for-the-world-betting-on-the-exceptional-and-providing-lifetime-of-educational-and-professional-benefits-to-the-worlds-most-talented-teens/",
            excerpts: "Each year, Rise invites 15–17-year old’s from around the world to participate in the Rise 100 Challenge. A global initiative by Schmidt Futures and the Rhodes trust, Rise provides its 100 winners with lifelong benefits including scholarship, funding and career and job opportunities. The benefits of being a member of the Rise community lasts a lifetime."
        }, {
            title: 'BUILD Nigeria: Education Access to FGLI Nigerian Students',
            publisher: "BORGEN Magazine",
            icon: "https://www.borgenmagazine.com/wp-content/uploads/2013/01/cropped-Borgen_Magazine-32x32.png",
            link: "https://www.borgenmagazine.com/build-nigeria/",
            excerpts: "In 2018, Tolulope Olasewere left her home in Lagos, Nigeria for Cambridge, Massachusetts to start her first year at Harvard University. During her international orientation, the orientation leaders read out every country that the Harvard freshman hailed from. As the leaders read each country’s name, the students from that country cheered and shouted for their homes. "
        }, {
            title: 'Youth-led Nonprofit BUILD Nigeria commences Free Program for Low-Income Nigerian Students to Study at the World’s Best Universities',
            publisher: "Bellanaija.com",
            icon: "https://media.licdn.com/dms/image/C4D0BAQHKBj5GU-2RZQ/company-logo_200_200/0/1618410208363?e=1686787200&v=beta&t=FfjvdERz2l7viYUnbeoHDHojRmOfx9ePowjP55EMXDQ",
            link: "https://www.bellanaija.com/2021/08/build-nigeria/",
            excerpts: "On Monday July 5th, BUILD Nigeria, a registered youth-led nonprofit aiming to provide low-income Nigerian students with opportunities to study at world-class universities, began the summer portion of its inaugural Cohort College Access Program."
        },

    ]




    return (
        <Layout location={location} title="Press" description="">
            <section className="mx-auto py-10" id="hero">
                <h1 className="text-5xl font-serif font-bold">In the News ...</h1>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        articles.map((article, i) => (
                            <a href={article.link} target='_blank' key={i} className="bg-white shadow-md rounded p-4 relative">
                                <div className="flex items-center gap-4 mb-2">
                                    <img src={article.icon} alt="" className="h-8" />
                                    <h6 className="font-bold font-serif text-lg">{article.publisher}</h6>
                                </div>
                                <div className="mb-3 text-xl font-bold leading-tight">{article.title}</div>
                                <p className="text-base line-clamp-3">{article.excerpts}</p>

                                <div className="text-primary flex space-x-3 items-center mt-4 sticky bottom-0 font-bold"><span>Continue Reading </span><HiArrowRight size={20} /> </div>
                            </a>
                        ))
                    }

                </div>
            </section>
        </Layout>
    );
}