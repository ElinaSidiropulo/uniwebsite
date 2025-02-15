import React, { useState } from 'react';

function CourseEnrollment() {
    const [students, setStudents] = useState([]);
    const [inputId, setInputId] = useState('');

    const handleAddStudent = () => {
        if (inputId && !students.includes(inputId)) {
            setStudents([...students, inputId]);
            setInputId('');
        } else {
            alert('This ID is already enrolled or invalid.');
        }
    };

    const handleRemoveStudent = (id) => {
        setStudents(students.filter(studentId => studentId !== id));
    };

    return (
        <section id="enrollment" className="sec-enrollment py-12 bg-gray-100 text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-6">Course Enrollment</h1>
                <div className="mb-4"/>
                <div className="flex flex-col items-center">
                    <input
                        type="text"
                        placeholder="Enter Student ID"
                        value={inputId}
                        onChange={(e) => setInputId(e.target.value)}
                        className="form-control mb-4 w-64 p-2 border border-gray-400 rounded"
                    />
                    <button
                        onClick={handleAddStudent}
                        className="btn btn-primary mb-4"
                    >
                        Enroll Student
                    </button>
                    <ul className="student-list">
                        {students.map(id => (
                            <li key={id} className="flex items-center justify-between border p-2 rounded shadow">
                                <span className="mr-4">Student ID: {id}</span> {/* Добавляем отступ справа */}
                                <button
                                    onClick={() => handleRemoveStudent(id)}
                                    className="btn btn-danger"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>

                </div>
                <p className="mt-6">Total Enrolled Students: {students.length}</p>
            </div>
        </section>
    );
}

export default CourseEnrollment;
