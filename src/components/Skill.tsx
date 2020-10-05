import React from 'react'

const make_stars = (num: number) => {
  const stars : any[] = [];
  const style = {color: '#1666e5'}

  for (var i = 0; i < 5; ++i){
    let icon = '☆'
    if (i < num){
      icon = '★'
    }
    stars.push(<span style={style}>{icon}</span>)
  }
  return stars;
}

const Skill = ({stars, title}) => (
  <div>
    <h4 style={{marginBottom: '0px'}}>{title}</h4>
    {make_stars(stars)}
  </div>
)

export default Skill;