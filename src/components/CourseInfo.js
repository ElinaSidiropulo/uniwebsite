import React from 'react';
import PropTypes from 'prop-types';

function CourseInfo({ courseName }) {
    return (
        <section id="course-info" className="sec-course py-12 bg-light text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-6">Course Information</h1>
                <div className="mb-4"/>
                <div className="flex justify-center">
                    <div className="max-w-xl">
                        <h2 className="text-2xl font-semibold mb-4">{courseName}</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Discover the details of the course <strong>{courseName}</strong>.
                            Frontend Development is the process of creating the user interface of web applications. The course covers key interface development technologies including HTML, CSS, JavaScript, and modern frameworks. Students will learn best practices for layout, working with the DOM, managing state, and interacting with the server via APIs. Adaptive design is emphasized to ensure correct display on a variety of devices.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

CourseInfo.propTypes = {
    courseName: PropTypes.string.isRequired,
};

export default CourseInfo;
