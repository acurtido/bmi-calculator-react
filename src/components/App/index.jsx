import style from './styles.module.css'
import Header from '../Header'

function App() {

  return (
    <div className={style.container}>
      <div className={style.header}><Header/></div>
      <div className={style.calculator}></div>
      <div className={style.results}></div>
      <div className={style.resultsMeaning}></div>
      <div className={style.advice}></div>
      <div className={style.limitations}></div>
    </div>
  )
}

export default App
