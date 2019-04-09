import React from 'react';
import './App.css';

const Photo = {
  width: '160px',
  height: '70px',
  backgroundSize: 'cover',
  margin: '10px'

};

const bold = {
  fontWeight: 'bold',
  margin: "0 15px 0 0"

}

const flex = {
  display: "flex"
}


const ADbox = {
  height: 'auto',
  width: '550px',
  borderRadius: '10px 10px 10px 10px',
  border: '1px solid #e5e5e5',
  marginTop: '10px'
}


const icon = {
  height: '20px',
  paddingLeft: '10px'
}

const picbox = {
  backgroundSize: 'cover',
  backgroundPosition: 'center 35%',
  width: '550px',
  height: '200px',
  borderRadius: '5px 10px 0px 0px',
}

const wordbox = {
  padding: '15px',
  fontSize: '14px',
  lineHeight: '21px',
}

const gray = {
  color: '#aaa'
}

const iconword = {
  fontSize: '10px',
  paddingLeft: '10px',
  paddingRight: '50px',
  position: 'realative',
}

const red = {
  color: 'red',
  fontWeight: 'bold'
}

const iconbox = {
  marginTop: '15px'
}

const largebox = {
  fontSize: '14px',
  lineHeight: '21px',
  border: '1px solid #eee',
  borderRadius: '5px',
  backgroundColor: 'white',
  boxShadow: '3px 5px 10px #9b7c6c',
  width: '650px',
  margin: '20px auto',
  padding: '15px',
  justifyContent: 'center'
}

const blue = {
  color: '#7ABBE7'
}

let DATA = [
  {
    id: 1,
    author: 'Lambda School',
    bio: "Let's learn React by building simpleinterfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!",
    photo: 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png',
    adpic: 'https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png'
  }
]
class Footer extends React.Component {
  render() {
    return <div style={iconbox}>
      {/*icon*/}
      <img style={icon} alt="cmnt" src='http://iconshow.me/media/images/ui/ios7-icons/png/512/chatbubble-outline.png' />
      <span style={iconword}>2</span>

      <img style={icon} alt="retweet" src='https://png.icons8.com/material/1600/retweet.png' />
      <span style={iconword}>47</span>

      <img style={icon} alt="like" src='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png' />
      <span style={{ ...iconword, ...red }}>190</span>

      <img style={icon} alt="msg" src='http://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/512/mail-icon.png' />
    </div>
  }
}

const AdBox = (props) => (
  <div style={ADbox}>
    <div style={{ ...picbox, backgroundImage: `url(${props.adpic})`, }}></div>
    <div style={wordbox}>
      <span style={bold}>Get started with React </span>
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>

      <p style={gray}>reactjs.org</p>
    </div>
  </div>
)


const Something = (props) => (
  <div>
    <p>{props.bio}</p>
  </div>
)

const Author = (props) => (
  <span style={bold}>{props.author}</span>
)


const FormCard = (props) => (
  <div>
    {
      DATA.map((props) => {

        return <div style={{ ...largebox, ...flex }} key={props.id}>
          <div style={{ ...Photo, backgroundImage: `url(${props.photo})` }}></div>
          <div>
            <Author style={{ ...largebox, ...flex }} author={props.author} />
            <span style={blue}>@Lambdaschool</span>
            <Something bio={props.bio} />
            <AdBox adpic={props.adpic} />
            <Footer />
          </div>
        </div>
      })
    }
  </div>
)

export default FormCard;
