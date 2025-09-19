import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Award,
  User,
  Bell,
  Download,
  CheckCircle,
  AlertCircle
} from "lucide-react";

// Sample data - in real app, this would come from Supabase
const mockStudent = {
  id: "STU001",
  name: "Alice Johnson",
  email: "alice.johnson@student.edu",
  course: "Computer Science",
  semester: "Fall 2024",
  gpa: 3.85,
  attendance: 92.5
};

const mockCourses = [
  { 
    id: "CS101", 
    name: "Introduction to Programming", 
    instructor: "Dr. Smith", 
    progress: 85, 
    grade: "A-",
    nextClass: "Tomorrow 9:00 AM"
  },
  { 
    id: "CS102", 
    name: "Data Structures", 
    instructor: "Prof. Johnson", 
    progress: 72, 
    grade: "B+",
    nextClass: "Today 2:00 PM"
  },
  { 
    id: "CS103", 
    name: "Database Systems", 
    instructor: "Dr. Wilson", 
    progress: 90, 
    grade: "A",
    nextClass: "Friday 11:00 AM"
  },
];

const mockAttendance = [
  { date: "2024-01-15", status: "present", course: "CS101" },
  { date: "2024-01-15", status: "present", course: "CS102" },
  { date: "2024-01-14", status: "absent", course: "CS103" },
  { date: "2024-01-14", status: "present", course: "CS101" },
  { date: "2024-01-13", status: "present", course: "CS102" },
];

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-soft">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-success rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-success-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Student Portal</h1>
                <p className="text-sm text-muted-foreground">Welcome back, {mockStudent.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="student">
                <Download className="w-4 h-4 mr-2" />
                Download Transcript
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Student Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-medium hover:shadow-large transition-smooth bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Current GPA
              </CardTitle>
              <Award className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{mockStudent.gpa}</div>
              <p className="text-xs text-success flex items-center gap-1 mt-1">
                <CheckCircle className="w-3 h-3" />
                Dean's List
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-large transition-smooth bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Attendance Rate
              </CardTitle>
              <Calendar className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{mockStudent.attendance}%</div>
              <p className="text-xs text-success flex items-center gap-1 mt-1">
                <CheckCircle className="w-3 h-3" />
                Excellent attendance
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-large transition-smooth bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Enrolled Courses
              </CardTitle>
              <BookOpen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{mockCourses.length}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {mockStudent.semester}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-large transition-smooth bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Next Class
              </CardTitle>
              <Clock className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-foreground">CS102</div>
              <p className="text-xs text-warning flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3" />
                In 3 hours
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Courses */}
          <Card className="shadow-large bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Current Courses</CardTitle>
              <CardDescription>Your enrolled courses for {mockStudent.semester}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockCourses.map((course) => (
                <div
                  key={course.id}
                  className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-fast"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-foreground">{course.name}</h3>
                      <p className="text-sm text-muted-foreground">{course.id} • {course.instructor}</p>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {course.grade}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-foreground font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.nextClass}
                    </span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Attendance */}
          <Card className="shadow-large bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Recent Attendance</CardTitle>
              <CardDescription>Your attendance record for the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockAttendance.map((record, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border border-border bg-card/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        record.status === 'present' ? 'bg-success' : 'bg-destructive'
                      }`} />
                      <div>
                        <span className="font-medium text-foreground">{record.course}</span>
                        <p className="text-sm text-muted-foreground">{record.date}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={record.status === 'present' ? 'default' : 'destructive'}
                      className={record.status === 'present' ? 'bg-success text-success-foreground' : ''}
                    >
                      {record.status === 'present' ? 'Present' : 'Absent'}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline">
                  View Full Attendance
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;