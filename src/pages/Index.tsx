// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-primary/10 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-glow mb-6">
          <svg
            className="w-10 h-10 text-primary-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">Student Management System</h1>
        <p className="text-xl text-muted-foreground mb-8">Your comprehensive educational management solution</p>
        <div className="flex gap-4 justify-center">
          <a 
            href="/admin" 
            className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-gradient-primary text-primary-foreground font-medium shadow-medium hover:shadow-glow transition-smooth hover:scale-[1.02]"
          >
            Admin Login
          </a>
          <a 
            href="/student" 
            className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-gradient-success text-success-foreground font-medium shadow-medium hover:shadow-glow transition-smooth hover:scale-[1.02]"
          >
            Student Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
