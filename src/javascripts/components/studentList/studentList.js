import './studentList.scss';
import utils from '../../helpers/util';

const createStudentList = (students) => {
  let domString = '<ul class="student-list">';
  students.forEach((student) => {
    domString += `${student.name}`;
  });
  domString += '<ul>';
  utils.printToDom('student-container', domString);
};

export default { createStudentList };
