import style from './styles.module.css'
import Header from '../Header'
import Calculator from '../Calculator'

function App() {

  return (
    <div className={style.container}>
      <Header/>
      <Calculator/>
      <div className={style.results}></div>
      <div className={style.resultsMeaning}></div>
      <div className={style.advice}></div>
      <div className={style.limitations}></div>
    </div>
  )
}

export default App
