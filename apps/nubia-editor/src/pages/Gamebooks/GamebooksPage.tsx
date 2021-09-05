import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  destroyGamebook,
  fetchGamebooks,
  createNewGamebook,
  IDestroyGamebook,
  IFetchGamebooks,
  ICreateNewGamebook,
} from '../../actions/gamebook.actions';
import GamebookModel from '../../models/Gamebook.model';
import CreateNewGamebookForm from './CreateNewGamebookForm';
import GamebookCard from './GamebookCard';

interface GamebooksPageProps {
  fetchGamebooks: IFetchGamebooks;
  createNewGamebook: ICreateNewGamebook;
  destroyGamebook: IDestroyGamebook;
  gamebooks: GamebookModel[];
}

const mapStateToProps = (state: any) => ({
  gamebooks: state.gamebooks.gamebooks,
});

const GamebooksPage = connect(mapStateToProps, {
  fetchGamebooks,
  createNewGamebook,
  destroyGamebook,
})((props: GamebooksPageProps) => {
  useEffect(() => {
    props.fetchGamebooks();
  }, []);

  return (
    <>
      <h1 className="text-2xl mb-2">Gamebooks</h1>
      <div className="flex flex-col space-y-1">
        {props.gamebooks?.map((gamebook) => (
          <div key={`gb_${gamebook.id}`}>
            <GamebookCard
              destroyGamebook={props.destroyGamebook}
              gamebook={gamebook}
            ></GamebookCard>
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-6">
        <CreateNewGamebookForm
          createNewGamebook={props.createNewGamebook}
        ></CreateNewGamebookForm>
      </div>
    </>
  );
});

export default GamebooksPage;
