import { useInView } from "react-intersection-observer"

const IntersectionCV = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
  });

  return (
    <>
      <div className="intersection-container">
        <div className="intersection-line"></div>
        
        <div className="intersection-relation_line" ref={ref}></div>
        <div className={inView ? "dl_cv" : "cv_hidden"}>
          <p>You can dowload my CV <a href="/public/Damien Generet FullStack.pdf" download>right here</a> !</p>
        </div>
      </div>
      
    </>
  )
}


export default IntersectionCV