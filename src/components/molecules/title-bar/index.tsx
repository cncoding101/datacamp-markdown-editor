import './style.css';
import Text from '@components/atoms/text';

interface IProps {
  title: string;
  aside?: string;
}

const TitleBar: React.FC<IProps> = ({ title, aside }) => (
  <div className='mb-4'>
    <div className='titleBar__wrap'>
      {title && (
        <Text variant='sub' className='mb-2'>
          {title}
        </Text>
      )}
      {aside && <Text variant='minor'>{aside}</Text>}
    </div>
    <hr />
  </div>
);

export default TitleBar;
