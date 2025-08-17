export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Course catalog
    if (url.pathname === '/') {
      const courses = [
        { id: 1, title: 'Introduction to Programming', category: 'Programming', thumbnail: 'course1.jpg' },
        { id: 2, title: 'Graphic Design Fundamentals', category: 'Design', thumbnail: 'course2.jpg' },
        { id: 3, title: 'Business Essentials', category: 'Business', thumbnail: 'course3.jpg' }
      ];

      return new Response(JSON.stringify({ courses }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Course details
    if (url.pathname.startsWith('/course/')) {
      const courseId = url.pathname.split('/')[2];
      const course = {
        id: 1,
        title: 'Introduction to Programming',
        category: 'Programming',
        thumbnail: 'course1.jpg',
        lessons: [
          { id: 1, title: 'Welcome to the Course', duration: '5:30' },
          { id: 2, title: 'Basic Syntax', duration: '12:00' },
          { id: 3, title: 'Control Flow', duration: '15:45' },
          { id: 4, title: 'Functions', duration: '18:20' }
        ]
      };

      return new Response(JSON.stringify(course), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Student dashboard
    if (url.pathname === '/dashboard') {
      const enrolledCourses = [
        { id: 1, title: 'Introduction to Programming', progress: 70 },
        { id: 2, title: 'Graphic Design Fundamentals', progress: 40 }
      ];

      return new Response(JSON.stringify({ enrolledCourses }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Search and filter
    if (url.pathname === '/search') {
      const { category, query } = Object.fromEntries(url.searchParams);
      const filteredCourses = [
        { id: 1, title: 'Introduction to Programming', category: 'Programming', thumbnail: 'course1.jpg' },
        { id: 3, title: 'Business Essentials', category: 'Business', thumbnail: 'course3.jpg' }
      ];

      return new Response(JSON.stringify({ courses: filteredCourses }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response('Not Found', { status: 404 });
  }
};