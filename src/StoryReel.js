import React from "react";
import Story from "./Story";
import "./storyreel.css";

function StoryReel() {
  return (
    <div className='storyreel'>
      <Story
        image={
          "https://static3.mostaghelonline.com/servev2/S5BKglD5Jc9F/v0PAsgI_jeU,/%D8%A2%D9%86%D8%AC%D9%84%DB%8C%D9%86%D8%A7+%D8%AC%D9%88%D9%84%DB%8C.jpg"
        }
        profileSrc='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s900-c-k-c0x00ffffff-no-rj'
        title='Sonny Sangha'
      />
      <Story
        image={
          "https://pickytop.com/wp-content/uploads/2020/03/Anne-Hathaway.jpg"
        }
        profileSrc='https://cdn-icons-png.flaticon.com/512/194/194938.png'
        title='John Doe'
      />
      <Story
        image={
          "https://dkstatics-public.digikala.com/digikala-products/4847643.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80"
        }
        profileSrc='https://cdn.iconscout.com/icon/free/png-256/boy-avatar-4-1129037.png'
        title='Jack'
      />
      <Story
        image={
          "https://i.insider.com/5aa99ab8f375f6104c8b460c?width=600&format=jpeg&auto=webp"
        }
        profileSrc='https://www.pngarts.com/files/5/Cartoon-Avatar-Transparent.png'
        title='Naz'
      />
      <Story
        image={
          "https://i.pinimg.com/originals/08/56/55/085655ba6c13821c92d092f4a2b5f052.jpg"
        }
        profileSrc='https://us.hola.com/imagenes/health-and-beauty/2019072226169/ana-de-armas-hair-change/0-191-623/ana-de-armas-m.jpg?filter=w400'
        title='Anna'
      />
    </div>
  );
}

export default StoryReel;
