import styles from './app.module.scss';

import { Route } from 'react-router-dom';
import Nav from '../core-components/Nav';
import GamebookPage from '../pages/Gamebook/GamebookPage';
import GamebooksPage from '../pages/Gamebooks/GamebooksPage';
import ChapterPage from '../pages/Chapter/ChapterPage';
import AboutPage from '../pages/About/AboutPage';
import ReadGamebookPage from '../pages/ReadGamebook/ReadGamebookPage';

export function App() {
  return (
    <div className={styles.app}>
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
    </div>
  );
}

export default App;
