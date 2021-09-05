import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { IDestroyGamebook } from '../../actions/gamebook.actions';
import GamebookModel from '../../models/Gamebook.model';

interface GamebookCardProps {
  gamebook: GamebookModel;
  destroyGamebook: IDestroyGamebook;
}

const GamebookCard = (props: GamebookCardProps) => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {props.gamebook.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {props.gamebook.description}
      </Typography>
    </CardContent>

    <CardActions>
      <Link to={`/gamebooks/${props.gamebook.id}`}>
        <Button size="small" color="primary">
          Open
        </Button>
      </Link>
      <Button
        size="small"
        onClick={() => props.destroyGamebook(props.gamebook.id)}
      >
        Delete
      </Button>
    </CardActions>
  </Card>
);

export default GamebookCard;
