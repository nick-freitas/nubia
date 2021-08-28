import './reset.css';
import './reset-ckeditor.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Nav from './core-components/Nav';
import GamebookPage from './pages/Gamebook/GamebookPage';
import GamebooksPage from './pages/Gamebooks/GamebooksPage';
import ChapterPage from './pages/Chapter/ChapterPage';
import AboutPage from './pages/About/AboutPage';
import ReadGamebookPage from './pages/ReadGamebook/ReadGamebookPage';

/*
  https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example/tree/master/?from-embed=&file=/src/features/counter/counterSlice.js
  https://redux.js.org/tutorials/essentials/part-2-app-structure

  Left off, just downloaded
  https://github.com/uber/react-digraph
*/
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="bg-gray-200 min-h-screen">
          <Nav></Nav>
          <main className="p-8 ">
            <Route path="/" exact>
              <GamebooksPage />
            </Route>

            <Route path="/about" component={AboutPage} />
            <Route
              path="/read-gamebooks/:gamebookId"
              component={ReadGamebookPage}
              exact
            />
            <Route
              path="/read-gamebooks/:gamebookId/:chapterId"
              component={ReadGamebookPage}
              exact
            />
            <Route path="/gamebooks/:id" component={GamebookPage} exact />
            <Route
              path="/gamebooks/:gamebookId/edit-chapter/:chapterId"
              component={ChapterPage}
            />
          </main>
        </div>
      </Router>
    </Provider>
  );
}
