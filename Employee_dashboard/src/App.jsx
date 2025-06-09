import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <Dashboard />
      </main>
    </div>
  )
}

export default App