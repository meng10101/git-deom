import React from 'react';

const Schedule = () => {
  const courses = [
    { time: '9:00 AM - 10:00 AM', course: '数学' },
    { time: '10:15 AM - 11:15 AM', course: '英语' },
    { time: '11:30 AM - 12:30 PM', course: '物理' },
    { time: '1:30 PM - 2:30 PM', course: '化学' },
    { time: '2:45 PM - 3:45 PM', course: '历史' },
  ];

  return (
    <div>
      <h1>课程表</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>时间</th>
            <th>课程</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.time}</td>
              <td>{course.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;