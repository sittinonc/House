import classes from './Map.module.scss';
import Collection from '../../../UI/MainWidget/Collection/Collection';

const Map = (props) => {
  const config = {
    head: 'แผนที่',
    collection: props.data,
  };
  if (props.data.length === 0) {
    return null;
  } else {
    return (
      <Collection
        config={config}
        setSelectedPhoto={props.setSelectedPhoto}
        setSelected={props.setSelected}
      />
    );
  }
};

export default Map;
