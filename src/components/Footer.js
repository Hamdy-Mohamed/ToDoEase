import "./Footer.css"
import mailImage from "../Mail.gif"
import cycleImage from "../cycle.gif"

function Footer() { 
  // Motion Icons Event
  let goToMail = ()=>window.open("https://mohameddhamdy407@gmail.com")
  let cycleReloader = ()=>window.location.reload()

  // social Icons Event
  let facebook_Event = ()=>window.open("https://www.facebook.com/hamdy.elgokar.5")
  let github_Event = ()=>window.open("https://github.com/Hamdy-Mohamed")
  let telegram_Event = ()=>window.open("https://t.me/201278859768")
  let linkedin_Event = ()=>window.open("https://www.linkedin.com/in/hamdy-abdal-majeed-b67b32246/")

  return (
      <footer>
        <div className="motion_icons">
          <img onClick={goToMail} src={mailImage} alt="mailImg" />
          <img onClick={cycleReloader} src={cycleImage} alt="cycleImage" />
        </div>
        <div className="icons">
          <div><i onClick={facebook_Event} class="fa-brands fa-facebook"></i></div>
          <div><i onClick={github_Event} class="fa-brands fa-github"></i></div>
          <div><i onClick={telegram_Event} class="fa-brands fa-telegram"></i></div>
          <div><i onClick={linkedin_Event} class="fa-brands fa-linkedin"></i></div>

        </div>
      </footer>
  )
}

export default Footer