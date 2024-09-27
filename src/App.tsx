import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from './hooks/redux';
import { CreateNoteModal, TagsModal } from './components';
import Sidebar from './layout/Sidebar/sidebar';
import Navbar from './layout/Navbar/Navbar';
import AllNotes from './pages/AllNotes/AllNotes';
import ArchiveNotes from './pages/ArchiveNotes/ArchiveNotes';
import TrashNotes from './pages/TrashNotes/TrashNotes';
import TagNotes from './pages/TagNotes/TagNotes';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { ToastContainer } from 'react-toastify';

function App() {

  const {viewEditTagsModal, viewCreateNoteModal} = useAppSelector((state => state.modal))

  return (
    <div className="app">
      {viewCreateNoteModal && <CreateNoteModal />}
      {viewEditTagsModal && <TagsModal type='edit' />}

      <ToastContainer
        position='bottom-right'
        theme='light'
        pauseOnHover
        autoClose={1500}
      />

      <BrowserRouter>
        <Sidebar />
        <div className="app__container">
          <Navbar />
          <Routes>
            <Route path='/' element={<AllNotes />} />
            <Route path='/archive' element={<ArchiveNotes />} />
            <Route path='/trash' element={<TrashNotes />} />
            <Route path='/tag/:name' element={<TagNotes />} />
            <Route path='/404' element={<ErrorPage />} />
            <Route path='/*' element={<Navigate to ={"/404"} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div> 
  )
}

export default App;
