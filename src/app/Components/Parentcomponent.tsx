import Childcomponent from"./Childcomponent"

const Parentcomponent = () => {
    let name = "Bilal Motiwala"

  return (
    <div className="mt-10">
            <Childcomponent name={name} />
        </div>
  )
}

export default Parentcomponent
