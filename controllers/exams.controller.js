
var ExamRepository = require('../repositories/exam.repositories.js');
var examRepositories=(new ExamRepository())
var examList= examRepositories.getList();
var propertiesForUpdate = ['description', 'numerotasks'];
var idSequence = 1000;
//GET EXAMS LIST FOR STUDENT AND TEACHER
function getExamsList()
{
  return examRepositories.getList();
}
module.exports = {getExamsList}
