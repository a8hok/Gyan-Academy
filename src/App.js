import { Route, Routes } from "react-router-dom";
//Pages
import CoursePage from "./GyanAcademyPages/coursePage/CoursePage";
import CourseVideoPage from "./GyanAcademyPages/courseVideoPage/CourseVideoPage";
import CourseLibrary from "./GyanAcademyPages/courseLibraryPage/courseLibrary";
import HomePage from "./GyanAcademyPages/HomePage/HomePage";
import ApplicationForm from "./GyanAcademyPages/applicationForm/ApplicationForm";
import GalleryPage from "./GyanAcademyPages/galleryPage/GalleryPage";
//components
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/NavBar";

function App() {

  return (
    <div className="font-poppins">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} exact></Route>
        <Route path="/course/content" element={<CourseVideoPage />}></Route>
        <Route path="/course/list" element={<CoursePage />}></Route>
        <Route path="/apply" element={<ApplicationForm />}></Route>
        <Route path="/course" element={<CourseLibrary />} exact></Route>
        <Route path="/gallery" element={<GalleryPage />} exact></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
