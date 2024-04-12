import React, { useContext, useEffect, useState } from 'react';
import './latestQn.css';
import questionContext from '../context/questionContext';
import LatestItem from './LatestItem';

const LatestQn = () => {
  const context = useContext(questionContext);
  const { getLatestpost } = context;
  const [latestpost, setLatestpost] = useState();

  // latest api call
  const getPost = async () => {
    const post = await getLatestpost();
    if (post.status) {
      setLatestpost(post.result);
    }
  }

  
  useEffect(() => {
    console.log("useEffect runs")
    getPost();
    
    // eslint-disable-next-line
  }, [])

  return (
    <>

      <div className="scroller" id="scroller">
        <div className="tag-list scroller_inner">
          <div className="item">

            {latestpost && latestpost.map((e) => {
              return (
                <div className="magic list" key={e._id}>
                  <LatestItem sName={e.Subject_Name}
                    sCode={e.Subject_Code}
                    dept={e.Dept_Name}
                    yr={e.Year}
                    sem={e.Semester}
                    sType={e.Sem_Type}
                    eType={e.Exam_Type}
                    dLink={e.dn_link}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </>
  )
}

export default LatestQn;
