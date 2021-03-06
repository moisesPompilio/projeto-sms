import Header from "./components/Header"
import NotificationButton from "./components/Notification-Button"
import SalesCard from "./components/SalesCard"


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container"></div>
          <SalesCard/>
        </section>
      </main>
    </>

  )
}

export default App
