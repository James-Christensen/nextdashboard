import "./globals.css";
import Footer from "../../components/Footer";
import AppBar from "../../components/AppBar";

export const metadata = {
  title: "Sales Dashboard",
  description: "Sales Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="business" className="m-0 h-screen" lang="en">
      <body>
        <div className="flex flex-col w-full h-screen ">
          <AppBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
