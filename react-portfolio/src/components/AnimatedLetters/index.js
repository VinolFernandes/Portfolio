import './index.scss'

const AnimatedLetters =({ letterClass, strArray , inx}) => {
    return (
        strArray.map((char,i)=(
            <span key={ char + i} className={`${letterClass} _${i+idx}`}>

            </span>
        ))
    )
}