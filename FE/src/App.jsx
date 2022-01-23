import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./app.scss"
import Navbar from './components/navbar/Navbar';
import Courses from './pages/courses/Courses';
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import SingleCoursePage from './pages/SingleCourse/index';
import TeacherHomePage from './pages/TeacherPage/pages/home/TeacherHome';
import TeacherCoursePage from './pages/TeacherPage/pages/productList/TeacherProductList';
import TeacherNewCoursePage from './pages/TeacherPage/pages/newProduct/TeacherNewProduct';
import TeacherProduct from './pages/TeacherPage/pages/product/TeacherProduct';
import TeacherLogin from './pages/loginTeacher/LoginTeacher'
import UserProfile from './pages/UserProfile/UserProfile';
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess';
import Class from './pages/class/Class';
import TeacherClassList from './pages/TeacherPage/pages/class/TeacherClassList';
import TeacherNewClass from './pages/TeacherPage/pages/newClass/TeacherNewClass';
// const SingleProductPage = lazy(() => import("./pages/SingleCourse/index"))

const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/log-in" exact component={Login} />
          <Route path="/register" exact component={SignUp} />
          <Route path="/single-product/:id" exact component={SingleCoursePage} />
          <Route path="/teacher-dashboard" exact component={TeacherHomePage} />
          <Route path="/teacher-course/:id" exact component={TeacherCoursePage} />
          <Route path="/teacher-class/:id" exact component={TeacherClassList} />
          <Route path="/teacher-new-course" exact component={TeacherNewCoursePage} />
          <Route path="/teacher-new-class" exact component={TeacherNewClass} />
          <Route path="/update-class/:id" exact component={TeacherProduct} />
          <Route path="/login-teacher" exact component={TeacherLogin} />
          <Route path="/user" exact component={UserProfile} />
          <Route path="/payment-success" exact component={PaymentSuccess} />
          <Route path="/classes" exact component={Class} />
        </Switch>
      </Router>
    </>
  );
};

export default App;