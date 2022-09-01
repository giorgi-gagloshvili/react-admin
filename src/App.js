import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Alert from './components/Alert';
import LessonsList from './components/Lessons';
import News from './components/News'
import Calendar from './components/Calendar'


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='pl-[232px]'>
        <Header />
        <main className="bg-[#f2f4fb] py-5 px-6">
          <Alert />
          <div className="flex w-full gap-5">
            <LessonsList />
            <Calendar />
          </div>
          <News />
        </main>
      </div>
    </div>
  );
}

export default App;
