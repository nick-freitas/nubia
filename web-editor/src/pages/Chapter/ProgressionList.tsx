import { Card, CardContent, Typography } from '@material-ui/core';
import {
  IUpdateProgression,
  IDestroyProgression,
} from '../../actions/progression.actions';
import ProgressionModel from '../../models/Progression.model';
import ChapterModel from '../../models/Chapter.model';
import Progression from './Progression';

interface ProgressionListProps {
  goToProgressions: ProgressionModel[];
  getToProgressions: ProgressionModel[];
  chapters: ChapterModel[];
  destroyProgression: IDestroyProgression;
  updateProgression: IUpdateProgression;
}

const ProgressionList = (props: ProgressionListProps) => (
  <>
    <span className="text-2xl">Progressions</span>

    {/* Goes to */}
    <Card className="mt-4">
      <CardContent>
        <Typography gutterBottom component="h2" variant="h5">
          Goes to
        </Typography>

        <div className="flex flex-col">
          <span className="text-2xl pb-2"></span>
          {props.goToProgressions.length ? (
            <div className="space-y-2">
              {props.goToProgressions.map((progression) => (
                <div key={progression.id} className="flex flex-col">
                  <Progression
                    updateProgression={props.updateProgression}
                    progression={progression}
                    chapters={props.chapters}
                    nextChapterId={progression.destinationChapterId}
                    destroyProgression={props.destroyProgression}
                  ></Progression>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col">
              <span>There are no chapters you can go to from here</span>
              <span>Create a new one below, or select an existing one</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>

    {/* Get here from */}
    <Card className="mt-2">
      <CardContent>
        <Typography gutterBottom component="h2" variant="h5">
          Get here from
        </Typography>

        <div className="flex flex-col">
          {props.getToProgressions.length ? (
            props.getToProgressions.map((progression) => (
              <div key={progression.id} className="flex flex-col">
                <Progression
                  updateProgression={props.updateProgression}
                  progression={progression}
                  chapters={props.chapters}
                  nextChapterId={progression.sourceChapterId}
                  destroyProgression={props.destroyProgression}
                ></Progression>
              </div>
            ))
          ) : (
            <div className="flex flex-col">
              <span>There are no chapters you can go to from here</span>
              <span>Create a new one below, or select an existing one</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  </>
);

export default ProgressionList;
