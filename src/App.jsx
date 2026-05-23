import './App.css'
import Navbar from './componets/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 px-4 md:px-16">
        <h1 className="text-3xl font-semibold text-gray-800">Welcome to QuickStay</h1>
        <p className="mt-2 text-gray-600">Your hotel booking app is running.</p>
      </main>
    </div>
  )
}

export default App
