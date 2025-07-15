const students = [
    { id: 1, name: 'An', age: 16, gender: 'Nam', scores: [7, 8, 9] },
    { id: 2, name: 'Bình', age: 17, gender: 'Nam', scores: [6, 6, 5] },
    { id: 3, name: 'Cúc', age: 16, gender: 'Nữ', scores: [9, 9, 10] },
    { id: 4, name: 'Dương', age: 18, gender: 'Nữ', scores: [4, 5, 6] },
    { id: 5, name: 'E', age: 15, gender: 'Nam', scores: [10, 10, 10] }
];

// In ra tên và tuổi của từng học sinh
console.log("Tên: " + students[0].name + ", " + "Tuổi: " + students[0].age);
console.log("Tên: " + students[1].name + ", " + "Tuổi: " + students[1].age);
console.log("Tên: " + students[2].name + ", " + "Tuổi: " + students[2].age);
console.log("Tên: " + students[3].name + ", " + "Tuổi: " + students[3].age);
console.log("Tên: " + students[4].name + ", " + "Tuổi: " + students[4].age);

// Tạo mảng mới chứa tên học sinh kèm điểm trung bình của họ
const studentAvg = students.map(student => {
    const sum = student.scores.reduce((total, score) => total + score, 0);
    const avg = parseFloat((sum / student.scores.length).toFixed(2));
    return {
        name: student.name,
        avgScore: avg
    };
});
console.log(studentAvg);

// Lọc ra các học sinh có điểm trung bình >= 8
const topScore = students.filter(student => {
    const sum = student.scores.reduce((total, score) => total + score, 0);
    const avg = sum / student.scores.length;
    return avg >= 8;
});
console.log(topScore);

// Tìm học sinh đầu tiên có tuổi lớn hơn hoặc bằng 17
const firstStudent = students.find(student => student.age >= 17);
console.log("Học sinh đầu tiên có tuổi lớn hơn hoặc bằng 17:", firstStudent);

// Kiểm tra xem có học sinh nào có điểm trung bình dưới 5 không
const lowScore = students.some(student => {
    const sum = student.scores.reduce((total, score) => total + score, 0);
    const avg = sum / student.scores.length;
    return avg < 5;
});
console.log(lowScore);

// Kiểm tra xem tất cả học sinh có tuổi >= 15 không
const topAge = students.every(student => student.age >= 15);
console.log("Tất cả học sinh có tuổi >= 15: ", topAge);

// Tính điểm trung bình toàn bộ lớp
const averageScores = students.map(student => {
    const sum = student.scores.reduce((total, score) => total + score, 0);
    return sum / student.scores.length;
});
const totalOfAverages = averageScores.reduce((total, avg) => total + avg, 0);
const classAverage = totalOfAverages / students.length;
console.log("Điểm trung bình của cả lớp: ", classAverage);