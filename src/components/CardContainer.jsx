import Card from "./Card"
function CardContainer(props) {
  const {words,imagesrc} = props;
  return (
    <div className="w-full  flex gap-5 pl-14 pr-14 pt-14">
        <div className="w-1/2 h-full ">
            <Card word={words[0]} left imagesrc={imagesrc[0]}/>
        </div>
        <div className="w-1/2 h-full">
            <Card word={words[1]} imagesrc={imagesrc[1]}/>
        </div>
    </div>
  )
}

export default CardContainer