import styles from './loader.module.css'

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <span className={styles.loader}></span>
    </div>
  )
}