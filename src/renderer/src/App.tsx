import { RootLayout, Sidebar } from './components/app-layout'

function App() {
  return (
    <RootLayout>
      <Sidebar className="p-2 border-4 border-red-500">SideBar</Sidebar>
      <Sidebar className="border-4 border-blue-500">Content</Sidebar>
    </RootLayout>
  )
}

export default App
