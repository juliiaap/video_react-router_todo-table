import ReactDOM from 'react-dom/client';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';
import { App } from './App';
import { TodosPage } from "./pages/TodosPage";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="todo">
          <Route index element={<TodosPage />} />
          <Route path=":todoId" element={<TodosPage />} />
        </Route>

        <Route index element={<h1 className="title">Home Page</h1>} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Root />);
