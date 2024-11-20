import aboutImg from "../assets/Readingbook.png"
import 'animate.css';
const AboutSection = () => {
    return (
        <div>
            <div className="hero mt-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="lg:w-1/2 w-full">
                    <img
                        src={aboutImg}
                        className="rounded-lg shadow-2xl" />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <h1 className="text-5xl font-bold text-fourth-color animate__jello">About Lesson</h1>
                        <div className="">
                        <ul className="py-4 space-y-2">
                                <h4 className="font-bold text-secound-color text-xl">Alphabet and Pronunciation</h4>
                                <li>Spanish has 27 letters in its alphabet, including (ñ.) Pronunciation is phonetic, meaning words are typically pronounced as they are written.</li>
                            </ul>
                            <ul className="py-4 space-y-2">
                                <h4 className="font-bold text-secound-color text-xl">Numbers and Colors</h4>
                                <li>Learn to count and name colors early on, as they are frequently used.</li>
                            </ul>
                            <ul className="py-4 space-y-2">
                                <h4 className="font-bold text-secound-color text-xl">Articles and Gender</h4>
                                <li>Spanish nouns have genders (masculine or feminine), and the articles change accordingly, e.g., el libro (the book, masculine), la mesa (the table, feminine).</li>
                            </ul>
                            <ul className="py-4 space-y-2">
                                <h4 className="font-bold text-secound-color text-xl">Adjectives Agreement</h4>
                                <li>Adjectives match the gender and number of the nouns they describe</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;