var question = [];
question['software-engineer'] = ['Ta medhu'];
question['teacher'] = ['Ta hedn huuhedtei ve'];
question['driver'] = ['Ta ymr mashintai ve'];

function interviewQuestion(job) {
    return function (name) {
        console.log(name + ', ' + question[job]);
    }
}
interviewQuestion('software-engineer')('Mr.DJ');
interviewQuestion('teacher')('Mr.DJ');
interviewQuestion('driver')('Mr.DJ');