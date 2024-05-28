import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout/Layout";
import AdminProtected from "./protected/AdminProtected";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBlogs from "./pages/admin/AdminBlogs";
import AdminLogin from "./pages/admin/AdminLogin";
import {
  Beauty,
  BlogDetails,
  Entertainment,
  Fashion,
  Health,
  Home,
  Horoscope,
  Korean,
  LifeStyle,
  Select,
  Sports,
} from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/entertainment"
            element={
              <Layout>
                <Entertainment />
              </Layout>
            }
          />

          <Route
            path="/lifestyle"
            element={
              <Layout>
                <LifeStyle />
              </Layout>
            }
          />
          <Route
            path="/sports"
            element={
              <Layout>
                <Sports />
              </Layout>
            }
          />
          <Route
            path="/korean"
            element={
              <Layout>
                <Korean />
              </Layout>
            }
          />
          <Route
            path="/select"
            element={
              <Layout>
                <Select />
              </Layout>
            }
          />
          <Route
            path="/fashion"
            element={
              <Layout>
                <Fashion />
              </Layout>
            }
          />
          <Route
            path="/health"
            element={
              <Layout>
                <Health />
              </Layout>
            }
          />
          <Route
            path="/beauty"
            element={
              <Layout>
                <Beauty />
              </Layout>
            }
          />
          <Route
            path="/horoscope"
            element={
              <Layout>
                <Horoscope />
              </Layout>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <Layout>
                <BlogDetails />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AdminProtected>
                <AdminDashboard />
              </AdminProtected>
            }
          />
          <Route
            path="/dashboard/blogs"
            element={
              <AdminProtected>
                <AdminBlogs />
              </AdminProtected>
            }
          />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="*" element={<p>Route not found</p>} />
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          theme="light"
        />
      </BrowserRouter>
    </>
  );
}

export default App;
