import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import CyberBackground from "./components/ui/CyberBackground";
import BootScreen from "./components/ui/BootScreen";

function App() {
  return (
    <>
      <BootScreen />

      <CyberBackground />

      <MainLayout>
        <Dashboard />
      </MainLayout>
    </>
  );
}

export default App;
