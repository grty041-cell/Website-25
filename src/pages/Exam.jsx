import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import ExamResourceLibrary from '../components/resources/ExamResourceLibrary';

const Exam = () => {
  return (
    <div>
      <PageTitle title="Resources" desc="Find resources for various exams here" />
      <ExamResourceLibrary />
    </div>
  );
};

export default Exam;
