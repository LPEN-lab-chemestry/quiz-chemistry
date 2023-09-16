import styles from './Loading.module.css';

export default function Loading() {
  return (
    <div className={styles['LoadContainer']}>
      <div className={styles['c-loader']}></div>
    </div>
  );
}