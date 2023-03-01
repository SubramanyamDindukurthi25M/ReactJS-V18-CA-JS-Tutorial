import { Book } from "./Components/Book"

export const App = () => {
  const bookDetails = [
    {
      name: 'ramakrishna-prabha',
      date: 'recent',
      id: 1,
    },
    {
      name: 'dummy',
      date: 'old',
      id: 2
    },
  ]

  return (
    <>
      <h2 className="text-center text-uppercase mb-0 text-info font-weight-bold">
        reactjs v18 tutorial
      </h2>
      <div className="underline mx-auto bg-secondary"></div>
      {
        bookDetails.map((ele) => {
          return <Book {...ele} key={ele.id}/>
        })
      }
    </>
  )
}