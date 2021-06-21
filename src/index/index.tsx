import { Button, Message } from '@arco-design/web-react';

import styles from './style.module.scss';

const App = () => {
  const heee = () => Message.success('clickkkk!');
  return (
    <div className={styles.container}>
      <Button.Group>
        <Button className={styles.button} onClick={heee}>
          1
        </Button>
        <Button className={styles.button}>2</Button>
        <Button className={styles.button}>3</Button>
        <Button className={styles.button}>4</Button>
      </Button.Group>
    </div>
  );
};

export default App;
