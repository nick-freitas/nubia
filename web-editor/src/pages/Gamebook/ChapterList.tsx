import { Link } from 'react-router-dom';
import ChapterModel from '../../models/Chapter.model';
import { IDestroyChapter, IUpdateChapter } from '../../actions/chapter.actions';
import StartingChapterStar from './StartingChapterStar';
import { TrashIcon } from '../../core-components/Icons';

interface ChapterListProps {
  destroyChapter: IDestroyChapter;
  updateChapter: IUpdateChapter;
  gamebookId: number;
  chapters: ChapterModel[];
}

const ChapterList = (props: ChapterListProps) => {
  const changeStartingChapter = async (
    newStartingChapterId: number,
    startingChapterId: number | undefined
  ) => {
    if (startingChapterId) {
      await props.updateChapter(startingChapterId, { startingChapter: false });
    }

    await props.updateChapter(newStartingChapterId, { startingChapter: true });
  };

  return (
    <div className="bg-white shadow my-6">
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left w-full">Title</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {props?.chapters?.map((chapter, _, chapters) => (
            <tr
              className="border-b border-gray-200 hover:bg-gray-100"
              key={`chapter_${chapter.id}`}
            >
              <td className="py-3 px-6 text-left whitespace-nowrap-1">
                <div className="flex items-center">
                  <StartingChapterStar
                    chapter={chapter}
                    chapters={chapters}
                    changeStartingChapter={changeStartingChapter}
                  ></StartingChapterStar>
                  <Link
                    to={`/gamebooks/${props.gamebookId}/edit-chapter/${chapter.id}`}
                  >
                    <span className="font-medium pl-2">{chapter.title}</span>
                  </Link>
                </div>
              </td>
              <td className="py-3 px-6 text-center w-full">
                <div className="flex item-center justify-center cursor-pointer">
                  <div
                    className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 "
                    onClick={() => props.destroyChapter(chapter.id)}
                  >
                    <TrashIcon></TrashIcon>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChapterList;
