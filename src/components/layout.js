import Footer from "./Footer"
import Header from "./Header"
import { Container } from "@mui/material"


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}