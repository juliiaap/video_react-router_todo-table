import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { MainNav } from './components/MainNav';

export const App = () => {
  return <>
    <MainNav />

    <div className="section">
      <Outlet />
    </div>
  </>;
};
