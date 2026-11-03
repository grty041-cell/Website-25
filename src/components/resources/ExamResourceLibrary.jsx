import React, { useState } from 'react';
import { FiArrowLeft, FiArrowUpRight, FiBookOpen, FiFileText, FiFolder, FiMap } from 'react-icons/fi';
import examResources from '../../assets/fake-data/exam-resources';
import './ExamResourceLibrary.scss';

const resourceCategories = [
  { key: 'pyq', title: 'PYQ', action: 'Open PYQs', detail: 'Previous year questions', Icon: FiFileText },
  { key: 'materials', title: 'Resources', action: 'Open Resources', detail: 'Study materials and references', Icon: FiFolder },
  { key: 'syllabus', title: 'Syllabus', action: 'View Syllabus', detail: 'Topics and exam coverage', Icon: FiBookOpen },
  { key: 'roadmap', title: 'Roadmap & General Guide', action: 'Open Roadmap & Guide', detail: 'Preparation roadmap and guidance', Icon: FiMap },
];

function ExamResourceLibrary() {
  const [selectedExam, setSelectedExam] = useState(null);

  return (
    <section className="exam-resource-library" aria-labelledby="exam-resource-title">
      <div className="exam-resource-library__inner">
        {selectedExam ? (
          <div className="exam-resource-library__detail" aria-live="polite">
            <button
              className="exam-resource-library__back"
              type="button"
              onClick={() => setSelectedExam(null)}
            >
              <FiArrowLeft aria-hidden="true" />
              <span>Back to all exams</span>
            </button>

            <div className="exam-resource-library__heading">
              <p className="exam-resource-library__eyebrow">EXAM RESOURCE LIBRARY</p>
              <h2 id="exam-resource-title">{selectedExam.name}</h2>
              <p>Choose a collection to continue your preparation.</p>
            </div>

            <div className="exam-resource-library__resource-grid">
              {resourceCategories.map(({ key, title, action, detail, Icon }) => (
                <article className="exam-resource-library__resource" key={key}>
                  <div className="exam-resource-library__resource-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div className="exam-resource-library__resource-copy">
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </div>
                  <a
                    className="exam-resource-library__open"
                    href={selectedExam.resources[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${action}: ${selectedExam.name}`}
                  >
                    <span>{action}</span>
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="exam-resource-library__heading">
              <p className="exam-resource-library__eyebrow">YOUR NEXT STEP STARTS HERE</p>
              <h2 id="exam-resource-title">Exam-wise resources</h2>
              <p>Select an exam to explore its preparation collections.</p>
            </div>

            <div className="exam-resource-library__exam-grid">
              {examResources.map((exam, index) => (
                <button
                  className="exam-resource-library__exam"
                  type="button"
                  key={exam.name}
                  onClick={() => setSelectedExam(exam)}
                  aria-label={`View ${exam.name} resources`}
                >
                  <span className="exam-resource-library__exam-number">0{index + 1}</span>
                  <span className="exam-resource-library__exam-name">{exam.name}</span>
                  <span className="exam-resource-library__exam-cta">
                    Explore resources <FiArrowUpRight aria-hidden="true" />
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default ExamResourceLibrary;