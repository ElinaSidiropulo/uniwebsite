import React from 'react';

function AboutSection() {
    return (
        <section id="about" className="sec-about py-12 bg-gray-100 text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-6">About the University</h1>
                <hr className="border-t-2 border-gray-300 mb-8" />
                <div className="flex justify-center">
                    <div className="max-w-xl">
                        <p className="text-lg leading-relaxed text-gray-700">
                            International University of Information Technology ensures that institutional, procedural and cultural requirements for quality teaching and successful learning are met. The mission of IUIT is to build competencies in the field of digital economy and society. For 10 years of development, IUIT has been able to firmly enter the ranking of the best technical universities in the country. The University is constantly working to improve the quality of educational services and ensure high potential of the teaching staff.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
