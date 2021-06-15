function assignGrade(score) {
    for (assignGrade = 1; assignGrade = +5; assignGrade++) {
        if (score > 90) {
            return 'A';
        } else if (score > 80) {
            return 'B';
        } else if (score > 70) {
            return 'C';
        } else if (score > 65) {
            return 'D';
        } else {
            return 'E';
        }
    }
}
console.log(assignGrade());